import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen w-full flex flex-col items-center justify-start md:justify-center overflow-hidden scroll-mt-28 pt-32 md:pt-0 pb-10 md:pb-0">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-slate-900/70"></div>

      {/* Video Background (Simulated with Image for stability if video fails, but structure is ready for video) */}
      <div className="absolute inset-0 z-0">
        {/* 
            Tip for the user: Replace the src below with your actual render walkthrough video.
            To make it really cool, use a video that loops a camera movement through a living room or exterior.
         */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Interior Moderno Render"
          className="w-full h-full object-cover"
        />
        {/* Uncomment below to use video
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/path-to-your-render-video.mp4" type="video/mp4" />
        </video>
        */}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white md:mt-16">
        <div className="inline-block bg-amber-500/20 border border-amber-500/50 backdrop-blur-sm px-4 py-1 rounded-full mb-6 animate-fade-in-up">
          <span className="text-amber-400 font-semibold tracking-wide text-xs md:text-sm uppercase">Especialista em Edificações</span>
        </div>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-5xl mx-auto drop-shadow-xl animate-fade-in-up delay-100">
          Tire sua Obra do Papel com <span className="text-amber-500">Segurança Técnica</span> e Visualize Tudo Antes de Construir.
        </h1>

        <p className="text-base md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto font-light animate-fade-in-up delay-200">
          Projetos Arquitetônicos, Elétricos e Hidrossanitários completos. Da modelagem 3D hiper-realista até a entrega das chaves.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a
            href="#contato"
            className="bg-amber-500 hover:bg-amber-600 text-white text-base md:text-lg font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg shadow-amber-500/30 transition-all transform hover:scale-105 flex items-center gap-2 group"
          >
            SOLICITAR ORÇAMENTO GRATUITO
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projetos"
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-base md:text-lg font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;