"use client";

import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useUser, AVAILABLE_ITEMS, LabItem } from '@/app/context/UserContext';
import { Flask, Microscope, Telescope, AtomModel, PlanetModel, EinsteinBotModel } from './LabModels';

function Room() {
  const ROOM_RADIUS = 12;
  const ROOM_HEIGHT = 10;

  return (
    <group>
      {/* Mur cylindrique - Blanc futuriste avec panneaux */}
      <mesh position={[0, ROOM_HEIGHT / 2 - 1, 0]}>
        <cylinderGeometry args={[ROOM_RADIUS, ROOM_RADIUS, ROOM_HEIGHT, 64, 1, true]} />
        <meshStandardMaterial 
          color="#f8fafc" 
          side={THREE.BackSide} 
          roughness={0.2} 
          metalness={0.1} 
        />
      </mesh>
      
      {/* Anneaux néon décoratifs sur les murs */}
      <mesh position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[ROOM_RADIUS - 0.1, 0.05, 16, 100]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0, 6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[ROOM_RADIUS - 0.1, 0.05, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
      </mesh>
      
      {/* Sol - Dalles blanches avec grille holographique */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
        <circleGeometry args={[ROOM_RADIUS, 64]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} metalness={0.2} />
      </mesh>
      
      {/* Grille néon au sol (Cyber-Savant) */}
      <Grid 
        position={[0, -1, 0]} 
        cellSize={1} 
        cellThickness={1} 
        cellColor="#0ea5e9" 
        sectionSize={5} 
        sectionThickness={1.5} 
        sectionColor="#8b5cf6" 
        fadeDistance={25} 
        infiniteGrid 
      />

      {/* Plafond technique */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, ROOM_HEIGHT - 1, 0]}>
        <circleGeometry args={[ROOM_RADIUS, 64]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Luminaire central "Cyber-Savant" */}
      <group position={[0, ROOM_HEIGHT - 1.1, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[3, 32]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
          <circleGeometry args={[2.8, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#38bdf8" emissiveIntensity={4} />
        </mesh>
        {/* Anneau flottant sous le plafonnier */}
        <Float speed={2} rotationIntensity={0.5}>
          <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.5, 0.02, 16, 100]} />
            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={3} />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

function Table() {
  const ISLAND_RADIUS = 5;
  return (
    <group position={[0, -0.99, 0]}>
      {/* Structure de la table - Design épuré avec noyau lumineux */}
      <mesh position={[0, 0.9, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[ISLAND_RADIUS, ISLAND_RADIUS - 0.2, 0.2, 64]} />
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.1} />
      </mesh>
      
      {/* Bordure lumineuse néon de la table */}
      <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[ISLAND_RADIUS, 0.03, 16, 100]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={2} />
      </mesh>

      {/* Pied central technologique */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[1, 1.4, 0.9, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Anneaux flottants autour du pied */}
      <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[0, 0.45, 0]} rotation={[Math.PI / 2, 0.2, 0]}>
          <torusGeometry args={[1.6, 0.02, 16, 100]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>
  );
}

function ItemRenderer({ item, position }: { item: LabItem, position: [number, number, number] }) {
  switch (item.modelType) {
    case 'flask':
      return <Flask color={item.color} position={position} />;
    case 'microscope':
      return <Microscope color={item.color} position={position} />;
    case 'telescope':
      return <Telescope color={item.color} position={position} />;
    case 'atom':
      return <AtomModel color={item.color} position={position} />;
    case 'planet':
      return <PlanetModel color={item.color} position={position} />;
    default:
      return null;
  }
}

export default function LabScene() {
  const { inventory } = useUser();
  
  const SLOT_COUNT = 10;
  const ISLAND_RADIUS = 4.2;

  const ownedItems = useMemo(() => {
    return (inventory || []).map(id => AVAILABLE_ITEMS.find(item => item.id === id)).filter(Boolean) as LabItem[];
  }, [inventory]);

  const slots = useMemo(() => {
    return Array.from({ length: SLOT_COUNT }).map((_, i) => {
      const angle = (i / SLOT_COUNT) * Math.PI * 2;
      const x = Math.cos(angle) * ISLAND_RADIUS;
      const z = Math.sin(angle) * ISLAND_RADIUS;
      return [x, 0.1, z] as [number, number, number];
    });
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px] bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl relative">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 6, 12]} fov={45} />
          <OrbitControls 
            enablePan={false} 
            maxPolarAngle={Math.PI / 2.2} 
            minDistance={6} 
            maxDistance={15} 
          />
          
          <ambientLight intensity={0.4} />
          {/* Lumière centrale blanche propre */}
          <pointLight position={[0, 7, 0]} intensity={30} color="#ffffff" castShadow />
          {/* Lumières néon d'ambiance */}
          <pointLight position={[-8, 4, -8]} intensity={15} color="#8b5cf6" />
          <pointLight position={[8, 4, 8]} intensity={15} color="#0ea5e9" />
          
          <Room />
          <Table />
          
          <EinsteinBotModel position={[0, -0.1, 0]} />
          
          {ownedItems.map((item, index) => (
            index < SLOT_COUNT && (
              <ItemRenderer 
                key={`${item.id}-${index}`} 
                item={item} 
                position={slots[index]} 
              />
            )
          ))}

          {ownedItems.length === 0 && (
             <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} position={[0, 1.5, 0]}>
                <mesh>
                  <octahedronGeometry args={[0.5]} />
                  <meshStandardMaterial color="#0ea5e9" wireframe emissive="#0ea5e9" emissiveIntensity={2} />
                </mesh>
             </Float>
          )}

          <ContactShadows position={[0, -1, 0]} opacity={0.3} scale={25} blur={2.5} far={5} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>

      {/* UI Overlay - Style Cyber-Savant */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-6 left-6 pointer-events-none"
      >
        <div className="bg-slate-900/90 backdrop-blur-xl border-l-4 border-l-cyan-500 border border-white/5 p-4 rounded-2xl shadow-2xl">
           <div className="flex items-center gap-2 mb-1">
             <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
             <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em]">Lab Interface v1.0</p>
           </div>
           <p className="text-white font-bold text-lg">
             {ownedItems.length} <span className="text-slate-500 text-sm font-medium">/ {SLOT_COUNT}</span> Objets activés
           </p>
           <div className="mt-2 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
               initial={{ width: 0 }}
               animate={{ width: `${(ownedItems.length / SLOT_COUNT) * 100}%` }}
               transition={{ duration: 1 }}
             />
           </div>
        </div>
      </motion.div>
      
      {ownedItems.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <p className="text-cyan-400/80 font-bold bg-slate-900/60 backdrop-blur-md px-8 py-4 rounded-3xl border border-cyan-500/30 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
            SYSTÈME EN ATTENTE : AJOUTE DES ÉCHANTILLONS 🧪
          </p>
        </motion.div>
      )}

      {/* Décoration HUD coins (Cyber-Savant) */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500/30 rounded-tr-[2.5rem] m-4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-[2.5rem] m-4 pointer-events-none" />
    </div>
  );
}
