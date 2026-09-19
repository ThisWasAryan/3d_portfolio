import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { useAppStore } from '../stores/appStore';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function CameraTransition() {
  const { camera, controls } = useThree();
  const viewMode = useAppStore((state) => state.viewMode);
  const setViewMode = useAppStore((state) => state.setViewMode);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (viewMode === 'laptop-transition') {
      // The lid animation takes 1.5s
      // We can start the camera zoom simultaneously or slightly delayed
      tl.current = gsap.timeline({
        onComplete: () => {
          // Once zoomed in, transition to login screen
          setViewMode('login');
        }
      });

      tl.current.to(camera.position, {
        x: 0.025,
        y: 1.64,
        z: 3.94,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 0);
    } else if (viewMode === 'shutdown') {
      tl.current = gsap.timeline({
        onComplete: () => {
          setViewMode('room');
        }
      });

      tl.current.to(camera.position, {
        x: 0.05,
        y: 3.28,
        z: 7.88,
        duration: 2,
        ease: 'power2.inOut',
      }, 0);

      if (controls) {
        tl.current.to((controls as any).target, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: 'power2.inOut',
        }, 0);
      }
    }
  }, [viewMode, camera, controls, setViewMode]);

  return null;
}
