
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 backdrop-blur-sm">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-[10px]">
              Especialista en Diseño de Producto
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
            Diseñando el <br />
            <span className="text-gradient">Futuro Digital</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Hola, soy {PORTFOLIO_DATA.name.split(' ')[0]}. {PORTFOLIO_DATA.title} con pasión por crear productos significativos y experiencias memorables.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#portfolio"
              className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl dark:shadow-white/10 overflow-hidden"
            >
              <span className="relative z-10">Ver Proyectos</span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-transparent text-slate-900 dark:text-white font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all backdrop-blur-sm"
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
