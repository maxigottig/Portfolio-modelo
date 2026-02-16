
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl relative z-10 rotate-3">
               <img 
                 src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800" 
                 alt="Design Process" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay"></div>
             </div>
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-600/5 dark:bg-indigo-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Capacidades Técnicas</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
              Dominio de herramientas y metodologías para llevar un producto desde la concepción estratégica hasta el prototipo de alta fidelidad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
              {PORTFOLIO_DATA.skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-3 items-end">
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 font-bold text-[10px] tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden backdrop-blur-sm">
                    <div 
                      className="h-full bg-slate-900 dark:bg-indigo-500 rounded-full transition-all duration-1000 group-hover:bg-indigo-600"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
