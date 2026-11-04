import React from 'react';
import { Code2, Layout, CheckCircle2 } from 'lucide-react';

const About = () => {
  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "Vue.js",
    "Git & GitHub",
    "REST API",
    "Vite"
  ];

  return (
    <section id="about" className="py-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Men haqimda</h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Zamonaviy, tez ishlaydigan va foydalanuvchilar uchun qulay veb-ilovalar yaratuvchi frontend dasturchiman.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Frontend Dasturlash va Tajriba
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Men veb-ilovalar, interfeyslar va ta'limiy platformalar yaratishga ixtisoslashganman. Asosiy e'tiborim toza arxitektura, qulay foydalanuvchi tajribasi (UX) va sifatli kod yozishga qaratilgan.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              React, JavaScript va Tailwind CSS texnologiyalaridan foydalangan holda murakkab funksionalga ega zamonaviy loyihalarni ishlab chiqaman.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <Code2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Clean Code</h4>
                  <p className="text-xs text-slate-400 mt-1">Modulli va tushunarli komponentlar arxitekturasi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <Layout className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Responsive Design</h4>
                  <p className="text-xs text-slate-400 mt-1">Barcha qurilmalarga moslashuvchan interfeyslar.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Texnologiyalar va Ko'nikmalar
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-slate-800 border border-slate-700/80 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;