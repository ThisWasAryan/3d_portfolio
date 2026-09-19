import React from 'react';
import { Window } from '../Window';
import { myDetails } from './data';
import './ProjectsApp.css';

export function ProjectsApp() {
  return (
    <Window id="projects">
      <div className="projects-app-container">
        <div className="projects-header">
          <h1>{myDetails.name}'s Projects</h1>
          <p>{myDetails.title}</p>
        </div>
        
        <div className="projects-grid">
          {myDetails.projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  🖼️
                </div>
              )}
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 5).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag">+{project.technologies.length - 5}</span>
                  )}
                </div>
                
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                      View Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-link secondary">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
