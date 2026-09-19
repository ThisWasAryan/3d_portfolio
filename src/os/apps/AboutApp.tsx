import React from 'react';
import { Window } from '../Window';

export function AboutApp() {
  return (
    <Window id="about">
      <div style={{ padding: 20, lineHeight: 1.6 }}>
        <h2>About Me</h2>
        <p>Hi, I'm Aryan. Welcome to my interactive 3D workspace.</p>
        <p>I am a software developer passionate about creating immersive web experiences, robust applications, and scalable systems.</p>
        
        <h3>Skills</h3>
        <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
          {['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Node.js', 'Python', 'Machine Learning'].map(skill => (
            <li key={skill} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '4px' }}>
              {skill}
            </li>
          ))}
        </ul>
        
        <h3>Experience</h3>
        <div>
          <h4>Software Engineer - Tech Co</h4>
          <span style={{ opacity: 0.7 }}>2024 - Present</span>
          <p>Developing awesome web applications and 3D experiences.</p>
        </div>
      </div>
    </Window>
  );
}
