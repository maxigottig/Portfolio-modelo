
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      {/* Dynamic Background System: Waves & Maximized Bubbles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Waves */}
        <div className="absolute top-[-15%] left-[15%] w-[55rem] h-[55rem] bg-blue-500/10 dark:bg-blue-900/5 rounded-full blur-[150px] animate-wave-slow"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[45rem] h-[45rem] bg-indigo-500/10 dark:bg-indigo-900/5 rounded-full blur-[130px] animate-blob delay-1000"></div>

        {/* Maximized Bubble Field */}
        <div className="absolute top-1/4 right-[30%] w-12 h-12 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-md animate-float"></div>
        <div className="absolute bottom-1/4 left-[20%] w-16 h-16 bg-blue-300/30 dark:bg-blue-500/15 rounded-full blur-lg animate-float-slow delay-500"></div>
        <div className="absolute top-1/2 left-[10%] w-7 h-7 bg-white/20 rounded-full blur-[2px] animate-float-fast delay-1000"></div>
        <div className="absolute top-[10%] right-[15%] w-20 h-20 bg-indigo-300/15 dark:bg-indigo-700/5 rounded-full blur-2xl animate-float delay-1200"></div>
        <div className="absolute bottom-[10%] right-[30%] w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-float-fast delay-[2s]"></div>
        <div className="absolute top-[40%] left-[45%] w-5 h-5 bg-cyan-400/30 rounded-full blur-[1px] animate-float delay-[0.5s]"></div>
        <div className="absolute bottom-[30%] left-[35%] w-10 h-10 bg-indigo-400/20 rounded-full blur-lg animate-float-slow delay-[1.5s]"></div>
        <div className="absolute top-[60%] right-[10%] w-6 h-6 bg-white/30 rounded-full blur-[1px] animate-float delay-[3s]"></div>
        <div className="absolute top-[5%] left-[5%] w-12 h-12 bg-blue-200/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-[5%] right-[45%] w-4 h-4 bg-sky-300/40 rounded-full blur-sm animate-float-fast delay-100"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Capacidades Técnicas</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Dominio de herramientas y metodologías para llevar un producto desde la concepción estratégica hasta el prototipo de alta fidelidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16">
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
    </section>
  );
};

export default Skills;
