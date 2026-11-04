import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Web Developer",
      period: "2025 - Hozirgi vaqt",
      description: "React, JavaScript va Tailwind CSS yordamida zamonaviy veb-ilovalar, interfeyslar va ta'limiy platformalarni ishlab chiqish.",
      achievements: [
        "Modulli komponentlar arxitekturasi asosida loyihalar yaratish",
        "Tailwind CSS orqali barcha qurilmalarga moslashuvchan (responsive) dizaynlar tuzish",
        "GitHub orqali version control va jamoaviy kod yozish jarayonlarini boshqarish"
      ]
    },
    {
      role: "UI & Web Application Creator",
      period: "2024 - 2025",
      description: "Turli xil interaktiv veb sahifalar, e-commerce va ta'limiy platformalar prototiplarini yaratish.",
      achievements: [
        "REST API bilan ishlash va ma'lumotlarni dinamik chiqarish",
        "Toza va tushunarli kod yozish prinsiplariga amal qilish",
        "Foydalanuvchi tajribasini (UX) yaxshilash uchun zamonaviy interfeys dizaynlarini qo'llash"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Ish Tajribasi</h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Frontend dasturlash yo'nalishidagi amaliy tajribam va erishgan natijalarim.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700/60 text-indigo-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-full text-xs font-medium text-indigo-300 w-fit">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2.5">
                {exp.achievements.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;