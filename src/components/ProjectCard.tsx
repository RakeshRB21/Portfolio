import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gradient: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${project.gradient}`}>
      <div className="p-6 h-80 flex flex-col justify-between text-white">
        <div>
          <div className="text-sm opacity-80 mb-2">{project.category}</div>
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-sm opacity-90 mb-4">{project.description}</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-3">
            {project.liveUrl && (
              <button className="flex items-center space-x-1 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Live</span>
              </button>
            )}
            {project.githubUrl && (
              <button className="flex items-center space-x-1 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                <Github className="w-4 h-4" />
                <span className="text-sm">Code</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;