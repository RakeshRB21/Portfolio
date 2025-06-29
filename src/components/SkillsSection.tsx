import React from 'react';
import { Code, Database, Smartphone, Zap, Globe, BookOpen } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['JavaScript', 'Python', 'Java'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs','SQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Computing',
      icon: Smartphone,
      skills: ['AWS', 'S3', 'DynamoDB', 'ECS', 'VPC', 'EC2', 'ELB', 'EBS'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Computer Science',
      icon: BookOpen,
      skills: ['Data Structures', 'Algorithms', 'OOPS', 'Database Systems','Operating Systems'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Artificial Intelligence',
      icon: Zap,
      skills: ['Machine Learning', 'Generative AI', 'Agentic AI', 'Data Science','Prompt Engineering'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;