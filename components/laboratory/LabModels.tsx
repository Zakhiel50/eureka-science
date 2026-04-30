"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Cylinder, Box, TorusKnot, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Flask({ color, position }: { color: string, position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <group>
        {/* Base of the flask */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.8, 1.2, 32]} />
          <meshPhysicalMaterial 
            color={color} 
            transparent 
            opacity={0.6} 
            roughness={0} 
            transmission={1} 
            thickness={0.5}
          />
        </mesh>
        {/* Neck of the flask */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.8, 32]} />
          <meshPhysicalMaterial 
            color={color} 
            transparent 
            opacity={0.6} 
            roughness={0} 
            transmission={1}
          />
        </mesh>
        {/* Liquid inside */}
        <mesh position={[0, -0.2, 0]}>
          <coneGeometry args={[0.6, 0.8, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export function Microscope({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/microscope.glb');
  
  // Cloner la scène pour pouvoir modifier les matériaux sans affecter les autres instances
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        if (child.material) {
          child.material = child.material.clone();
          // On peut teinter certaines parties pour que le "skin" choisi par l'utilisateur soit visible
          if (child.name.toLowerCase().includes('body') || child.name.toLowerCase().includes('base')) {
             // Optionnel: On pourrait teinter le corps
          }
          if (child.name.toLowerCase().includes('glass') || child.name.toLowerCase().includes('lens') || child.name.toLowerCase().includes('accent')) {
             child.material.color.set(color);
             child.material.emissive = new THREE.Color(color);
             child.material.emissiveIntensity = 0.5;
          }
        }
      }
    });
    return clone;
  }, [scene, color]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3} position={position}>
      <primitive object={clonedScene} scale={0.6} rotation={[0, -Math.PI / 2, 0]} />
    </Float>
  );
}

// Pré-chargement du modèle
useGLTF.preload('/objects/microscope.glb');

export function Telescope({ color, position }: { color: string, position: [number, number, number] }) {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <group rotation={[0, 0, 0.5]}>
        <Cylinder args={[0.3, 0.4, 1.5, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Cylinder>
        <Cylinder args={[0.1, 0.1, 1]} position={[0, -0.5, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#222" />
        </Cylinder>
      </group>
    </Float>
  );
}

export function AtomModel({ color, position }: { color: string, position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.z += 0.005;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1} position={position}>
      <group ref={groupRef}>
        <Sphere args={[0.3, 32, 32]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
        </Sphere>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <torusGeometry args={[0.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh rotation={[0, -Math.PI / 4, 0]}>
          <torusGeometry args={[0.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </Float>
  );
}

export function PlanetModel({ color, position }: { color: string, position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <group>
        <Sphere args={[0.6, 32, 32]}>
          <MeshDistortMaterial color={color} speed={2} distort={0.3} radius={1} />
        </Sphere>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[1, 0.05, 16, 100]} />
          <meshStandardMaterial color="rgba(255,255,255,0.5)" transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export function EinsteinBotModel({ position }: { position: [number, number, number] }) {
  const headRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (headRef.current) {
      headRef.current.position.y = 1.1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
      headRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Platform/Pedestal */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.1, 32]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        {/* Base / Body */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.4, 0.6, 0.8, 32]} />
          <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Glowing ring at base */}
        <mesh position={[0, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.5, 0.05, 16, 100]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
        </mesh>

        {/* Floating Head */}
        <group ref={headRef}>
          {/* Head Sphere */}
          <mesh>
            <sphereGeometry args={[0.45, 32, 32]} />
            <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
          </mesh>
          
          {/* Eyes / Visor */}
          <mesh position={[0, 0.05, 0.35]}>
            <boxGeometry args={[0.6, 0.15, 0.1]} />
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
          </mesh>

          {/* Antennas */}
          <mesh position={[0.3, 0.4, 0]} rotation={[0, 0, -0.5]}>
            <cylinderGeometry args={[0.02, 0.02, 0.3]} />
            <meshStandardMaterial color="#555" />
          </mesh>
          <mesh position={[-0.3, 0.4, 0]} rotation={[0, 0, 0.5]}>
            <cylinderGeometry args={[0.02, 0.02, 0.3]} />
            <meshStandardMaterial color="#555" />
          </mesh>
          
          {/* Little glowing balls on antennas */}
          <mesh position={[0.38, 0.55, 0]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
          </mesh>
          <mesh position={[-0.38, 0.55, 0]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
