import React, { useState } from 'react';
import { Home, FolderGit2, Cpu, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Bosh sahifa', href: '#home', icon: Home },
    { name: 'Loyihalar', href: '#projects', icon: FolderGit2 },
    { name: 'Ko\'nikmalar', href: '#skills', icon: Cpu },
    { name: 'Bog\'lanish', href: '#contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Ism */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
              H
            </div>
            <span className="text-base font-bold text-white tracking-wide group-hover:text-indigo-400 transition-colors">
              Qodirov Hasan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 border border-slate-800/80 px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* GitHub va Aloqa tugmasi */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/z20628425-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-indigo-500/40 rounded-xl transition-all"
              title="GitHub Profil"
            >
              <svg className="w-4 h-4 fill-current text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition-all shadow-md shadow-indigo-600/20"
            >
              Bog'lanish
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Icon className="w-5 h-5 text-indigo-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl transition-all"
            >
              Bog'lanish
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;