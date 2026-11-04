import React from 'react';
import { Home, Grid, Package, Info, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-slate-900 border-r border-slate-800 z-50 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-800">
          <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
            StoreCraft Panel
          </span>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl md:hidden transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <a
            href="#home"
            className="flex items-center gap-3 px-4 py-3 text-slate-200 bg-indigo-600/10 border border-indigo-500/30 rounded-xl font-medium text-sm transition-colors"
          >
            <Home className="w-5 h-5 text-indigo-400" />
            Bosh sahifa
          </a>
          <a
            href="#categories"
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-xl font-medium text-sm transition-colors"
          >
            <Grid className="w-5 h-5 text-slate-400" />
            Kategoriyalar
          </a>
          <a
            href="#products"
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-xl font-medium text-sm transition-colors"
          >
            <Package className="w-5 h-5 text-slate-400" />
            Mahsulotlar
          </a>
          <a
            href="#about"
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-xl font-medium text-sm transition-colors"
          >
            <Info className="w-5 h-5 text-slate-400" />
            Loyiha haqida
          </a>
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-400 mb-1">FakeStore API Portfolio</p>
            <p className="text-sm font-semibold text-slate-200">React & Tailwind CSS</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;