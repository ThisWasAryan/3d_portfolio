import React from 'react';
import { Window } from '../Window';

export function ProjectsApp() {
  return (
    <Window id="projects">
      <div style={{ padding: 20 }}>
        <h2>Projects</h2>
        <p>This is a placeholder for the Projects application.</p>
        <ul>
          <li>Project Alpha - React 3D Portfolio</li>
          <li>Project Beta - Machine Learning Toolkit</li>
          <li>Project Gamma - Mobile App</li>
        </ul>
      </div>
    </Window>
  );
}
