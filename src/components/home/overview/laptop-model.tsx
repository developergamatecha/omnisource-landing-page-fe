'use client';
import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Float, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import laptopImage from '~/assets/v5/laptop-3d.png';

function LaptopModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(laptopImage.src);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
      rotationIntensity={0.2}
      speed={2}
    >
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[4, 3.2]} />
        <meshBasicMaterial transparent alphaTest={0.1} map={texture} />
      </mesh>
    </Float>
  );
}

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={1} />
      <pointLight intensity={0.5} position={[10, 10, 10]} />
      <LaptopModel />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
