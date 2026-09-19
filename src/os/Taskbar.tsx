import React from 'react';
import { useOSStore } from '../stores/osStore';
import './Taskbar.css';

const dockItems = [
  { id: 'c', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', title: 'C' },
  { id: 'cplusplus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', title: 'C++' },
  { id: 'python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', title: 'Python' },
  { id: 'go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg', title: 'Go' },
  { id: 'java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', title: 'Java' },
  { id: 'rust', icon: 'data:image/svg+xml;utf8,<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="%23FFFFFF" d="M44.5 27.5h-8v-3h8c1.7 0 3-1.3 3-3s-1.3-3-3-3h-19v26h6v-10h8.5l6.5 10h7.5l-7.5-11.5c3.5-1 6-4.5 6-8.5 0-4.5-3.5-8-8-8zM36.5 31.5h-13v-8h13c2.2 0 4 1.8 4 4s-1.8 4-4 4z"/><path fill="%23FFFFFF" d="M32 60C16.6 60 4 47.4 4 32S16.6 4 32 4s28 12.6 28 28-12.6 28-28 28zm0-52C18.8 8 8 18.8 8 32s10.8 24 24 24 24-10.8 24-24S45.2 8 32 8z"/></svg>', title: 'Rust' },
  { id: 'linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', title: 'Linux' },
  { id: 'bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', title: 'Bash' },
  { id: 'docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', title: 'Docker' },
  { id: 'git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', title: 'Git' },
  { id: 'github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', title: 'GitHub' },
  { id: 'react', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', title: 'React' },
  { id: 'vscode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', title: 'VS Code' },
  { id: 'intellij', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg', title: 'IntelliJ IDEA' }
];

export function Taskbar() {
  const windows = useOSStore((state) => state.windows);
  const activeWindowId = useOSStore((state) => state.activeWindowId);
  const focusWindow = useOSStore((state) => state.focusWindow);

  return (
    <div className="dock-container">
      <div className="dock-wrapper">
        <div className="dock-title">Tech Stack</div>
        <div className="dock">
          {dockItems.map(item => {
            return (
              <div 
                key={item.id}
                className={`dock-item`}
              >
                <div className="dock-tooltip">
                  {item.title}
                </div>
                <img src={item.icon} alt={item.title} className="dock-icon" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
