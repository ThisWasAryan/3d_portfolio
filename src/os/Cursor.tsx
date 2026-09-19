import React, { useEffect, useState } from 'react';
import './Cursor.css';

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, .dock-item, .control-btn, .menubar-item, .os-dropdown-item').forEach(el => {
        el.addEventListener('mouseover', () => setLinkHovered(true));
        el.addEventListener('mouseout', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();
    
    // Setup observer for dynamically added elements
    const observer = new MutationObserver(() => {
      handleLinkHoverEvents();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  const cursorClasses = `custom-cursor ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'hovered' : ''}`;

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
}
