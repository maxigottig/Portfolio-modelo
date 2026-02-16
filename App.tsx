
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    
    const followMouse = () => {
      setCursorPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15
      }));
      animationFrame = requestAnimationFrame(followMouse);
    };
    
    animationFrame = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen transition-colors duration-500 relative">
      {/* --- MASTER BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-white dark:bg-[#030303]">
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-grain mix-blend-overlay z-40"></div>
        
        {/* Animated Gradient Meshes */}
        <div className="absolute inset-0 opacity-40 dark:opacity-60 overflow-hidden">
          {/* Main Orbiting Violet Sphere */}
          <div className="absolute top-[20%] left-[10%] w-[60rem] h-[60rem] bg-violet-600/30 dark:bg-violet-900/40 rounded-full blur-[120px] animate-blob"></div>
          
          {/* Slow Secondary Purple Sphere */}
          <div className="absolute bottom-[10%] right-[5%] w-[50rem] h-[50rem] bg-purple-600/20 dark:bg-purple-900/30 rounded-full blur-[140px] animate-blob-reverse delay-1000"></div>
          
          {/* Fuchsia Accent Wave */}
          <div className="absolute top-[40%] right-[20%] w-[35rem] h-[35rem] bg-fuchsia-500/20 dark:bg-fuchsia-900/10 rounded-full blur-[100px] animate-blob-slow delay-500"></div>
          
          {/* Indigo Deep Layer */}
          <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-indigo-700/15 dark:bg-indigo-950/20 rounded-full blur-[130px] animate-blob-reverse delay-2000"></div>

          {/* Centered Fluid Rotation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] animate-fluid opacity-20 dark:opacity-30">
             <div className="absolute top-0 left-0 w-80 h-80 bg-violet-400 dark:bg-violet-800 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 dark:bg-purple-800 rounded-full blur-[100px]"></div>
          </div>
        </div>

        {/* Subtle grid pattern for structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- CURSOR SYSTEM --- */}
      <div 
        className={`fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] transition-transform duration-300 ease-out border border-violet-500/30 rounded-full flex items-center justify-center mix-blend-difference ${isHovering ? 'scale-[2.2] bg-white/20 border-white/40' : 'scale-100'}`}
        style={{ transform: `translate(${cursorPos.x - 20}px, ${cursorPos.y - 20}px)` }}
      >
        <div className={`w-1.5 h-1.5 bg-white rounded-full transition-transform duration-300 ${isHovering ? 'scale-50' : 'scale-100'}`}></div>
      </div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Portfolio />
        <Skills />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
