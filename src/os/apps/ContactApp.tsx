import React, { useState } from 'react';
import { Window } from '../Window';

export function ContactApp() {
  const [sent, setSent] = useState(false);

  return (
    <Window id="contact">
      <div style={{ padding: 20 }}>
        <h2>Contact Me</h2>
        {sent ? (
          <div style={{ background: 'rgba(39, 201, 63, 0.2)', padding: '15px', borderRadius: '5px', color: '#27c93f' }}>
            Message sent! (Mock)
          </div>
        ) : (
          <form 
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
              <input type="text" required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
              <input type="email" required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
              <textarea required rows={4} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" style={{ padding: '10px', background: '#007acc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </Window>
  );
}
