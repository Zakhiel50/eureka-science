"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Stars } from '@react-three/drei';
import { useUser, AVAILABLE_ITEMS } from '@/app/context/UserContext';
import { Flask, Microscope, Telescope, AtomModel, PlanetModel } from './LabModels';

export default function LabScene() {
  const { inventory } = useUser();

  const renderItem = (itemId: string, index: number) => {
    const item = AVAILABLE_ITEMS.find(i => i.id === itemId);
    if (!item) return null;

    // Arrange items in a circle or grid
    const angle = (index / Math.max(inventory.length, 1)) * Math.PI * 2;
    const radius = 3 + Math.floor(index / 5) * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const position: [number, number, number] = [x, 0, z];

    switch (item.modelType) {
      case 'flask': return <Flask key={itemId} color={item.color} position={position} />;
      case 'microscope': return <Microscope key={itemId} color={item.color} position={position} />;
      case 'telescope': return <Telescope key={itemId} color={item.color} position={position} />;
      case 'atom': return <AtomModel key={itemId} color={item.color} position={position} />;
      case 'planet': return <PlanetModel key={itemId} color={item.color} position={position} />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-[60vh] rounded-3xl overflow-hidden bg-slate-950 relative border border-slate-800 shadow-2xl">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
        <OrbitControls 
          enablePan={false} 
          minDistance={5} 
          maxDistance={20} 
          maxPolarAngle={Math.PI / 2.1} 
        />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="cyan" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            {inventory.length === 0 ? (
              <AtomModel color="#00ffff" position={[0, 0, 0]} />
            ) : (
              inventory.map((id, index) => renderItem(id, index))
            )}
            
            {/* Laboratory floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
              <planeGeometry args={[50, 50]} />
              <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.8} />
            </mesh>
            <ContactShadows position={[0, -1.49, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
          </group>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      {inventory.length === 0 && (
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-cyan-500/30 text-center space-y-2 max-w-xs">
            <h3 className="text-xl font-bold text-white">Ton Labo est vide !</h3>
            <p className="text-slate-400 text-sm">Utilise tes XP pour acheter des objets dans la boutique ci-dessous.</p>
          </div>
        </div>
      )}
    </div>
  );
}
