import React from 'react';
import { AlertTriangle, EyeOff, FileWarning, TrendingDown } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: <TrendingDown size={40} className="text-red-500" />,
      title: "Planejando o Prejuízo",
      description: "Construir sem projeto é certeza de desperdício de material e retrabalho. O barato que sai caro."
    },
    {
      icon: <EyeOff size={40} className="text-red-500" />,
      title: "Construindo no Escuro",
      description: "Não conseguir visualizar a fachada antes de gastar com acabamentos caros e se arrepender depois."
    },
    {
      icon: <AlertTriangle size={40} className="text-red-500" />,
      title: "Riscos de Segurança",
      description: "Instalações elétricas mal dimensionadas e encanamentos que entopem constantemente."
    },
    {
      icon: <FileWarning size={40} className="text-red-500" />,
      title: "Imóvel Irregular",
      description: "Risco de multas, embargo da obra pela prefeitura e desvalorização na hora da venda."
    }
  ];

  return (
    <section id="problemas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Não comece sua obra no escuro
          </h2>
          <p className="text-lg text-slate-600">
            Você já imaginou investir seu dinheiro na construção e o resultado final não ser o que você esperava?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
                key={index} 
                className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;