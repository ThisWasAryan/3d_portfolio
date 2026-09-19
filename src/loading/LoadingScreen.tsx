import React, { useEffect, useState } from 'react';
import { useAppStore } from '../stores/appStore';
import './LoadingScreen.css';

export function LoadingScreen() {
  const setViewMode = useAppStore((state) => state.setViewMode);
  
  const [phase, setPhase] = useState<'text' | 'fading-text' | 'eye-opening' | 'done'>('text');

  useEffect(() => {
    // Sequence timing
    // 0.5s: "Hello" appears
    // 1.5s: "Hi" appears
    // 2.5s: Start fading out text
    const fadeOutTimer = setTimeout(() => {
      setPhase('fading-text');
    }, 3000);

    // 3.0s: Start eye opening animation
    const eyeOpenTimer = setTimeout(() => {
      setPhase('eye-opening');
    }, 3500);

    // 4.7s: Eye opening finishes (animation is 1.2s), transition to room
    const doneTimer = setTimeout(() => {
      setPhase('done');
      setViewMode('room');
    }, 4700);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(eyeOpenTimer);
      clearTimeout(doneTimer);
    };
  }, [setViewMode]);

  if (phase === 'done') return null;

  return (
    <div className={`loading-container ${phase === 'eye-opening' ? 'eye-opening' : ''}`}>
      <div className="eyelid eyelid-top"></div>
      <div className="eyelid eyelid-bottom"></div>
      <div className={`text-container ${phase === 'fading-text' || phase === 'eye-opening' ? 'text-fading-out' : ''}`}>
        <div className="text-line text-hello">Hello.</div>
        <div className="text-line text-hi">Hi.</div>
      </div>
    </div>
  );
}
