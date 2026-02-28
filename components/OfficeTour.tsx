import React from 'react';

const OfficeTour: React.FC = () => {
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

        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-video bg-slate-100 dark:bg-slate-900">
          {/* Video Overlay for aesthetic */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-interior-with-minimalist-design-31714-large.mp4" 
              type="video/mp4" 
            />
            Tu navegador no soporta el elemento de video.
          </video>

          {/* Floating Label */}
          <div className="absolute bottom-8 left-8 z-20">
            <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 border border-white/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
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
