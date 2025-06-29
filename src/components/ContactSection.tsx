import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Let's Connect</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <h4 className="text-lg font-semibold text-gray-800">Email</h4>
            </div>
            <p className="text-gray-600">rakeshrb2105@gmail.com</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <MessageCircle className="w-6 h-6 text-green-500" />
              <h4 className="text-lg font-semibold text-gray-800">Let's Chat</h4>
            </div>
            <p className="text-gray-600">Always open to discussing internship opportunities and exciting projects.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/rakeshrb21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
              >
                <Github className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
              </a>
              <a 
                href="https://linkedin.com/in/rakeshrb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
              </a>
              <a 
                href="https://rakeshrb21.github.io/LuxeVogue/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;