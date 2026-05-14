"use client";
"use cache";
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF, Sphere, Cylinder, MeshDistortMaterial, Center } from '@react-three/drei';
import * as THREE from 'three';

function cloneScene(scene: THREE.Group) {
  const clone = scene.clone(true);

  clone.traverse((child: any) => {
    if (child.isMesh) {
      child.material = child.material.clone();
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return clone;
}

export function Flask({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/flask.glb');
  
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        if (child.material) {
          child.material = (child.material as THREE.Material).clone();
          const name = child.name.toLowerCase();
          
          // Apply color to liquid or accents
          if (name.includes('liquid') || name.includes('fluid') || name.includes('accent') || name.includes('content') || name.includes('water')) {
             (child.material as any).color.set(color);
             (child.material as any).emissive = new THREE.Color(color);
             (child.material as any).emissiveIntensity = 0.8;
          }
          
          // Make glass parts transparent
          if (name.includes('glass') || name.includes('bottle') || name.includes('flask')) {
            (child.material as any).transparent = true;
            (child.material as any).opacity = 0.6;
            (child.material as any).transmission = 1;
            (child.material as any).thickness = 0.5;
            (child.material as any).roughness = 0;
          }
        }
      }
    });
    return clone;
  }, [scene, color]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <primitive object={clonedScene} scale={0.8} />
    </Float>
  );
}

export function Distillator({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/distillator.glb');
  
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        if (child.material) {
          child.material = (child.material as THREE.Material).clone();
          const name = child.name.toLowerCase();
          
          // Apply color to liquid or glowing parts
          if (name.includes('liquid') || name.includes('glow') || name.includes('accent') || name.includes('energy')) {
             (child.material as any).color.set(color);
             (child.material as any).emissive = new THREE.Color(color);
             (child.material as any).emissiveIntensity = 1;
          }
          
          // Transparent parts
          if (name.includes('glass') || name.includes('tube') || name.includes('tank')) {
            (child.material as any).transparent = true;
            (child.material as any).opacity = 0.5;
            (child.material as any).transmission = 1;
          }
        }
      }
    });
    return clone;
  }, [scene, color]);

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2} position={position}>
      <primitive object={clonedScene} scale={0.7} rotation={[0, Math.PI / 4, 0]} />
    </Float>
  );
}

export function Microscope({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/microscope.glb');
  
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        if (child.material) {
          child.material = (child.material as THREE.Material).clone();
          if (child.name.toLowerCase().includes('glass') || child.name.toLowerCase().includes('lens') || child.name.toLowerCase().includes('accent')) {
             (child.material as any).color.set(color);
             (child.material as any).emissive = new THREE.Color(color);
             (child.material as any).emissiveIntensity = 0.5;
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

export function Telescope({ color, position }: { color: string, position: [number, number, number] }) {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <group rotation={[0, 0, 0.5]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 1.5, 32]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      </group>
    </Float>
  );
}

export function AtomModel({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/atom.glb');
  const ref = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const clone = cloneScene(scene);

    clone.traverse((child: any) => {
      if (child.isMesh || child.isLine) {
        const name = child.name.toLowerCase();

        if (name.includes('nucleus') || name.includes('core') || name.includes('proton') || name.includes('neutron')) {
          if (child.material) {
            child.material.color.set(color);
            child.material.emissive = new THREE.Color(color);
            child.material.emissiveIntensity = 1;
          }
        }
      }
    });

    return clone;
  }, [scene, color]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position}>
      <Float speed={3} floatIntensity={1}>
        <Center top>
          <primitive ref={ref} object={model} scale={2} />
        </Center>
      </Float>
    </group>
  );
}

export function Virus({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/virus.glb');
  const ref = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const clone = cloneScene(scene);
    clone.traverse((child: any) => {
      if (child.isMesh) {
        const name = child.name.toLowerCase();
        // Dynamic coloring for virus parts
        if (name.includes('spike') || name.includes('outer') || name.includes('membrane') || name.includes('core')) {
          child.material.color.set(color);
          child.material.emissive = new THREE.Color(color);
          child.material.emissiveIntensity = 0.5;
        }
      }
    });
    return clone;
  }, [scene, color]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0;
      ref.current.rotation.z += 0;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <primitive ref={ref} object={model} scale={0.5} />
      </Float>
    </group>
  );
}

export function Hearth({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/hearth.glb');
  const ref = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const clone = cloneScene(scene);
    clone.traverse((child: any) => {
      if (child instanceof THREE.Mesh) {
        if (child.material) {
          child.material = (child.material as THREE.Material).clone();
          (child.material as any).emissiveIntensity = 0.2;
        }
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    if (ref.current) {
      // Heartbeat animation
      const scale = 0.8 + Math.pow(Math.sin(state.clock.getElapsedTime() * 4), 2) * 0.05;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <primitive ref={ref} object={model} />
      </Float>
    </group>
  );
}

export function Moon({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/moon.glb');
  const ref = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const clone = cloneScene(scene);
    clone.traverse((child: any) => {
      if (child instanceof THREE.Mesh) {
        if (child.material) {
          child.material = (child.material as THREE.Material).clone();
          (child.material as any).color.set(color);
          (child.material as any).emissive = new THREE.Color(color);
          (child.material as any).emissiveIntensity = 0.1;
        }
      }
    });
    return clone;
  }, [scene, color]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={position}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <primitive ref={ref} object={model} scale={1.5} />
      </Float>
    </group>
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

export function Rocket({ color, position }: { color: string, position: [number, number, number] }) {
  const { scene } = useGLTF('/objects/rocket.glb');
  const ref = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const clone = cloneScene(scene);
    clone.traverse((child: any) => {
      if (child instanceof THREE.Mesh) {
        if (child.material) {
          child.material = (child.material as THREE.Material).clone();
          const name = child.name.toLowerCase();
          
          if (name.includes('body') || name.includes('wing') || name.includes('accent') || name.includes('fin')) {
            (child.material as any).color.set(color);
          }
          
          if (name.includes('window') || name.includes('glass')) {
            (child.material as any).transparent = true;
            (child.material as any).opacity = 0.5;
            (child.material as any).emissive = new THREE.Color(color);
            (child.material as any).emissiveIntensity = 0.5;
          }
        }
      }
    });
    return clone;
  }, [scene, color]);

  useFrame((state) => {
    if (ref.current) {
      // Gentle takeoff/landing hover animation
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.15;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <primitive ref={ref} object={model} scale={0.5} />
      </Float>
    </group>
  );
}

// Preload GLB models
useGLTF.preload('/objects/microscope.glb');
useGLTF.preload('/objects/atom.glb');
useGLTF.preload('/objects/flask.glb');
useGLTF.preload('/objects/distillator.glb');
useGLTF.preload('/objects/virus.glb');
useGLTF.preload('/objects/hearth.glb');
useGLTF.preload('/objects/moon.glb');
useGLTF.preload('/objects/rocket.glb');
