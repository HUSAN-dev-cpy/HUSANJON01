import React from 'react';
import { Code2, Cpu, Globe, Layout, Database, GitBranch, Layers, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      skills: ["React.js", "Vue 3", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Vite"]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      skills: ["JavaScript", "Python", "C++"]
    },
    {
      title: "State & Architecture",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      skills: ["Context API", "Modular Architecture", "Component-Based UI", "REST API"]
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
      skills: ["Git & GitHub", "Visual Studio Code", "Node.js", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Texnologiyalar va Ko'nikmalar</h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Loyihalarimda foydalanadigan asosiy texnologiyalar, kutubxonalar va dasturlash tillari to'plami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700/60">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-medium px-3.5 py-2 rounded-xl hover:bg-slate-700/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;