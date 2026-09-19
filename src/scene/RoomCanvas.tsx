import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { RoomBackground } from './RoomBackground';
import { Laptop } from './Laptop';
import { CameraTransition } from './CameraTransition';
import { Desk, CameraModel, GaneshIdol, Earbuds } from './RoomProps';

import { useAppStore } from '../stores/appStore';
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
  const viewMode = useAppStore((state) => state.viewMode);

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Canvas
        frameloop="demand"
        camera={{ position: [0.05, 3.28, isMobile ? 13.0 : 7.88], fov: 50 }}
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

          <Html position={[0, 1.45, 1.2]} center zIndexRange={[100, 0]}>
            <div className="room-floating-badge" style={{
              color: 'white',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.05em',
              pointerEvents: 'none',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              animation: 'pulse 2s infinite',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              Click screen to start the journey
            </div>
          </Html>
        </Suspense>

        <OrbitControls 
          makeDefault 
          enabled={viewMode === 'room'}
          enableDamping 
          dampingFactor={0.05}
          enablePan={false}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minDistance={2}
          maxDistance={isMobile ? 16 : 12}
        />
        <CameraTransition />
        <ResetCameraListener />
      </Canvas>

      <button
        onClick={() => window.dispatchEvent(new Event('reset-camera'))}
        className="reset-camera-btn"
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

      <div className="room-header-container" style={{
        position: 'absolute',
        top: '24px',
        left: '0',
        right: '0',
        padding: '0 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: 10,
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        <div className="room-header-title" style={{
          color: 'black',
          fontFamily: 'system-ui, sans-serif',
          fontWeight: 900,
          letterSpacing: '-0.03em',
        }}>
          ThisWasAryan.
        </div>
        <div className="room-header-subtitle" style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: 'system-ui, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.05em',
        }}>
          Explore, it's a 3D space
        </div>
      </div>

      {/* Fade overlay during laptop zoom in */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'black',
        opacity: viewMode === 'laptop-transition' ? 1 : 0,
        transition: 'opacity 1.5s cubic-bezier(0.4, 0, 1, 1)',
        pointerEvents: 'none',
        zIndex: 100
      }} />
    </div>
  );
}
