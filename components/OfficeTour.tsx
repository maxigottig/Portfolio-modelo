import React, { useState, useRef } from 'react';

const OfficeTour: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Nuestro Espacio de Trabajo</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Un entorno diseñado para la creatividad y la innovación, con una estética nórdica minimalista que fomenta la claridad mental.
          </p>
        </div>

        <div 
          className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-video bg-slate-100 dark:bg-slate-900 cursor-pointer"
          onClick={togglePlay}
        >
          {/* Video Overlay for aesthetic */}
          <div className={`absolute inset-0 z-10 bg-black/20 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}></div>
          
          {/* Play Button Overlay */}
          <div className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ${isPlaying ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <video 
            ref={videoRef}
            loop 
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            crossOrigin="anonymous"
            poster="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          >
            <source 
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27db3449f61f01d106346c8e81d6f0600072bfa&profile_id=164&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
            Tu navegador no soporta el elemento de video.
          </video>

          {/* Floating Label */}
          <div className="absolute bottom-8 left-8 z-20">
            <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 border border-white/20">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></div>
              <span className="text-sm font-medium text-white">Tour Virtual: Oficina Central</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default OfficeTour;
