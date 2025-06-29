import React from 'react';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: '1',
      title: 'LuxeVogue',
      category: 'E-commerce Platform',
      description: 'Full-stack e-commerce website with modern UI/UX, shopping cart, and user authentication',
      image: '',
      gradient: 'bg-gradient-to-br from-purple-600 to-pink-600',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'CSS3'],
      liveUrl: 'https://rakeshrb21.github.io/LuxeVogue/',
      githubUrl: 'https://github.com/rakeshrb21/LuxeVogue'
    },
    {
      id: '2',
      title: 'Movie Recommendation System',
      category: 'AI/ML Project',
      description: 'AI-powered recommendation engine using machine learning algorithms for personalized movie suggestions',
      image: '',
      gradient: 'bg-gradient-to-br from-blue-600 to-indigo-600',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      githubUrl: 'https://github.com/rakeshrb21/movie-recommendation'
    },
    {
      id: '3',
      title: 'Blockchain Voting System',
      category: 'Blockchain Project',
      description: 'Secure and transparent voting platform using blockchain technology for vote integrity',
      image: '',
      gradient: 'bg-gradient-to-br from-green-600 to-teal-600',
      technologies: ['Blockchain', 'Smart Contracts', 'Web3', 'JavaScript'],
      githubUrl: 'https://github.com/rakeshrb21/blockchain-voting'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="flex justify-center space-x-4">
        <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;