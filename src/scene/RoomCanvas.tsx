import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RoomBackground } from './RoomBackground';
import { Laptop } from './Laptop';
import { CameraTransition } from './CameraTransition';
import { Desk, CameraModel, GaneshIdol, Earbuds } from './RoomProps';

import gsap from 'gsap';

function ResetCameraListener() {
  const { camera, controls } = useThree();
  
  useEffect(() => {
    const handleEvent = () => {
      gsap.to(camera.position, { x: 0.05, y: 3.28, z: 7.88, duration: 1.5, ease: 'power2.inOut' });
      if (controls) {
        gsap.to((controls as any).target, { x: 0, y: 0, z: 0, duration: 1.5, ease: 'power2.inOut' });
      }
    };
    window.addEventListener('reset-camera', handleEvent);
    return () => window.removeEventListener('reset-camera', handleEvent);
  }, [camera, controls]);

  return null;
}

export function RoomCanvas() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Canvas
        frameloop="demand"
        camera={{ position: [0.05, 3.28, 7.88], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <RoomBackground />
        
        <ambientLight intensity={2.0} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 3, 2]} intensity={0.5} />

        {/* 3D Models */}
        <Suspense fallback={null}>
          <Desk />
          <Laptop />
          <CameraModel />
          <GaneshIdol />
          <Earbuds />
        </Suspense>

        <OrbitControls 
          makeDefault 
          enableDamping 
          dampingFactor={0.05}
          enablePan={false}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minDistance={2}
          maxDistance={12}
        />
        <CameraTransition />
        <ResetCameraListener />
      </Canvas>

      <button
        onClick={() => window.dispatchEvent(new Event('reset-camera'))}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          zIndex: 10,
          padding: '12px 24px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer',
          fontFamily: 'system-ui, sans-serif',
          fontWeight: 500,
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
        onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
      >
        Reset Camera
      </button>
    </div>
  );
}
