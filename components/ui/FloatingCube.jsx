"use client";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedCube() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#14b8a6" 
        transparent 
        opacity={0.8}
        wireframe={false}
      />
    </Box>
  );
}

function FloatingParticles() {
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(
      <Sphere
        key={i}
        args={[0.02]}
        position={[
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ]}
      >
        <meshBasicMaterial color="#14b8a6" transparent opacity={0.6} />
      </Sphere>
    );
  }

  return <group ref={particlesRef}>{particles}</group>;
}

export default function FloatingCube() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedCube />
        <FloatingParticles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
