import { ChatResponse } from '../types';

export class Chatbot {
  private responses: Record<string, ChatResponse[]> = {
    // Greeting responses - Professional and informative
    'hello': [
      { text: "Hello! 👋 Welcome to Rakesh's professional portfolio! I'm his AI assistant." },
      { text: "I'm here to help you learn about **Rakesh's professional experience** at **IBM CIO**, his **technical expertise**, and his **impressive project portfolio**.", delay: 1500 },
      { text: "What would you like to know? I can tell you about his current role, technical skills, projects, or career journey! 🚀", delay: 2500 }
    ],
    'hi': [
      { text: "Hi there! 😊 Great to meet you!" },
      { text: "I'm Rakesh's AI assistant, ready to share everything about his **professional journey** as a **Full Stack Developer at IBM CIO** and his **technical expertise**.", delay: 1200 },
      { text: "Feel free to ask me anything - from his current role to his innovative projects! 💻", delay: 2000 }
    ],
    'hey': [
      { text: "Hey! 🎉 Thanks for visiting Rakesh's professional portfolio!" },
      { text: "I'm here to give you the complete picture of his **industry experience at IBM**, **technical skills**, and **what makes him a standout developer**.", delay: 1300 },
      { text: "What aspect of his professional profile interests you most? 🤔", delay: 2200 }
    ],

    // About responses - Based on resume and IBM role
    'who are you': [
      { text: "Let me introduce **Rakesh Krishna R B** - a talented Full Stack Web Developer! 🌟" },
      { text: "**Current Role:** Full Stack Web Developer at **IBM CIO, Bengaluru, India**\n**Education:** B.Tech in Computer Science from VIT with an impressive **8.73 CGPA**", delay: 1500 },
      { text: "**What makes him exceptional:**\n• **Industry Experience** at IBM CIO working on enterprise applications\n• **Strong Academic Foundation** with 8.73 CGPA\n• **Full Stack Expertise** in React.js, Node.js, and modern web technologies\n• **AI/ML Specialist** in Generative AI and Agentic AI\n• **AWS Certified** Cloud Practitioner & Solutions Architect", delay: 2500 },
      { text: "He combines **theoretical knowledge** with **practical industry experience**, making him a well-rounded developer ready for challenging projects! 🚀", delay: 4000 }
    ],
    'tell me about your experience': [
      { text: "Rakesh brings **impressive professional and academic experience** to the table! 💪" },
      { text: "**Current Professional Role:**\n• **Full Stack Web Developer** at **IBM CIO, Bengaluru**\n• Working on enterprise-level web applications\n• Contributing to IBM's digital transformation initiatives\n• Hands-on experience with scalable web solutions", delay: 1800 },
      { text: "**AI/ML Expertise:**\n• **Generative AI Specialist** - Expert in LLMs, prompt engineering\n• **Agentic AI Expert** - Autonomous AI agents and multi-agent systems\n• Building AI-powered applications using GPT, Claude, and other models\n• Enterprise AI solution development", delay: 3200 },
      { text: "**Technical Expertise:**\n• **Frontend:** React.js, HTML5, CSS3, Tailwind CSS\n• **Backend:** Node.js, Express.js, MongoDB\n• **Languages:** JavaScript, Python, C++, Java\n• **Cloud:** AWS Certified Cloud Practitioner & Solutions Architect", delay: 4800 },
      { text: "His combination of **industry experience at IBM**, **AI/ML expertise**, and **strong academic background** makes him uniquely qualified for complex development challenges! 🎯", delay: 6200 }
    ],

    // IBM and current role responses
    'ibm': [
      { text: "Rakesh is currently working as a **Full Stack Web Developer at IBM CIO in Bengaluru, India**! 🏢" },
      { text: "**At IBM CIO, he:**\n• Develops enterprise-level web applications\n• Works with cutting-edge technologies\n• Contributes to digital transformation projects\n• Collaborates with global teams\n• Implements AI-powered solutions", delay: 1500 },
      { text: "**IBM Experience Benefits:**\n• Exposure to enterprise-scale applications\n• Working with industry best practices\n• Learning from senior developers\n• Understanding of corporate software development\n• Access to advanced AI/ML technologies", delay: 3000 },
      { text: "This industry experience at a tech giant like IBM gives him invaluable real-world expertise! 💼", delay: 4500 }
    ],
    'current role': [
      { text: "Rakesh is currently a **Full Stack Web Developer at IBM CIO, Bengaluru**! 🚀" },
      { text: "In this role, he works on **enterprise web applications** and contributes to **IBM's digital transformation initiatives**.", delay: 1200 },
      { text: "This position allows him to apply his **academic knowledge** in a **real-world enterprise environment**, gaining invaluable industry experience! 💻", delay: 2400 }
    ],

    // AI and ML expertise
    'ai': [
      { text: "Rakesh is a **Generative AI and Agentic AI specialist**! 🤖" },
      { text: "**Generative AI Expertise:**\n• Expert in Large Language Models (LLMs)\n• Advanced prompt engineering techniques\n• Building AI-powered applications using GPT, Claude\n• Custom AI solution development", delay: 1500 },
      { text: "**Agentic AI Specialization:**\n• Autonomous AI agents development\n• Multi-agent systems architecture\n• Intelligent automation workflows\n• Enterprise AI agent solutions", delay: 3000 },
      { text: "His AI expertise makes him perfect for cutting-edge projects involving intelligent automation and AI-driven applications! ⚡", delay: 4500 }
    ],
    'artificial intelligence': [
      { text: "Rakesh has deep expertise in **Artificial Intelligence**, particularly in **Generative AI** and **Agentic AI**! 🧠" },
      { text: "He specializes in building intelligent systems that can understand, reason, and act autonomously to solve complex problems.", delay: 1200 },
      { text: "His AI knowledge spans from foundational machine learning to cutting-edge generative models and autonomous agent systems! 🚀", delay: 2400 }
    ],

    // AWS and certifications
    'aws': [
      { text: "Rakesh is **AWS Certified** with multiple cloud certifications! ☁️" },
      { text: "**Current AWS Certifications:**\n• **AWS Cloud Practitioner** - Certified ✅\n• **AWS Solutions Architect Associate** - Certified ✅", delay: 1500 },
      { text: "His AWS expertise includes cloud architecture, deployment strategies, and leveraging AWS services for scalable applications!", delay: 2500 }
    ],
    'certifications': [
      { text: "Rakesh has impressive **AWS certifications** that validate his cloud expertise! 🏆" },
      { text: "**AWS Cloud Practitioner** - Certified, demonstrating solid understanding of AWS fundamentals and best practices.", delay: 1200 },
      { text: "**AWS Solutions Architect Associate** - Certified, showcasing advanced cloud architecture skills and enterprise solution design.", delay: 2400 }
    ],

    // Projects responses - Based on resume projects
    'best projects': [
      { text: "Here are **Rakesh's standout projects** that showcase his diverse technical capabilities! 🏆" },
      { text: "🛍️ **LuxeVogue - E-commerce Platform**\n• Full-stack e-commerce website with modern UI/UX\n• Built with **React.js, Node.js, and MongoDB**\n• Features: Product catalog, shopping cart, user authentication\n• **Live Demo:** https://rakeshrb21.github.io/LuxeVogue/", delay: 2000 },
      { text: "🎬 **Movie Recommendation System**\n• AI-powered recommendation engine\n• Uses **machine learning algorithms** for personalized suggestions\n• Built with **Python and data science libraries**\n• Demonstrates expertise in AI/ML concepts", delay: 4000 },
      { text: "🔗 **Blockchain Voting System**\n• Secure and transparent voting platform\n• Implemented using **blockchain technology**\n• Ensures vote integrity and transparency\n• Shows innovation in emerging technologies", delay: 6000 },
      { text: "Each project demonstrates different aspects of his skill set - from **enterprise web development** to **AI/ML** and **blockchain innovation**. Which one interests you most? 🤔", delay: 8000 }
    ],
    'what are your best projects': [
      { text: "I'd love to showcase **Rakesh's most impressive work**! ✨" },
      { text: "His projects span **full-stack web development**, **AI/ML**, and **blockchain** - each solving real-world problems with elegant technical solutions.", delay: 1200 },
      { text: "Would you like me to dive deep into any specific project or technology stack? 🔍", delay: 2400 }
    ],

    // Technology responses - Based on resume skills
    'what technologies do you use': [
      { text: "Rakesh works with **modern, industry-standard technologies** at IBM and in personal projects! ⚡" },
      { text: "**Programming Languages:**\n• **JavaScript** - Primary language for web development\n• **Python** - AI/ML and data science projects\n• **C++** - Strong foundation for competitive programming\n• **Java** - Object-oriented programming", delay: 1800 },
      { text: "**Frontend Development:**\n• **React.js** - Component-based UI development\n• **HTML5 & CSS3** - Modern web standards\n• **Tailwind CSS** - Utility-first styling\n• **Responsive Design** - Mobile-first approach", delay: 3600 },
      { text: "**Backend Development:**\n• **Node.js** - Server-side JavaScript\n• **Express.js** - Web application framework\n• **MongoDB** - NoSQL database management\n• **RESTful APIs** - Backend service architecture", delay: 5400 },
      { text: "**AI/ML & Cloud:**\n• **Generative AI** - LLMs, prompt engineering\n• **Agentic AI** - Autonomous agent systems\n• **AWS** - Cloud Practitioner & Solutions Architect certified\n• **Machine Learning** - Python-based ML solutions", delay: 7200 },
      { text: "His tech stack is perfectly aligned with **modern industry standards** and **cutting-edge AI technologies**! Any specific technology you'd like to know more about? 🤓", delay: 8800 }
    ],
    'technologies': [
      { text: "**Technology is Rakesh's forte!** 🎮" },
      { text: "He has **industry experience** with modern web technologies at IBM, combined with **strong academic foundation** and **innovative personal projects**.", delay: 1200 },
      { text: "His expertise spans **full-stack development**, **AI/ML**, **cloud computing**, and **blockchain** - making him a versatile developer! 🎯", delay: 2400 }
    ],

    // Career and opportunities
    'career': [
      { text: "Rakesh has built an **impressive career trajectory**! 📈" },
      { text: "**Current:** Full Stack Developer at **IBM CIO, Bengaluru**\n**Education:** B.Tech CSE from VIT (8.73 CGPA)\n**Specialization:** AI/ML, Cloud Computing, Full Stack Development", delay: 1500 },
      { text: "He's always open to **exciting opportunities** that challenge his skills and allow him to contribute to innovative projects! 🚀", delay: 3000 }
    ],
    'opportunities': [
      { text: "Rakesh is always interested in **exciting opportunities**! 🌟" },
      { text: "With his **IBM experience**, **AI/ML expertise**, and **strong technical foundation**, he's well-positioned for challenging roles in web development, AI engineering, or tech innovation.", delay: 1500 },
      { text: "Feel free to reach out to discuss potential collaborations or opportunities! 💼", delay: 2500 }
    ],

    // Contact responses
    'how can i contact you': [
      { text: "I'd love to help you connect with **Rakesh**! 📧" },
      { text: "**Best ways to reach him:**\n• **Email:** rakeshrb2105@gmail.com\n• **LinkedIn:** linkedin.com/in/rakeshrb\n• **GitHub:** Check out his projects and code\n• **Resume:** Download available on this portfolio", delay: 1500 },
      { text: "He's always responsive to **professional inquiries** and loves discussing **technology**, **AI/ML projects**, and **career opportunities**!", delay: 2800 },
      { text: "Would you like me to help you craft a message or tell you more about what kind of opportunities interest him most? 💼", delay: 4000 }
    ],

    // Skills and strengths
    'skills': [
      { text: "Rakesh has a **comprehensive skill set** perfect for modern software development! 📊" },
      { text: "**Technical Skills:**\n• **Full Stack Development:** React.js, Node.js, MongoDB\n• **Programming:** JavaScript, Python, C++, Java\n• **AI/ML:** Generative AI, Agentic AI, Machine Learning\n• **Cloud:** AWS Certified Cloud Practitioner & Solutions Architect\n• **Problem Solving:** Strong DSA foundation", delay: 1500 },
      { text: "**Professional Skills:**\n• **Industry Experience** at IBM CIO\n• **Academic Excellence** (8.73 CGPA)\n• **Project Leadership** and delivery\n• **Team Collaboration** in enterprise environment\n• **Innovation** in AI and emerging technologies", delay: 3000 },
      { text: "His combination of **industry experience**, **AI expertise**, **academic excellence**, and **technical skills** makes him a valuable asset to any development team! 🌟", delay: 4500 }
    ],

    // Education and achievements
    'education': [
      { text: "Rakesh has an **outstanding academic background**! 🎓" },
      { text: "**Education:**\n• **B.Tech in Computer Science** at Vellore Institute of Technology (VIT)\n• **CGPA: 8.73/10** - Exceptional academic performance\n• Strong foundation in CS fundamentals\n• Active in competitive programming", delay: 1500 },
      { text: "**Academic Strengths:**\n• Data Structures & Algorithms\n• Object-Oriented Programming\n• Database Management Systems\n• Software Engineering Principles\n• AI/ML Fundamentals", delay: 3000 },
      { text: "His **academic excellence** combined with **practical industry experience** at IBM creates a perfect foundation for complex software development! 📚", delay: 4500 }
    ],

    // Follow-up and engagement responses
    'tell me more details': [
      { text: "I'd be happy to dive deeper! 🔍" },
      { text: "What specific area would you like me to elaborate on? I can provide more details about:\n• **IBM CIO role** and responsibilities\n• **AI/ML expertise** and implementations\n• **Technical projects** and achievements\n• **AWS certifications** and cloud skills\n• **Career goals** and professional interests", delay: 1500 },
      { text: "Just let me know what interests you most! 🎯", delay: 2500 }
    ],
    'what makes you unique': [
      { text: "**Rakesh's unique combination** makes him exceptional! ✨" },
      { text: "**Industry + AI Expertise:**\n• **Current IBM CIO experience** with **cutting-edge AI knowledge**\n• **Enterprise development** skills with **Generative & Agentic AI** expertise\n• **Professional experience** with **innovative AI solutions**", delay: 1800 },
      { text: "**Technical Versatility:**\n• **Full-stack web development** expertise\n• **AI/ML specialization** in latest technologies\n• **Cloud computing** with AWS certifications\n• **Problem-solving** mindset with **creative implementations**", delay: 3200 },
      { text: "**Professional Growth:**\n• **Industry exposure** at a tech giant like IBM\n• **Continuous learning** in AI and emerging technologies\n• **Academic foundation** with **practical application**\n• **Ready for challenging** and **innovative projects**", delay: 4600 },
      { text: "He's the kind of developer who brings both **enterprise experience** and **cutting-edge AI innovation** to any team! 🚀", delay: 6000 }
    ],

    // Default responses - Helpful and engaging
    'default': [
      { text: "That's an interesting question! 🤔" },
      { text: "I want to make sure I give you the most helpful information about **Rakesh**. Could you be a bit more specific about what you'd like to know?", delay: 1200 },
      { text: "I can tell you about his **IBM CIO role**, **AI/ML expertise**, **technical projects**, **AWS certifications**, **skills**, **education**, or anything else that might help you understand his professional profile! 💡", delay: 2400 }
    ]
  };

