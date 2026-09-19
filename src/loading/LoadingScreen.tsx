import React, { useEffect, useState } from 'react';
import { useAppStore } from '../stores/appStore';
import { useProgress } from '@react-three/drei';
import './LoadingScreen.css';

const HELLOS = [
  "Hello", "こんにちは", "नमस्ते", "Hola", "Bonjour", "Ciao", "Привет", "안녕하세요", "مرحبا"
];

export function LoadingScreen() {
  const setViewMode = useAppStore((state) => state.setViewMode);
  const { progress } = useProgress();
  const [phase, setPhase] = useState<'loading' | 'ready' | 'eye-opening' | 'done'>('loading');
  const [helloIndex, setHelloIndex] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  // Force loading screen to show at least a few languages
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Cycle languages while loading
  useEffect(() => {
    if (phase !== 'loading') return;
    const interval = setInterval(() => {
      setHelloIndex((prev) => (prev + 1) % HELLOS.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  // Transition from loading to ready when 100% AND min time elapsed
  useEffect(() => {
    // Wait for progress to be truly 100 and min time elapsed
    if (progress >= 100 && minTimeElapsed && phase === 'loading') {
      const timer = setTimeout(() => {
        setPhase('ready');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, minTimeElapsed, phase]);

  // Sequence from ready to done
  useEffect(() => {
    if (phase === 'ready') {
      // 1.2s to show "Hi_" blinking
      const eyeTimer = setTimeout(() => {
        setPhase('eye-opening');
      }, 1200);
      return () => clearTimeout(eyeTimer);
    } else if (phase === 'eye-opening') {
      // 1.2s for eyelid animation to finish
      const doneTimer = setTimeout(() => {
        setPhase('done');
        setViewMode('room');
      }, 1200);
      return () => clearTimeout(doneTimer);
    }
  }, [phase, setViewMode]);

  if (phase === 'done') return null;

  return (
    <div className={`loading-container ${phase === 'eye-opening' ? 'eye-opening' : ''}`}>
      <div className="eyelid eyelid-top"></div>
      <div className="eyelid eyelid-bottom"></div>
      
      <div className={`text-container ${phase === 'eye-opening' ? 'text-fading-out' : ''}`}>
        {phase === 'loading' && (
          <div className="text-line text-hello">{HELLOS[helloIndex]}</div>
        )}
        {phase !== 'loading' && (
          <div className="text-line text-hi">
            Hi<span className="blinking-cursor">_</span>
          </div>
        )}
      </div>
      
      <div className={`progress-indicator ${phase !== 'loading' ? 'fading-out' : ''}`}>
        {Math.round(progress)}%
      </div>
    </div>
  );
}
