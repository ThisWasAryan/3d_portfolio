import React, { useState, useEffect } from 'react';
import { useOSStore } from '../stores/osStore';
import { useAppStore } from '../stores/appStore';
import './Taskbar.css';

export function Taskbar() {
  const [time, setTime] = useState(new Date());
  
  const windows = useOSStore((state) => state.windows);
  const activeWindowId = useOSStore((state) => state.activeWindowId);
  const focusWindow = useOSStore((state) => state.focusWindow);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="taskbar-container">
      <div className="taskbar-left">
        <div className="start-button">OS</div>
        <div 
          className="start-button" 
          style={{ width: 'auto', padding: '0 10px', marginLeft: '10px', backgroundColor: '#ff5f56' }}
          onClick={() => useAppStore.getState().setViewMode('shutdown')}
        >
          Shut Down
        </div>
      </div>
      <div className="taskbar-center">
        {Object.values(windows).map(win => {
          if (!win.isOpen) return null;
          return (
            <div 
              key={win.id}
              className={`taskbar-window-tab ${activeWindowId === win.id && !win.isMinimized ? 'active' : ''}`}
              onClick={() => focusWindow(win.id)}
              style={{
                padding: '4px 12px',
                margin: '0 4px',
                background: activeWindowId === win.id && !win.isMinimized ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              {win.title}
            </div>
          );
        })}
      </div>
      <div className="taskbar-right">
        <div className="taskbar-clock">{timeString}</div>
      </div>
    </div>
  );
}
