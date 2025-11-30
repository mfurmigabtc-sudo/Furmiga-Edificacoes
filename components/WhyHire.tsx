import React from 'react';
import { PiggyBank, ShieldCheck, TrendingUp } from 'lucide-react';

const WhyHire: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que contratar um Técnico em Edificações?
          </h2>
          <p className="text-slate-400">
            Muitos acham que é um gasto extra, mas na verdade é o maior investimento da sua obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-amber-500/50 transition-all">
                <PiggyBank className="text-amber-400 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Economia Real</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                    Uma obra planejada reduz em até <strong>30% o custo</strong> com materiais, evitando compras erradas e desperdícios no canteiro de obras.
                </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-amber-500/50 transition-all">
                <ShieldCheck className="text-amber-400 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Previsibilidade</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                   Com o 3D e o projeto técnico em mãos, você e a equipe de obra sabem exatamente o que deve ser feito. Sem improvisos perigosos.
                </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-amber-500/50 transition-all">
                <TrendingUp className="text-amber-400 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Valorização</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                    Um imóvel regularizado com "Habite-se" e bem projetado vale muito mais na hora da venda e facilita o financiamento bancário.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHire;