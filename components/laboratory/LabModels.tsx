"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Cylinder, Box, TorusKnot } from '@react-three/drei';
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
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3} position={position}>
      <group rotation={[0, Math.PI / 4, 0]}>
        <Box args={[1, 0.2, 1]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#333" />
        </Box>
        <Cylinder args={[0.1, 0.1, 1]} position={[-0.3, 0, 0]} rotation={[0, 0, 0.2]}>
          <meshStandardMaterial color="#555" />
        </Cylinder>
        <Cylinder args={[0.2, 0.2, 0.6]} position={[0, 0.3, 0]} rotation={[0, 0, -0.8]}>
          <meshStandardMaterial color={color} />
        </Cylinder>
      </group>
    </Float>
  );
}

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
