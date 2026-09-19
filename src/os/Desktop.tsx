import React, { useEffect } from 'react';
import { Taskbar } from './Taskbar';
import { ProjectsApp } from './apps/ProjectsApp';
import { AboutApp } from './apps/AboutApp';
import { ContactApp } from './apps/ContactApp';
import { useOSStore } from '../stores/osStore';
import { MenuBar } from './MenuBar';
import { Cursor } from './Cursor';
import { Widgets } from './Widgets';
import './Desktop.css';

export function Desktop() {
  const openWindow = useOSStore((state) => state.openWindow);

  // Empty effect removed to prevent opening Projects by default

  const handleIconDoubleClick = (id: string, title: string) => {
    openWindow(id, title);
  };

  return (
    <div className="desktop-container">
      <Cursor />
      <MenuBar />
      <div className="desktop-workspace">
        <Widgets />
        <ProjectsApp />
        <AboutApp />
        <ContactApp />
      </div>
      <Taskbar />
    </div>
  );
}
