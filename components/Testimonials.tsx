import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Proprietário Residencial",
      text: "O render em vídeo me ajudou a escolher a cor da fachada, economizei muito não comprando a tinta errada. O projeto elétrico ficou perfeito.",
      rating: 5
    },
    {
      name: "Ana Cláudia",
      role: "Reforma Comercial",
      text: "Minha obra estava embargada e não sabia o que fazer. A equipe regularizou tudo rapidamente junto à prefeitura. Recomendo o serviço.",
      rating: 5
    },
    {
      name: "Marcos Oliveira",
      role: "Construção do Zero",
      text: "Profissionalismo nota 10. Ter a lista de materiais exata me fez economizar horrores no depósito. O 3D ficou idêntico à casa pronta.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          O que nossos clientes dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 flex-grow">"{t.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;