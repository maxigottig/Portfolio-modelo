
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-transparent overflow-hidden">
      {/* Dynamic Background System: Waves & Maximized Bubbles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Waves */}
        <div className="absolute top-0 left-[-10%] w-[50rem] h-[50rem] bg-indigo-500/10 dark:bg-indigo-900/5 rounded-full blur-[140px] animate-wave"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-blue-500/10 dark:bg-blue-900/5 rounded-full blur-[120px] animate-wave-slow delay-1000"></div>
        
        {/* Expanded Bubble System */}
        <div className="absolute top-[10%] right-[15%] w-16 h-16 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-md animate-float"></div>
        <div className="absolute top-[25%] left-[10%] w-6 h-6 bg-blue-400/20 rounded-full blur-sm animate-float-fast delay-200"></div>
        <div className="absolute top-[40%] right-[5%] w-20 h-20 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-xl animate-float delay-1500"></div>
        <div className="absolute top-2/3 left-[5%] w-12 h-12 bg-blue-300/30 dark:bg-blue-500/10 rounded-full blur-sm animate-float-slow delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-cyan-400/40 dark:bg-cyan-500/20 rounded-full blur-[2px] animate-float-fast delay-700"></div>
        <div className="absolute bottom-[10%] right-[20%] w-10 h-10 bg-indigo-300/20 rounded-full blur-lg animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-[45%] w-4 h-4 bg-white/20 rounded-full blur-[1px] animate-float-fast delay-300"></div>
        <div className="absolute bottom-[40%] left-[15%] w-7 h-7 bg-sky-400/20 rounded-full blur-md animate-float-slow delay-[2s]"></div>
        <div className="absolute top-[70%] right-[35%] w-5 h-5 bg-cyan-200/40 rounded-full blur-sm animate-float delay-[4s]"></div>
        <div className="absolute bottom-5 right-5 w-14 h-14 bg-blue-600/5 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Trayectoria Profesional</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Mi carrera se ha forjado en las agencias más innovadoras, trabajando en la intersección del diseño, la tecnología y el negocio.
          </p>
        </div>

        <div className="space-y-32">
          {PORTFOLIO_DATA.agencies.map((agency, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={agency.id} 
                className={`flex flex-col lg:items-center gap-12 lg:gap-24 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Image Part */}
                <div className="flex-1 relative group">
                  <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl dark:shadow-indigo-500/5">
                    <img
                      src={agency.image}
                      alt={agency.name}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  </div>
                  {/* Agency Mini-Logo Decoration */}
                  <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-24 h-24 bg-white dark:bg-slate-800 rounded-3xl p-4 shadow-xl border border-slate-100 dark:border-slate-700 z-20 hidden sm:flex items-center justify-center`}>
                    <img src={agency.logo} alt={agency.name} className="max-w-full max-h-full rounded-lg" />
                  </div>
                </div>

                {/* Text Part */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs">
                      {agency.period}
                    </p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {agency.name}
                    </h3>
                    <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                      {agency.role}
                    </p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                    {agency.description}
                  </p>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                      Product Design
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                      UX Strategy
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
