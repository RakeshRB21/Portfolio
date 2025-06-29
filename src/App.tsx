import { useState } from 'react';
import FloatingShapes from './components/FloatingShapes';
import ChatInterface from './components/ChatInterface';
import Navigation from './components/Navigation';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { MessageCircle, X, Building, Code, Award, Mail,Brain, Zap, Download, Cloud, Shield, Github, Linkedin } from 'lucide-react';
import { SiReact, SiNodedotjs, SiJavascript, SiPython, SiAmazonaws } from 'react-icons/si';
import { Message } from './types';
import { Chatbot } from './utils/chatbot';

function App() {
  const [activeTab, setActiveTab] = useState('me');
  const [messages, setMessages] = useState<Message[]>([]);
  const [, setIsTyping] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbot = new Chatbot();

  const addMessage = (text: string, sender: 'user' | 'bot', delay = 0) => {
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString() + Math.random(),
        text,
        sender,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
    }, delay);
  };

  const handleSendMessage = async (message: string) => {
    addMessage(message, 'user');
    setIsTyping(true);
    
    const responses = await chatbot.getResponse(message);
    
    setTimeout(() => {
      setIsTyping(false);
      responses.forEach((response, index) => {
        addMessage(response.text, 'bot', response.delay || 0);
      });
    }, 1000);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot);
    
    // Initialize chatbot with welcome message if first time opening
    if (!showChatbot && messages.length === 0) {
      const responses = chatbot.getTabResponse('me');
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        responses.forEach((response, index) => {
          addMessage(response.text, 'bot', response.delay || 0);
        });
      }, 800);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Rakesh_Krishna_RB_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <FloatingShapes />
      
      {/* Header */}
      <header className="relative z-10 pt-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-sm font-medium text-slate-600">Open to opportunities</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">Download Resume</span>
              </button>
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                <Building className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">IBM CIO</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pb-20">
        {activeTab === 'me' && (
          <>
            {/* Hero Section */}
            <div className="text-center pt-12 pb-16">
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
                  <img
                    src="/photo.png"
                    alt="Rakesh Krishna R B"
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                  Rakesh Krishna R B
                </h1>
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Code className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
                    Full Stack Web Developer
                  </h2>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-600 mb-4">
                  <Building className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-medium">IBM CIO, Bengaluru</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium">Generative AI and Agentic AI Enthusiast</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Building className="w-8 h-8 text-blue-600" />
                    <span className="text-2xl font-bold text-slate-800">IBM CIO</span>
                  </div>
                  <p className="text-slate-600 font-medium">Full Stack Developer</p>
                  <p className="text-sm text-slate-500">Enterprise Web Applications</p>
                </div>

                <a
                  href="https://linkedin.com/in/rakeshrb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                >
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Linkedin className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
                    <span className="text-2xl font-bold text-slate-800">LinkedIn</span>
                  </div>
                  <p className="text-slate-600 font-medium">Professional Network</p>
                  <p className="text-sm text-slate-500">Connect & Career Updates</p>
                </a>

                <a
                  href="https://github.com/rakeshrb21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                >
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Github className="w-8 h-8 text-gray-800 group-hover:text-gray-900" />
                    <span className="text-2xl font-bold text-slate-800">GitHub</span>
                  </div>
                  <p className="text-slate-600 font-medium">Code Repository</p>
                  <p className="text-sm text-slate-500">Projects & Open Source</p>
                </a>
              </div>

              {/* Tech Stack Preview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto mb-12">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center justify-center space-x-2">
                  <Code className="w-6 h-6 text-purple-600" />
                  <span>Core Technologies</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <SiReact className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-semibold text-blue-800">React.js</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                    <SiNodedotjs className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <p className="font-semibold text-green-800">Node.js</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
                    <SiJavascript className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                    <p className="font-semibold text-yellow-800">JavaScript</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <SiPython className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-semibold text-blue-800">Python</p>
                  </div>
                </div>
              </div>

              {/* AWS Certifications */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto mb-12">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center justify-center space-x-2">
                  <SiAmazonaws className="w-6 h-6 text-orange-600" />
                  <span>AWS Certifications</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <Cloud className="w-8 h-8" />
                      <h4 className="font-bold text-lg">Cloud Practitioner</h4>
                    </div>
                    <p className="text-sm opacity-90 mb-3">AWS Fundamentals & Best Practices</p>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-medium">Certified</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="w-8 h-8" />
                      <h4 className="font-bold text-lg">Solutions Architect</h4>
                    </div>
                    <p className="text-sm opacity-90 mb-3">Associate Level Architecture</p>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-medium">Certified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Expertise Highlight */}
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-12 text-white">
                <h3 className="text-xl font-semibold mb-6 flex items-center justify-center space-x-2">
                  <Brain className="w-6 h-6" />
                  <span>AI & Machine Learning Expertise</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Brain className="w-6 h-6" />
                      <h4 className="font-bold text-lg">Generative AI</h4>
                    </div>
                    <p className="text-sm opacity-90">
                      Expert in LLMs, prompt engineering, and building AI-powered applications using GPT, Claude, and other generative models.
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Zap className="w-6 h-6" />
                      <h4 className="font-bold text-lg">Agentic AI</h4>
                    </div>
                    <p className="text-sm opacity-90">
                      Specialized in autonomous AI agents, multi-agent systems, and intelligent automation workflows for enterprise solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="mailto:rakeshrb2105@gmail.com"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </a>
                <button
                  onClick={handleChatbotToggle}
                  className="flex items-center space-x-2 bg-white/90 hover:bg-white text-slate-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask AI Assistant</span>
                </button>
              </div>
            </div>
          </>
        )}

        {/* Tab Content */}
        {activeTab !== 'me' && (
          <div className="pt-8 mb-12">
            {renderContent()}
          </div>
        )}

        {/* Navigation */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Chatbot Toggle Button - Only show when not on 'me' tab */}
        {activeTab !== 'me' && (
          <div className="fixed bottom-8 right-8 z-20">
            <button
              onClick={handleChatbotToggle}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {showChatbot ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </button>
          </div>
        )}

        {/* Chatbot Interface */}
        {showChatbot && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">AI Assistant</h3>
                    <p className="text-sm text-gray-500">Ask me anything about Rakesh</p>
                  </div>
                </div>
                <button
                  onClick={handleChatbotToggle}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <ChatInterface 
                  onSendMessage={handleSendMessage} 
                  messages={messages}
                  onTabClick={handleTabChange}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-4 left-4 z-10">
        <div className="text-sm text-slate-500 font-medium">
          @rakeshrb21
        </div>
      </footer>
    </div>
  );
}

export default App;