import React, { useEffect } from 'react';
import { Taskbar } from './Taskbar';
import { ProjectsApp } from './apps/ProjectsApp';
import { AboutApp } from './apps/AboutApp';
import { ContactApp } from './apps/ContactApp';
import { useOSStore } from '../stores/osStore';
import './Desktop.css';

export function Desktop() {
  const openWindow = useOSStore((state) => state.openWindow);

  useEffect(() => {
    // Open Projects by default for demonstration
    openWindow('projects', 'Projects');
  }, [openWindow]);

  const handleIconDoubleClick = (id: string, title: string) => {
    openWindow(id, title);
  };

  return (
    <div className="desktop-container">
      <div className="desktop-workspace">
        <div className="desktop-icons">
          <div className="desktop-icon" onDoubleClick={() => handleIconDoubleClick('about', 'About Me')}>
            <div className="icon-img" style={{ backgroundColor: '#ff9800' }}>👤</div>
            <div className="icon-label">About Me</div>
          </div>
          <div className="desktop-icon" onDoubleClick={() => handleIconDoubleClick('projects', 'Projects')}>
            <div className="icon-img" style={{ backgroundColor: '#2196f3' }}>📁</div>
            <div className="icon-label">Projects</div>
          </div>
          <div className="desktop-icon" onDoubleClick={() => handleIconDoubleClick('contact', 'Contact')}>
            <div className="icon-img" style={{ backgroundColor: '#4caf50' }}>✉️</div>
            <div className="icon-label">Contact</div>
          </div>
        </div>
        
        <ProjectsApp />
        <AboutApp />
        <ContactApp />
      </div>
      <Taskbar />
    </div>
  );
}