  private getRandomResponse(responses: ChatResponse[]): ChatResponse[] {
    return responses;
  }

  public async getResponse(input: string): Promise<ChatResponse[]> {
    const normalizedInput = input.toLowerCase().trim();
    
    // Enhanced keyword matching with better context understanding
    if (normalizedInput.includes('hello') || normalizedInput === 'hi' || normalizedInput === 'hey') {
      if (normalizedInput.includes('hello')) return this.getRandomResponse(this.responses['hello']);
      if (normalizedInput.includes('hi')) return this.getRandomResponse(this.responses['hi']);
      if (normalizedInput.includes('hey')) return this.getRandomResponse(this.responses['hey']);
    }
    
    if (normalizedInput.includes('who are you') || normalizedInput.includes('about yourself')) {
      return this.getRandomResponse(this.responses['who are you']);
    }
    
    if (normalizedInput.includes('experience') || normalizedInput.includes('background')) {
      return this.getRandomResponse(this.responses['tell me about your experience']);
    }
    
    if (normalizedInput.includes('ibm') || normalizedInput.includes('current role') || normalizedInput.includes('job')) {
      if (normalizedInput.includes('ibm')) return this.getRandomResponse(this.responses['ibm']);
      return this.getRandomResponse(this.responses['current role']);
    }
    
    if (normalizedInput.includes('ai') || normalizedInput.includes('artificial intelligence') || normalizedInput.includes('machine learning') || normalizedInput.includes('generative') || normalizedInput.includes('agentic')) {
      if (normalizedInput.includes('artificial intelligence')) return this.getRandomResponse(this.responses['artificial intelligence']);
      return this.getRandomResponse(this.responses['ai']);
    }
    
    if (normalizedInput.includes('aws') || normalizedInput.includes('cloud') || normalizedInput.includes('certifications')) {
      if (normalizedInput.includes('aws')) return this.getRandomResponse(this.responses['aws']);
      if (normalizedInput.includes('certifications')) return this.getRandomResponse(this.responses['certifications']);
      return this.getRandomResponse(this.responses['aws']);
    }
    
    if (normalizedInput.includes('best projects') || normalizedInput.includes('what are your best projects') || normalizedInput.includes('show me your') || normalizedInput.includes('projects')) {
      return this.getRandomResponse(this.responses['best projects']);
    }
    
    if (normalizedInput.includes('technologies') || normalizedInput.includes('what technologies') || normalizedInput.includes('tech stack')) {
      return this.getRandomResponse(this.responses['what technologies do you use']);
    }
    
    if (normalizedInput.includes('skills') || normalizedInput.includes('abilities')) {
      return this.getRandomResponse(this.responses['skills']);
    }
    
    if (normalizedInput.includes('education') || normalizedInput.includes('academic') || normalizedInput.includes('college') || normalizedInput.includes('university')) {
      return this.getRandomResponse(this.responses['education']);
    }
    
    if (normalizedInput.includes('career') || normalizedInput.includes('opportunities') || normalizedInput.includes('hire')) {
      if (normalizedInput.includes('career')) return this.getRandomResponse(this.responses['career']);
      return this.getRandomResponse(this.responses['opportunities']);
    }
    
    if (normalizedInput.includes('contact') || normalizedInput.includes('reach') || normalizedInput.includes('email') || normalizedInput.includes('how can i contact')) {
      return this.getRandomResponse(this.responses['how can i contact you']);
    }
    
    if (normalizedInput.includes('more details') || normalizedInput.includes('tell me more')) {
      return this.getRandomResponse(this.responses['tell me more details']);
    }
    
    if (normalizedInput.includes('unique') || normalizedInput.includes('what makes you')) {
      return this.getRandomResponse(this.responses['what makes you unique']);
    }
    
    // Default response for unmatched queries
    return this.getRandomResponse(this.responses['default']);
  }

  public getTabResponse(tab: string): ChatResponse[] {
    switch (tab) {
      case 'me':
        return this.responses['hello'];
      default:
        return this.responses['default'];
    }
  }
}