import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* IDE Code Card */}
        <div className="max-w-2xl mx-auto mb-12 bg-slate-950 border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden text-left">
          {/* IDE Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            </div>
            <span className="text-xs text-slate-400 font-mono">developer.js</span>
            <div className="w-10"></div>
          </div>

          {/* IDE Code Body */}
          <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
            <p className="text-purple-400">
              const <span className="text-blue-400">developer</span> = <span className="text-slate-300">{`{`}</span>
            </p>
            <p className="pl-4 text-slate-300">
              name: <span className="text-emerald-300">'Qodirov Hasan'</span>,
            </p>
            <p className="pl-4 text-slate-300">
              role: <span className="text-emerald-300">'Frontend Developer'</span>,
            </p>
            <p className="pl-4 text-slate-300">
              skills: <span className="text-slate-300">[</span>
              <span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'JS'</span>, <span className="text-emerald-300">'Tailwind'</span>
              <span className="text-slate-300">]</span>,
            </p>
            <p className="pl-4 text-slate-300">
              hardWorker: <span className="text-amber-400">true</span>,
            </p>
            <p className="text-slate-300">{`};`}</p>
          </div>

          {/* IDE Footer / Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900/50 border-t border-slate-800 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Ready to work</span>
            </div>
            <span>UTF-8</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/60">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">Qodirov Hasan</span>
            <span className="text-slate-600">•</span>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <span>React & Tailwind CSS bilan yaratildi</span>
              <Heart className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/z20628425-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-xl transition-colors flex items-center justify-center"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-xl transition-colors cursor-pointer"
              title="Tepaga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800/60 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Qodirov Hasan. Barcha huquqlar himoyalangan.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;