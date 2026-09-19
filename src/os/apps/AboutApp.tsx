import React from 'react';
import { Window } from '../Window';
import { myDetails } from './data';

export function AboutApp() {
  return (
    <Window id="about">
      <div style={{ padding: 20, lineHeight: 1.6, color: '#fff', overflowY: 'auto', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <img 
            src="./ProfilePic.jpeg" 
            alt="Aryan Raj" 
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.2)' }}
          />
          <div>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>Aryan Raj</h2>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', letterSpacing: '0.1em' }}>SOFTWARE ENGINEER</div>
          </div>
        </div>
        
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
          {myDetails.bio.split('\n\n').map((paragraph, idx) => (
            <p key={idx} style={{ marginBottom: idx === myDetails.bio.split('\n\n').length - 1 ? 0 : 15, fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
              {paragraph}
            </p>
          ))}
        </div>
        
        <h3 style={{ marginTop: 25, marginBottom: 10 }}>Technical Skills</h3>
        
        <div style={{ marginBottom: 15 }}>
          <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Languages</h4>
          <ul style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0 }}>
            {myDetails.skills.languages.map(skill => (
              <li key={skill} style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={{ marginBottom: 15 }}>
          <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Frameworks & Libraries</h4>
          <ul style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0 }}>
            {myDetails.skills.frameworks.map(skill => (
              <li key={skill} style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Systems & Infrastructure</h4>
          <ul style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0 }}>
            {myDetails.skills.systems.map(skill => (
              <li key={skill} style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Window>
  );
}
