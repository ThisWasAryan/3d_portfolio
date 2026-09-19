import React from 'react';
import { Window } from '../Window';
import { Mail } from 'lucide-react';
import { Instagram, Linkedin, Github } from '../BrandIcons';

export function ContactApp() {
  return (
    <Window id="contact">
      <div style={{ padding: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Let's Connect</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: '1.1rem' }}>
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://www.instagram.com/drugd3alers/" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Instagram size={32} />
            </div>
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/thiswasaryan1/" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Linkedin size={32} />
            </div>
            <span>LinkedIn</span>
          </a>
          <a href="http://github.com/thisWasAryan" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Github size={32} />
            </div>
            <span>GitHub</span>
          </a>
          <a href="mailto:hi@thiswasaryan.in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Mail size={32} />
            </div>
            <span>Email</span>
          </a>
        </div>
      </div>
    </Window>
  );
}
