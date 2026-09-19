import React from 'react';
import { useAppStore } from '../stores/appStore';
import './LoginScreen.css';

export function LoginScreen() {
  const setViewMode = useAppStore((state) => state.setViewMode);

  const handleLogin = () => {
    setViewMode('desktop');
  };

  return (
    <div className="login-container">
      <div className="login-avatar">A</div>
      <div className="login-name">Aryan</div>
      <button className="login-button" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}
