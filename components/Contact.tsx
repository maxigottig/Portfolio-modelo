import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Maximiliano Gottig - Contact" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-6 right-6">
                <div className="glass-panel px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Lead Product Designer</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-medium text-lg italic">"Diseñando el futuro, un píxel a la vez."</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Hablemos de tu próximo proyecto</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              ¿Tienes una idea innovadora o necesitas elevar la experiencia de tu producto? Estoy listo para colaborar y convertir visiones en realidades digitales.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-violet-500 outline-none transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-violet-500 outline-none transition"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-violet-500 outline-none transition resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-xl shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98] transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-medium">maxigottig1985@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-medium">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[40rem] h-[40rem] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-fuchsia-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Contact;
