import React from 'react';
import ProjectItem from './ProjectItem'; 
import projectsData from '../assets/projects.json';  

interface Project {
  title: string;
  technologies: string[];
  description: string;
  githubUrl?: string;
  imgUrl?: string;
  previewUrl?: string;
}

const Projects: React.FC = () => {
  return (
    <div className="container text-white" id="projects">
      <h2 className="mx-3 mx-md-0 my-5">Proyectos</h2>
      <div className="row mx-3 mx-md-0">
        {projectsData.map((project: Project, index: number) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            imgUrl={project.imgUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
