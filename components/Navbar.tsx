
import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        // The browser requires a user gesture to play audio. 
        // This click handler satisfies that.
        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Focus Mode failed:", err);
      setIsPlaying(false);
      setIsLoading(false);
      
      // If Suno fails, we try to reload with the fallback immediately
      if (audioRef.current && !audioRef.current.src.includes('soundhelix')) {
        console.log("Attempting fallback audio...");
        audioRef.current.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
        audioRef.current.load();
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.error("All audio sources failed", e));
      }
    }
  };

  const handleAudioError = () => {
    console.error("Audio source error detected");
    setIsLoading(false);
    setIsPlaying(false);
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hidden Audio Element */}
        <audio 
          ref={audioRef}
          src="https://cdn1.suno.ai/sDtg6jnZFWobFK1b.mp3"
          loop
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => setIsLoading(false)}
          onPause={() => setIsLoading(false)}
          onCanPlayThrough={() => setIsLoading(false)}
          onError={handleAudioError}
          preload="none"
        />
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gradient">
              AR.
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-2 border-l border-slate-200 dark:border-slate-800 pl-6">
              {/* Music Toggle */}
              <button
                onClick={toggleMusic}
                disabled={isLoading}
                className={`p-2 rounded-full transition-all duration-300 flex items-center gap-2 group ${isPlaying ? 'bg-indigo-500/10 text-indigo-500' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'} ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
                title={isPlaying ? "Pausar música" : "Reproducir música para concentrarse"}
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  ) : isPlaying ? (
                    <div className="flex items-end gap-0.5 h-3">
                      <div className="w-0.5 bg-current animate-[music-bar_0.8s_ease-in-out_infinite]"></div>
                      <div className="w-0.5 bg-current animate-[music-bar_1.2s_ease-in-out_infinite]"></div>
                      <div className="w-0.5 bg-current animate-[music-bar_1s_ease-in-out_infinite]"></div>
                    </div>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  )}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider hidden lg:block">
                  {isLoading ? 'Cargando...' : isPlaying ? 'Focus ON' : 'Focus Mode'}
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleMusic}
              disabled={isLoading}
              className={`p-2 rounded-full transition-all duration-300 ${isPlaying ? 'bg-indigo-500/10 text-indigo-500' : 'text-slate-600 dark:text-slate-400'} ${isLoading ? 'opacity-50' : ''}`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : isPlaying ? (
                <div className="flex items-end gap-0.5 h-3">
                  <div className="w-0.5 bg-current animate-[music-bar_0.8s_ease-in-out_infinite]"></div>
                  <div className="w-0.5 bg-current animate-[music-bar_1.2s_ease-in-out_infinite]"></div>
                  <div className="w-0.5 bg-current animate-[music-bar_1s_ease-in-out_infinite]"></div>
                </div>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
