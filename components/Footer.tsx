
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 dark:bg-[#050505] text-white py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-gradient">
              AR.
            </span>
            <p className="mt-6 text-slate-400 max-w-sm leading-relaxed text-sm">
              Especialista en desarrollo creativo y arquitectura de productos digitales. 
              Ayudo a marcas y agencias a transformar ideas complejas en interfaces intuitivas.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-indigo-400">Navegación</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experiencia</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Habilidades</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-indigo-400">Social</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={PORTFOLIO_DATA.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  GitHub
                </a>
              </li>
              <li className="text-slate-500 mt-4">{PORTFOLIO_DATA.email}</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Gemini AI.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
