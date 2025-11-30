import React, { useState, useEffect, useCallback } from 'react';
import { PlayCircle, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

type Category = 'Todos' | 'Interiores' | 'Fachadas' | 'Obras' | 'Comercial';

interface Project {
  id: number;
  category: Category;
  title: string;
  subtitle: string;
  image: string;
  isVideo: boolean;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Category[] = ['Todos', 'Interiores', 'Fachadas', 'Obras', 'Comercial'];

  const projects: Project[] = [
    {
      id: 1,
      category: 'Fachadas',
      title: 'Residência Vale Verde',
      subtitle: 'Tour Virtual Completo',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      isVideo: true
    },
    {
      id: 2,
      category: 'Interiores',
      title: 'Sala de Estar Minimalista',
      subtitle: 'Render 4K',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
      isVideo: false
    },
    {
      id: 3,
      category: 'Obras',
      title: 'Execução Estrutural',
      subtitle: 'Acompanhamento Técnico',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974&auto=format&fit=crop',
      isVideo: false
    },
    {
      id: 4,
      category: 'Fachadas',
      title: 'Casa de Campo',
      subtitle: 'Projeto Arquitetônico',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop',
      isVideo: false
    },
    {
      id: 5,
      category: 'Comercial',
      title: 'Escritório Corporativo',
      subtitle: 'Reforma e Design',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      isVideo: false
    },
    {
      id: 6,
      category: 'Interiores',
      title: 'Cozinha Planejada',
      subtitle: 'Detalhamento de Marcenaria',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop',
      isVideo: false
    }
  ];

  // Lógica de Filtragem
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Navegação do Modal
  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  }, [selectedProject, filteredProjects]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  }, [selectedProject, filteredProjects]);

  // Fechar com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Bloqueia scroll do fundo
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Libera scroll
    };
  }, [selectedProject, handleNext, handlePrev]);

  return (
    <section id="projetos" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Galeria de Projetos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore nosso portfólio dividido por categorias. Clique nas imagens para ampliar.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
            key={activeCategory}
            className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory md:snap-none"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-xl overflow-hidden shadow-lg bg-white h-72 flex-shrink-0 w-[85vw] md:w-auto snap-center animate-fade-in-up cursor-pointer ${project.isVideo ? 'md:col-span-2' : 'col-span-1'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="bg-slate-900/80 text-white px-3 py-1 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center z-10">
                   {project.isVideo ? (
                      <PlayCircle size={64} className="text-white opacity-90 drop-shadow-lg group-hover:scale-110 transition-transform" />
                   ) : (
                      <ZoomIn size={48} className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 drop-shadow-lg" />
                   )}
                </div>

                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm font-medium">{project.subtitle}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full w-full text-center py-12 text-slate-500 bg-slate-100 rounded-lg border border-dashed border-slate-300 animate-fade-in">
              <p>Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
            <a 
              href="https://instagram.com/marcofurmigamcz" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 hover:underline underline-offset-4"
            >
                Ver Portfólio Completo no Instagram
            </a>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedProject && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
            onClick={() => setSelectedProject(null)}
          >
            <X size={32} />
          </button>

          {/* Navigation Prev */}
          <button 
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-2 md:p-3 rounded-full transition-all z-50"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Navigation Next */}
          <button 
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-2 md:p-3 rounded-full transition-all z-50"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Content */}
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking content
          >
             <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-auto max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
             />
             
             <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-slate-300">{selectedProject.subtitle}</p>
                {selectedProject.isVideo && (
                    <span className="inline-block mt-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">
                        Vídeo Indisponível na Demo
                    </span>
                )}
             </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Gallery;