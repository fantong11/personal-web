import React from "react";
import Section from "../Section";

interface Project {
  title: string;
  year: string;
  tech: string;
  details: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Section id="projects" title="Projects">
    <div className="card-list">
      {projects.map((project) => (
        <div className="card project-item" key={project.title}>
          <div className="project-title">
            {project.title} <span>{project.year}</span>
          </div>
          <div className="project-tech">{project.tech}</div>
          <ul>
            {project.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
