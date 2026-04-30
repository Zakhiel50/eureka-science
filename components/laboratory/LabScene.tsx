"use client";

import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useUser, AVAILABLE_ITEMS, LabItem } from '@/app/context/UserContext';
import { Flask, Microscope, Telescope, AtomModel, PlanetModel, EinsteinBotModel } from './LabModels';

function Room() {
  const ROOM_RADIUS = 8;
  const ROOM_HEIGHT = 6;

  return (
    <group>
      {/* Mur cylindrique */}
      <mesh position={[0, ROOM_HEIGHT / 2 - 1, 0]}>
        <cylinderGeometry args={[ROOM_RADIUS, ROOM_RADIUS, ROOM_HEIGHT, 64, 1, true]} />
        <meshStandardMaterial color="#0f172a" side={THREE.BackSide} />
      </mesh>
      
      {/* Sol - Légèrement abaissé pour éviter le Z-fighting */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
        <circleGeometry args={[ROOM_RADIUS, 64]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Plafond */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, ROOM_HEIGHT - 1, 0]}>
        <circleGeometry args={[ROOM_RADIUS, 64]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
    </group>
  );
}

function Table() {
  const ISLAND_RADIUS = 5;
  return (
    <group position={[0, -0.99, 0]}>
      {/* Structure de la table circulaire */}
      <mesh position={[0, 0.9, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[ISLAND_RADIUS, ISLAND_RADIUS - 0.2, 0.2, 64]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Pied central */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[1, 1.5, 0.9, 32]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
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

  // Récupérer les données complètes des objets possédés
  const ownedItems = useMemo(() => {
    return (inventory || []).map(id => AVAILABLE_ITEMS.find(item => item.id === id)).filter(Boolean) as LabItem[];
  }, [inventory]);

  // Calculer les positions des slots
  const slots = useMemo(() => {
    return Array.from({ length: SLOT_COUNT }).map((_, i) => {
      const angle = (i / SLOT_COUNT) * Math.PI * 2;
      const x = Math.cos(angle) * ISLAND_RADIUS;
      const z = Math.sin(angle) * ISLAND_RADIUS;
      return [x, 0.1, z] as [number, number, number];
    });
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px] bg-slate-950 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl relative">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
          <OrbitControls 
            enablePan={false} 
            maxPolarAngle={Math.PI / 2.1} 
            minDistance={5} 
            maxDistance={12} 
          />
          
          {/* Lumières */}
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 5, 0]} intensity={20} color="#8b5cf6" castShadow />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} castShadow />
          
          {/* Environnement */}
          <Room />
          <Table />
          
          {/* Einstein Bot au centre */}
          <EinsteinBotModel position={[0, -0.1, 0]} />
          
          {/* Objets de l'inventaire */}
          {ownedItems.map((item, index) => (
            index < SLOT_COUNT && (
              <ItemRenderer 
                key={`${item.id}-${index}`} 
                item={item} 
                position={slots[index]} 
              />
            )
          ))}

          {/* Décoration supplémentaire si vide */}
          {ownedItems.length === 0 && (
             <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} position={[0, 1.5, 0]}>
                <mesh>
                  <octahedronGeometry args={[0.5]} />
                  <meshStandardMaterial color="#8b5cf6" wireframe />
                </mesh>
             </Float>
          )}

          <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={20} blur={2.4} far={4.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl">
           <p className="text-purple-400 text-xs font-black uppercase tracking-widest mb-1">Status</p>
           <p className="text-white font-bold">{ownedItems.length} / {SLOT_COUNT} emplacements utilisés</p>
        </div>
      </div>
      
      {ownedItems.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-slate-500 font-medium bg-slate-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-800">
            Ton laboratoire est vide. Va à la boutique ! 🧪
          </p>
        </div>
      )}
    </div>
  );
}
