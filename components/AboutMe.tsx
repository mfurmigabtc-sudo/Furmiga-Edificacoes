import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="quem-sou" className="py-24 bg-gradient-to-r from-slate-300 to-slate-400 relative overflow-hidden scroll-mt-28">
      {/* Background Studio Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-white/20 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center relative z-10">
        
        {/* Left Column: Image */}
        {/* Note for User: Replace the src below with the actual photo of Marco Furmiga removed from background or on a transparent background for best effect, 
            or a photo that matches the grey background. */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0 md:pr-12">
          <img 
            src="/foto_quem_sou.jpg" 
            alt="Marco Furmiga" 
            className="h-[400px] md:h-[600px] object-cover object-top drop-shadow-2xl rounded-lg md:rounded-none md:bg-transparent"
            style={{ maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' }} // Optional fade at bottom if needed
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-8 tracking-tight">
            Quem Sou
          </h2>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-lg relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-6 -left-6 text-6xl text-amber-500 opacity-50 font-serif">"</div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Marco Furmiga
            </h3>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Artista 3D com mais de <span className="font-bold text-slate-800">15 anos de experiência</span> em modelagem arquitetônica e design gráfico.
              </p>
              
              <p>
                Atualmente concluindo formação técnica em Edificações, combino expertise em visualização 3D com sólido conhecimento técnico em construção civil para entregar projetos que unem <span className="font-bold text-amber-600">criatividade e precisão</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;