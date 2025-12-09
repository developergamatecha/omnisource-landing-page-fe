'use client';
import { useEffect, useRef, useState } from 'react';
import { useFrame, Canvas, useThree } from '@react-three/fiber';
import { Float, OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

function LaptopModel() {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/assets/threejs/macbook_pro_14_inch_M5.glb');

  const { size } = useThree();
  // Reactive responsive logic based on Canvas pixel width
  const isMobile = size.width < 640;
  const isTablet = size.width < 1024;

  const scale = isMobile ? 7 : isTablet ? 8 : 9;
  const position = isMobile ? [0, -0.8, 0] : isTablet ? [0, -1, 0] : [0, -1, 0];

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
      <primitive
        ref={meshRef}
        object={scene}
        position={position}
        scale={scale}
      />
    </Float>
  );
}

useGLTF.preload('/assets/threejs/macbook_pro_14_inch_M5.glb');

export function Scene() {
  const [width, setWidth] = useState<string | number>('100%');

  useEffect(() => {
    const handleResize = () => {
      // Check if tablet/mobile (< 1024px)
      if (window.innerWidth < 1024) {
        setWidth(window.innerWidth - 50);
      } else {
        // Desktop uses container width
        setWidth('100%');
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 25 }} style={{ width }}>
      <ambientLight intensity={1} />
      <pointLight intensity={1} position={[10, 10, 10]} />
      <Environment preset="city" />
      <LaptopModel />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
    </Canvas>
  );
}
