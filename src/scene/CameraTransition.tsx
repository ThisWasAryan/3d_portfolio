import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useAppStore } from '../stores/appStore';
import gsap from 'gsap';

export function CameraTransition() {
  const { camera, controls, invalidate } = useThree();
  const viewMode = useAppStore((state) => state.viewMode);
  const setViewMode = useAppStore((state) => state.setViewMode);

  useEffect(() => {
    // Kill any active tweens on the camera and controls when mode changes
    gsap.killTweensOf(camera.position);
    if (controls) {
      gsap.killTweensOf((controls as any).target);
    }

    if (viewMode === 'laptop-transition') {
      const tl = gsap.timeline({
        onUpdate: invalidate,
        onComplete: () => {
          setViewMode('login');
        }
      });

      tl.to(camera.position, {
        x: 0.04,
        y: 0.3,
        z: 2.75,
        duration: 1.8,
        ease: 'power3.in'
      }, 0);
      
      if (controls) {
        tl.to((controls as any).target, {
          x: 0.04,
          y: 0.3,
          z: 2.6,
          duration: 1.8,
          ease: 'power3.in'
        }, 0);
      }
    } else if (viewMode === 'shutdown') {
      const tl = gsap.timeline({
        onUpdate: invalidate,
        onComplete: () => {
          setViewMode('room');
        }
      });

      tl.to(camera.position, {
        x: 0.05,
        y: 3.28,
        z: 7.88,
        duration: 2,
        ease: 'power2.inOut',
      }, 0);

      if (controls) {
        tl.to((controls as any).target, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: 'power2.inOut',
        }, 0);
      }
    }
  }, [viewMode, camera, controls, invalidate, setViewMode]);

  return null;
}
