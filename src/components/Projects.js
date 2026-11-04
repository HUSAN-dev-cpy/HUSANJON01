import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NexCart - E-Commerce Web App",
      price: "Full Stack",
      category: "React & Tailwind",
      description: "React va Tailwind CSS yordamida yaratilgan zamonaviy e-commerce onlayn do'kon ilovasi.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Prezent Prep Hub - Gamified Learning",
      price: "Platform",
      category: "EdTech",
      description: "Prezident maktablari imtihonlari uchun gamified ta'lim platformasi va sun'iy intellekt yordamchisi.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "SmartStep PS - Academic Portal",
      price: "Web App",
      category: "React.js",
      description: "O'quvchilar va ota-onalar uchun mo'ljallangan raqamli ta'limiy yordamchi va axborot markazi.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Stylist AI - Outfit Generator",
      price: "AI App",
      category: "Tailwind UI",
      description: "Sun'iy intellekt asosida ishlaydigan zamonaviy kiyim-kechak va moddalar generatori interfeysi.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "YouTube Clone Player",
      price: "Streaming",
      category: "JavaScript",
      description: "Video kontentlarni tomosha qilish va qidirish imkonini beruvchi klon veb-ilova.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Modern Portfolio Template",
      price: "Frontend",
      category: "UI/UX",
      description: "Frontend dasturchilar uchun maxsus tayyorlangan shaxsiy portfolio veb-sayti.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Mening loyihalarim</h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Kompyuter va dasturlash muhitida yaratgan zamonaviy veb-ilovalarim hamda loyihalarim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;