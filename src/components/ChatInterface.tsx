import React, { useState, useRef, useEffect } from 'react';
import { Send, ChevronDown, Bot, User, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { Message } from '../types';

interface ChatInterfaceProps {
  onSendMessage: (message: string) => void;
  messages: Message[];
  onTabClick?: (tab: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSendMessage, messages, onTabClick }) => {
  const [message, setMessage] = useState('');
  const [showQuickQuestions, setShowQuickQuestions] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dynamic quick questions based on conversation context
  const getQuickQuestions = () => {
    if (messages.length === 0) {
      return [
        "👋 Who are you?",
        "🏢 Tell me about your IBM role",
        "🚀 What are your best projects?",
        "⚡ What technologies do you use?",
        "🎓 Tell me about your education",
        "📧 How can I contact you?"
      ];
    } else {
      // Follow-up questions based on conversation
      return [
        "🔍 Tell me more details",
        "💡 What makes you unique?",
        "🎯 What's your career goal?",
        "📊 Show me your skills",
        "🤝 Let's discuss opportunities",
        "💼 Tell me about IBM experience"
      ];
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      handleSendMessage(message);
    }
  };

  const handleSendMessage = (messageText: string) => {
    onSendMessage(messageText);
    setMessage('');
    setShowQuickQuestions(false);
    setHasInteracted(true);
    setShowWelcome(false);
    
    // Show follow-up questions after bot responds
    setTimeout(() => {
      setShowQuickQuestions(true);
    }, 3000);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleInputFocus = () => {
    if (!hasInteracted && messages.length === 0) {
      setShowWelcome(false);
      setShowQuickQuestions(true);
    }
  };

  const formatMessageText = (text: string) => {
    // Convert **text** to bold and handle line breaks
    const boldText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    const withBreaks = boldText.replace(/\n/g, '<br>');
    return { __html: withBreaks };
  };

  return (
    <div className="h-full flex flex-col">
      {/* Welcome Animation - Only show initially */}
      {showWelcome && messages.length === 0 && (
        <div className="p-6 text-center">
          <div className="relative">
            {/* Animated AI Assistant Avatar */}
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Welcome Message */}
            <div className="bg-gray-50 rounded-2xl p-6 max-w-lg mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-500 animate-spin" />
                <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Assistant Ready
                </span>
                <Sparkles className="w-5 h-5 text-purple-500 animate-spin" />
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Hi there! 👋 I'm Rakesh's AI assistant. I'm here to help you learn about his professional experience at IBM, technical skills, and impressive project portfolio.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 bg-white rounded-full px-4 py-2">
                <MessageCircle className="w-4 h-4" />
                <span>Start typing below to begin our conversation</span>
                <ArrowRight className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {messages.length > 0 && (
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-4 ${
                  msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                    : 'bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 text-white'
                }`}>
                  {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                
                {/* Message Bubble */}
                <div className={`max-w-[75%] ${msg.sender === 'user' ? 'ml-auto' : ''}`}>
                  <div className={`px-6 py-4 rounded-3xl shadow-lg ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                      : 'bg-gray-50 text-gray-800 border border-gray-100'
                  }`}>
                    <div 
                      className={`text-sm leading-relaxed ${msg.sender === 'user' ? 'text-white' : 'text-gray-800'}`}
                      dangerouslySetInnerHTML={formatMessageText(msg.text)}
                    />
                  </div>
                  
                  {/* Timestamp */}
                  <div className={`text-xs text-gray-400 mt-2 px-2 ${
                    msg.sender === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-gray-50 border border-gray-100 px-6 py-4 rounded-3xl shadow-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions Panel */}
      {showQuickQuestions && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">
                {messages.length === 0 ? 'Quick Start Questions' : 'Continue the conversation'}
              </span>
            </div>
            <button
              onClick={() => setShowQuickQuestions(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {getQuickQuestions().map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="group text-left px-5 py-4 text-sm text-gray-700 hover:text-gray-900 rounded-2xl transition-all duration-300 border border-gray-200 hover:border-purple-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 font-medium transform hover:-translate-y-1 bg-white"
              >
                <div className="flex items-center justify-between">
                  <span>{question}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <div className="p-6 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={handleInputFocus}
              placeholder={
                messages.length === 0 
                  ? "Type 'hello' to start our conversation..." 
                  : "Ask me anything about Rakesh..."
              }
              className="flex-1 px-6 py-4 bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
            
            {/* Quick Questions Toggle */}
            {messages.length > 0 && (
              <button
                type="button"
                onClick={() => setShowQuickQuestions(!showQuickQuestions)}
                className="px-4 text-gray-400 hover:text-purple-500 transition-colors"
                title="Show quick questions"
              >
                <ChevronDown className={`w-5 h-5 transition-transform ${showQuickQuestions ? 'rotate-180' : ''}`} />
              </button>
            )}
            
            {/* Send Button */}
            <button
              type="submit"
              disabled={!message.trim()}
              className="m-2 p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:hover:scale-100"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;