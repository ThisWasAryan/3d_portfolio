import React from 'react';
import './CollageWidget.css';

export function CollageWidget() {
  return (
    <div className="collage-container">
      
      <div className="collage-row-1">
        
        {/* Badge / Lanyard */}
        <div className="badge-swing">
          <div className="lanyard-strap">
            <div className="lanyard-texture"></div>
          </div>
          <div className="badge-body">
            <div className="badge-clip">
              <div className="badge-hole"></div>
            </div>
            <div className="badge-inner">
              <div className="badge-top">
                <div className="badge-dots"></div>
                <div className="badge-text-content">
                  <h3 className="badge-name">Aryan</h3>
                  <p className="badge-desc">
                    Computer<br />
                    Science<br />
                    Student
                  </p>
                </div>
              </div>
              <div className="badge-bottom">
                <div className="badge-avatar-container">
                  <img 
                    src="./ProfilePic.jpeg" 
                    alt="Aryan Raj Profile" 
                    className="badge-avatar" 
                    draggable="false" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="collage-col">
          {/* Vinyl Playlist */}
          <div className="vinyl-container">
            <div className="vinyl-disc-wrap">
              <div className="vinyl-disc"></div>
            </div>
            <div className="vinyl-sleeve">
              <div className="vinyl-sleeve-spacer"></div>
              <p className="vinyl-text">System Hacker's Playlist</p>
            </div>
          </div>
        </div>

      </div>

      <div className="collage-row-2">
        
        {/* Terminal */}
        <div className="terminal-widget">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-traffic">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-title">aryan-raj — zsh</span>
              <div style={{ width: '40px' }}></div>
            </div>
            <div className="terminal-body">
              <div>
                <div><span className="terminal-prompt">~</span> $ whoami</div>
                <div className="terminal-output">Computer Science Student</div>
              </div>
              <div>
                <div><span className="terminal-prompt">~</span> $ ls interests/</div>
                <div className="terminal-output">cybersecurity / reverse_engineering / devtools</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Text */}
        <div className="center-text-block">
          <div className="center-name">Aryan Raj</div>
          <p className="center-subtitle">I deconstruct, then I build.</p>
        </div>

        {/* Magic Folder */}
        <div className="folder-widget">
          <div className="folder-back"></div>
          <div className="folder-logo">🛠️</div>
          <div className="folder-front"></div>
        </div>
        
      </div>
      
    </div>
  );
}
