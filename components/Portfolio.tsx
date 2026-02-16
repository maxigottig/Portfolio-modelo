
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-20 bg-transparent overflow-hidden">
      {/* Dynamic Background System: Waves & Maximized Bubbles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Large Floating Blobs */}
        <div className="absolute top-[20%] right-[-15%] w-[50rem] h-[50rem] bg-blue-500/10 dark:bg-blue-900/5 rounded-full blur-[140px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-500/10 dark:bg-cyan-900/5 rounded-full blur-[120px] animate-wave-slow delay-500"></div>

        {/* Dense Bubble Cloud */}
        <div className="absolute top-1/4 left-[10%] w-10 h-10 bg-sky-400/30 dark:bg-sky-500/15 rounded-full blur-md animate-float"></div>
        <div className="absolute top-[10%] left-[30%] w-14 h-14 bg-indigo-400/15 dark:bg-indigo-600/5 rounded-full blur-xl animate-float delay-1500"></div>
        <div className="absolute top-3/4 right-[20%] w-24 h-24 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-2xl animate-float-slow delay-1000"></div>
        <div className="absolute bottom-1/2 left-[40%] w-6 h-6 bg-white/20 rounded-full blur-[1px] animate-float-fast delay-300"></div>
        <div className="absolute top-[40%] left-[5%] w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-float-fast"></div>
        <div className="absolute bottom-[20%] right-[10%] w-12 h-12 bg-indigo-500/10 rounded-full blur-lg animate-float delay-700"></div>
        <div className="absolute top-[60%] right-[40%] w-5 h-5 bg-cyan-300/30 rounded-full blur-[2px] animate-float-slow delay-1200"></div>
        <div className="absolute bottom-[10%] left-[25%] w-9 h-9 bg-blue-400/20 rounded-full blur-md animate-float-fast delay-100"></div>
        <div className="absolute top-[25%] right-[5%] w-4 h-4 bg-white/30 rounded-full blur-[1px] animate-float delay-[2.5s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Portfolio Seleccionado</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              Proyectos destacados que combinan diseño de vanguardia con implementaciones técnicas sólidas.
            </p>
          </div>
          <button className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-2 text-sm group">
            Ver todo el archivo
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div key={project.id} className="group relative cursor-pointer">
              <div className="overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 aspect-[4/3] relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="mt-5">
                <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
