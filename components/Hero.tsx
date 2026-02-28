
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-transparent">
      {/* Enhanced Hero Animation Layers (Maximized Blue Theme) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        
        {/* WAVE LAYERS */}
        <div className="absolute top-[-25%] right-[-15%] w-[60rem] h-[60rem] bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-[160px] animate-wave"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[50rem] h-[50rem] bg-cyan-500/15 dark:bg-cyan-600/5 rounded-full blur-[140px] animate-wave-slow delay-1000"></div>
        <div className="absolute top-[20%] left-[-5%] w-[40rem] h-[40rem] bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-sky-400/15 dark:bg-sky-500/5 rounded-full blur-[100px] animate-blob-reverse delay-500"></div>

        {/* MAXIMIZED BUBBLE SYSTEM */}
        {/* Left Side Cluster */}
        <div className="absolute top-1/4 left-[5%] w-16 h-16 bg-blue-400/30 dark:bg-blue-500/15 rounded-full blur-md animate-float"></div>
        <div className="absolute top-[40%] left-[12%] w-6 h-6 bg-blue-300/40 dark:bg-blue-400/20 rounded-full blur-sm animate-float-fast delay-300"></div>
        <div className="absolute top-[60%] left-[18%] w-8 h-8 bg-cyan-300/40 dark:bg-cyan-400/20 rounded-full blur-sm animate-float-slow delay-700"></div>
        <div className="absolute bottom-[20%] left-[25%] w-12 h-12 bg-sky-400/30 dark:bg-sky-500/15 rounded-full blur-lg animate-float-fast delay-200"></div>
        <div className="absolute top-[10%] left-[20%] w-4 h-4 bg-white/20 rounded-full blur-[1px] animate-float delay-[3s]"></div>
        
        {/* Center Cluster */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-xl animate-float delay-1500"></div>
        <div className="absolute bottom-1/3 left-[48%] w-6 h-6 bg-cyan-200/50 dark:bg-cyan-400/30 rounded-full blur-[2px] animate-float-fast delay-1000"></div>
        <div className="absolute top-[45%] left-[55%] w-3 h-3 bg-white/40 rounded-full blur-[1px] animate-float-slow delay-[4s]"></div>
        <div className="absolute top-[75%] left-[42%] w-9 h-9 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-md animate-float-slow delay-150"></div>

        {/* Right Side Cluster */}
        <div className="absolute top-[40%] right-[15%] w-24 h-24 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-2xl animate-float delay-2000"></div>
        <div className="absolute top-[70%] right-[25%] w-14 h-14 bg-sky-300/30 dark:bg-sky-500/20 rounded-full blur-md animate-float-slow delay-300"></div>
        <div className="absolute top-[10%] right-[30%] w-7 h-7 bg-cyan-400/40 dark:bg-cyan-500/20 rounded-full blur-sm animate-float delay-1200"></div>
        <div className="absolute bottom-[15%] right-[5%] w-20 h-20 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-xl animate-float-fast delay-800"></div>
        <div className="absolute top-[25%] right-[10%] w-5 h-5 bg-white/20 rounded-full blur-[1px] animate-float delay-[1s]"></div>
        <div className="absolute top-[55%] right-[40%] w-8 h-8 bg-blue-200/30 rounded-full blur-lg animate-float-fast delay-[2s]"></div>
        <div className="absolute bottom-[40%] right-[35%] w-4 h-4 bg-cyan-500/40 rounded-full blur-sm animate-float-slow delay-[0.5s]"></div>
        
        {/* Scattered Accent Bubbles */}
        <div className="absolute top-[30%] left-[40%] w-4 h-4 bg-white/20 rounded-full blur-[1px] animate-float delay-[2.5s]"></div>
        <div className="absolute top-[55%] right-[45%] w-3 h-3 bg-white/30 rounded-full blur-[1px] animate-float-fast delay-[1.5s]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-5 h-5 bg-blue-400/20 rounded-full blur-md animate-float delay-[5s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 backdrop-blur-sm">
            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-[10px]">
              Especialista en Diseño de Producto
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
            Diseñando el <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Futuro Digital</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Hola, soy Maxi Gottig. {PORTFOLIO_DATA.title} con pasión por crear productos significativos y experiencias memorables.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#portfolio"
              className="group relative px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-blue-500/20 overflow-hidden"
            >
              <span className="relative z-10">Ver Proyectos</span>
              <div className="absolute inset-0 bg-blue-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-transparent text-slate-900 dark:text-white font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all backdrop-blur-sm"
            >
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
