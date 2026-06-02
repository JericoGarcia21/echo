import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Command } from 'lucide-react';
import './AssistantApp.css';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  isBootSeq?: boolean;
}

const SYSTEM_PROMPT = `You are E.C.H.O, the digital assistant for Jerico B. Garcia's portfolio operating system. 
Jerico is a Full-Stack Web & Mobile Developer and an IT Instructor at Universidad de Dagupan. He holds a BSIT and is currently an MIT Candidate.
His skills include React, PHP, Laravel, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, Node.js with Express, Dart, Flutter, MySQL, MongoDB, Firebase, C++, Python Flask, Java, and Java GUI.
Your tone should be helpful, slightly futuristic, professional, and concise. 
If the user asks who you are, introduce yourself as E.C.H.O.`;

const getLocalResponse = (text: string) => {
  const query = text.toLowerCase();

  if (query.includes('who is jerico') || query.includes('about jerico')) {
    return 'Jerico B. Garcia is a Full-Stack Web & Mobile Developer and IT Instructor at Universidad de Dagupan. He is a BSIT graduate, currently an MIT candidate, and builds web, mobile, AI-assisted, and computer-vision projects.';
  }

  if (query.includes('skill') || query.includes('tech')) {
    return 'Jerico works with React, Node.js, Laravel, PHP, Flutter, Firebase, Java, C++, Python Flask, MongoDB, MySQL, Tailwind CSS, Bootstrap, Docker, Postman, Figma, WordPress, Gemini AI, Antigravity, and Kiro.';
  }

  if (query.includes('contact') || query.includes('email') || query.includes('linkedin') || query.includes('github')) {
    return 'Contact details: email jbgarcia@psuuc.edu.ph, GitHub github.com/psuuc-jbgarcia, LinkedIn linkedin.com/in/jbgarcia.';
  }

  if (query.includes('project')) {
    return 'Jerico has built projects including an AI-powered essay evaluation system, a smart parking system with plate recognition, barangay document request and recipe systems with chatbots, mobile recipe and quiz apps, and inventory management tools.';
  }

  if (query.includes('who are you') || query.includes('what are you')) {
    return 'I am E.C.H.O, the digital assistant for Jerico B. Garcia\'s portfolio operating system.';
  }

  return 'E.C.H.O local knowledge mode is active. I can answer questions about Jerico B. Garcia, including his background, skills, projects, and contact details.';
};

const AssistantApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;

    if (messages.length === 0) {
      setMessages([{ id: 'boot1', sender: 'ai', text: 'E.C.H.O Protocol Initializing...', isBootSeq: true }]);

      timeout1 = setTimeout(() => {
        setMessages(prev => [...prev, { id: 'boot2', sender: 'ai', text: 'System Online. Security clearance accepted.', isBootSeq: true }]);

        timeout2 = setTimeout(() => {
          setMessages(prev => [...prev, {
            id: 'boot3',
            sender: 'ai',
            text: 'Greetings. I am E.C.H.O, the digital assistant for this operating system. How can I assist you with information regarding Jerico B. Garcia?'
          }]);
        }, 800);
      }, 1000);
    }
    return () => { clearTimeout(timeout1); clearTimeout(timeout2); };
  }, [messages.length]);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateResponse = async (text: string) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return getLocalResponse(text);
    }

    try {
      // Use user's previous messages for context
      const chatHistory = messages.filter(m => !m.isBootSeq).map(m => ({
        role: m.sender === 'ai' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const payload = {
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [...chatHistory, { role: 'user', parts: [{ text }] }],
      };

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Gemini request failed with status ${response.status}`);
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      return data.candidates?.[0]?.content?.parts?.[0]?.text ?? getLocalResponse(text);
    } catch (err) {
      console.error(err);
      return getLocalResponse(text);
    }
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const aiResponseText = await generateResponse(userMsg.text);
    setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'ai', text: aiResponseText }]);
    setIsTyping(false);
  };

  const handleQuickCommand = async (cmd: string) => {
    setInput('');
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: cmd };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const aiResponseText = await generateResponse(cmd);
    setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'ai', text: aiResponseText }]);
    setIsTyping(false);
  };

  return (
    <div className="assistant-app">
      <div className="assistant-header">
        <Bot size={20} className="assistant-icon" />
        <span className="assistant-title">E.C.H.O Protocol v1.4</span>
        <span className="assistant-status"></span>
      </div>

      <div className="assistant-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            <div className="message-bubble">
              {msg.sender === 'ai' && !msg.isBootSeq && <Bot size={14} className="message-avatar" />}
              {msg.sender === 'user' && <User size={14} className="message-avatar" />}
              <div className={`message-text ${msg.isBootSeq ? 'boot-seq' : ''}`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message-wrapper ai typing">
            <div className="message-bubble">
              <Bot size={14} className="message-avatar" />
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      <div className="assistant-quick-actions">
        <button onClick={() => handleQuickCommand('Who is Jerico?')}><Command size={12} /> Who is Jerico?</button>
        <button onClick={() => handleQuickCommand('Tech Skills')}><Command size={12} /> Tech Skills</button>
        <button onClick={() => handleQuickCommand('Contact Details')}><Command size={12} /> Contact Info</button>
      </div>

      <form className="assistant-input-area" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Query E.C.H.O network..."
          className="assistant-input"
        />
        <button type="submit" className="assistant-send-btn" disabled={!input.trim()}>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default AssistantApp;
