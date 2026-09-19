import React from 'react';
import { Rnd } from 'react-rnd';
import { useOSStore } from '../stores/osStore';
import './Window.css';

interface WindowProps {
  id: string;
  children: React.ReactNode;
}

export function Window({ id, children }: WindowProps) {
  const windowState = useOSStore((state) => state.windows[id]);
  const activeWindowId = useOSStore((state) => state.activeWindowId);
  const closeWindow = useOSStore((state) => state.closeWindow);
  const minimizeWindow = useOSStore((state) => state.minimizeWindow);
  const focusWindow = useOSStore((state) => state.focusWindow);
  const updateWindowPosition = useOSStore((state) => state.updateWindowPosition);
  const updateWindowSize = useOSStore((state) => state.updateWindowSize);

  if (!windowState || !windowState.isOpen || windowState.isMinimized) {
    return null;
  }

  const isActive = activeWindowId === id;

  return (
    <Rnd
      size={{ width: windowState.size.width, height: windowState.size.height }}
      position={{ x: windowState.position.x, y: windowState.position.y }}
      onDragStop={(e, d) => {
        updateWindowPosition(id, { x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        updateWindowSize(id, {
          width: ref.style.width,
          height: ref.style.height,
        });
        updateWindowPosition(id, position);
      }}
      onMouseDown={() => focusWindow(id)}
      minWidth={300}
      minHeight={200}
      bounds=".desktop-workspace"
      dragHandleClassName="window-titlebar"
      style={{ zIndex: windowState.zIndex }}
      className={`os-window ${isActive ? 'active' : ''}`}
    >
      <div className="window-inner">
        <div className="window-titlebar" onDoubleClick={() => {/* Optional: maximize */}}>
          <div className="window-controls">
            <button className="control-btn close" onClick={(e) => { e.stopPropagation(); closeWindow(id); }} />
            <button className="control-btn minimize" onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }} />
            <button className="control-btn maximize" />
          </div>
          <div className="window-title">{windowState.title}</div>
          <div className="window-controls-placeholder"></div>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </Rnd>
  );
}
