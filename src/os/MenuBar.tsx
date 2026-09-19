import React, { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../stores/appStore';
import { useOSStore } from '../stores/osStore';
import './MenuBar.css';

export function MenuBar() {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const activeWindowId = useOSStore((state) => state.activeWindowId);
  const windows = useOSStore((state) => state.windows);
  
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const activeAppTitle = activeWindowId && windows[activeWindowId] ? windows[activeWindowId].title : 'Finder';

  return (
    <div className="menubar-container">
      <div className="menubar-left">
        <div 
          className={`menubar-logo ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          ref={menuRef}
        >
          ThisWasAryan
          <div className="os-dropdown">
            <div className="os-dropdown-item">About This Mac</div>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '5px 0' }} />
            <div 
              className="os-dropdown-item"
              onClick={() => useAppStore.getState().setViewMode('shutdown')}
            >
              Shut Down...
            </div>
          </div>
        </div>
        <div className="menubar-item" style={{ fontWeight: 600 }}>{activeAppTitle}</div>
      </div>
      <div className="menubar-right">
        <div className="menubar-item">{timeString}</div>
      </div>
    </div>
  );
}
