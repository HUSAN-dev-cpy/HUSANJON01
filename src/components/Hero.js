import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Chap tomon: Matnlar va tugmalar */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs font-medium text-indigo-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Frontend Dasturchi Portfolio
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Salom, men <span className="bg-gradient-to-r from-indigo-400 via-indigo-200 to-white bg-clip-text text-transparent">Qodirov Hasan</span>. Frontend dasturchiman
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
              React, JavaScript va Tailwind CSS yordamida zamonaviy, tez ishlaydigan va foydalanuvchilarga qulay veb-ilovalar hamda interfeyslar yarataman.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-lg shadow-indigo-600/20"
              >
                <span>Loyihalarni ko'rish</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/z20628425-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium px-6 py-3 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-indigo-400" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Profil</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-800/80 max-w-xl">
              <div>
                <span className="block text-2xl font-bold text-white mb-1">React</span>
                <span className="text-xs text-slate-400">Asosiy kutubxona</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-1">Tailwind</span>
                <span className="text-xs text-slate-400">Styling & UI</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white mb-1">Modulli</span>
                <span className="text-xs text-slate-400">Clean Architecture</span>
              </div>
            </div>
          </div>

          {/* O'ng tomon: Shaxsiy rasm bloki */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-3xl overflow-hidden border-2 border-indigo-500/40 shadow-2xl shadow-indigo-600/20 bg-slate-900 group">
              <img
                src="/hasan.jpg" 
                alt="Qodirov Hasan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 p-3 rounded-2xl text-center">
                <p className="text-sm font-semibold text-white">Qodirov Hasan</p>
                <p className="text-xs text-indigo-400">Frontend Developer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;