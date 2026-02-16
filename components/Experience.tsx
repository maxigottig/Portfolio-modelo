
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
