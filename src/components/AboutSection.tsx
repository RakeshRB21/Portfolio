import React from 'react';
import { MapPin, Calendar, GraduationCap, Award, Building, Code, Trophy, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About Me</h2>
        
        {/* Current Role Highlight */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
          <div className="flex items-center space-x-3 mb-4">
            <Building className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">Current Role</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Full Stack Web Developer</strong> at <strong>IBM CIO, Bengaluru, India</strong>
          </p>
          <p className="text-gray-600 mt-2">
            Working on enterprise-level web applications and contributing to IBM's digital transformation initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                <Code className="w-5 h-5 text-purple-600" />
                <span>Professional Journey</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm Rakesh Krishna R B, a passionate Full Stack Web Developer currently working at IBM CIO in Bengaluru. 
                I specialize in building scalable web applications using modern technologies like React.js, Node.js, and cloud platforms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey combines strong academic excellence (8.73 CGPA from VIT) with hands-on industry experience, 
                allowing me to bridge theoretical knowledge with practical implementation in enterprise environments.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-600" />
                <span>Technical Expertise</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS, responsive design
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Backend:</strong> Node.js, Express.js, MongoDB, RESTful APIs
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Languages:</strong> JavaScript, Python, C++, Java with strong foundation in Data Structures & Algorithms
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                <span>Key Projects</span>
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-800">LuxeVogue E-commerce Platform</p>
                  <p className="text-sm text-gray-600">Full-stack e-commerce solution with modern UI/UX</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-800">AI Movie Recommendation System</p>
                  <p className="text-sm text-gray-600">Machine learning-powered recommendation engine</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-800">Blockchain Voting System</p>
                  <p className="text-sm text-gray-600">Secure voting platform using blockchain technology</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <Building className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-800">IBM CIO, Bengaluru</p>
                <p className="text-sm text-gray-600">Full Stack Web Developer</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">B.Tech CSE at VIT</p>
                <p className="text-sm text-gray-600">CGPA: 8.73/10</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100">
              <MapPin className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">Bengaluru, India</p>
                <p className="text-sm text-gray-600">Tech Hub Experience</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
              <Award className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-medium text-gray-800">Competitive Programming</p>
                <p className="text-sm text-gray-600">Strong problem-solving skills</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <Code className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium text-gray-800">Full Stack Development</p>
                <p className="text-sm text-gray-600">React.js, Node.js, MongoDB</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-pink-50 rounded-xl border border-pink-100">
              <Calendar className="w-5 h-5 text-pink-600" />
              <div>
                <p className="font-medium text-gray-800">Emerging Technologies</p>
                <p className="text-sm text-gray-600">AI/ML, Blockchain, Cloud</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Full Stack Development', 'React.js', 'Node.js', 'JavaScript', 'Python', 
              'MongoDB', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 
              'RESTful APIs', 'Data Structures', 'Algorithms', 'Machine Learning', 
              'Blockchain', 'Competitive Programming', 'Problem Solving'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium border border-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;