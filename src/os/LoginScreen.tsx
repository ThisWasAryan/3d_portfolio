import React, { useState, useEffect } from 'react';
import { useAppStore } from '../stores/appStore';
import { Mail, Lock } from 'lucide-react';
import { Instagram, Linkedin, Github } from './BrandIcons';
import './LoginScreen.css';

export function LoginScreen() {
  const setViewMode = useAppStore((state) => state.setViewMode);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  const dateString = time.toLocaleDateString('en-US', dateOptions);

  const handleLogin = () => {
    setViewMode('desktop');
  };

  return (
    <div className="login-container" onClick={handleLogin}>
      {/* Background grain/gradient handled in CSS */}
      <div className="login-overlay-grain"></div>

      {/* Top Clock Section */}
      <div className="login-clock-container">
        <div className="login-date">{dateString}</div>
        <div className="login-time">{timeString}</div>
      </div>

      {/* Social Links Row */}
      <div className="login-socials-row">
        <a href="https://www.instagram.com/drugd3alers/" target="_blank" rel="noreferrer" className="login-social-icon" onClick={(e) => e.stopPropagation()}>
          <Instagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/thiswasaryan1/" target="_blank" rel="noreferrer" className="login-social-icon" onClick={(e) => e.stopPropagation()}>
          <Linkedin size={24} />
        </a>
        <a href="http://github.com/thisWasAryan" target="_blank" rel="noreferrer" className="login-social-icon" onClick={(e) => e.stopPropagation()}>
          <Github size={24} />
        </a>
        <a href="mailto:hi@thiswasaryan.in" className="login-social-icon" onClick={(e) => e.stopPropagation()}>
          <Mail size={24} />
        </a>
      </div>

      {/* Center Profile Section */}
      <div className="login-profile-container">
        <img src="/ProfilePic.jpeg" alt="Aryan Raj" className="login-avatar" />
        <div className="login-name">Aryan Raj</div>
        <div className="login-title">SOFTWARE ENGINEER</div>
      </div>

      {/* Bottom Unlock Button */}
      <div className="login-unlock-container">
        <div className="login-unlock-pill">
          <Lock size={16} /> CLICK TO UNLOCK
        </div>
        <div className="login-hint">CLICK ANYWHERE TO UNLOCK</div>
      </div>
    </div>
  );
}
