import React from 'react';
import { HardHat, PenTool, FileCheck2, CheckCircle2 } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 bg-slate-900 text-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            A solução completa para o seu imóvel
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Do projeto inicial até a regularização final, cuidamos de cada detalhe técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pilar 1 */}
          <div className="bg-slate-800 rounded-2xl p-8 relative overflow-hidden border border-slate-700 hover:border-amber-500 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <HardHat size={120} />
            </div>
            <div className="relative z-10">
                <div className="w-14 h-14 bg-amber-500 rounded-lg flex items-center justify-center mb-6 text-slate-900">
                    <HardHat size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Engenharia e Segurança</h3>
                <p className="text-slate-300 mb-6 font-medium">A Base da sua tranquilidade.</p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Projetos Elétricos seguros</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Hidrossanitário anti-entupimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Acompanhamento técnico de obra</span>
                    </li>
                </ul>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="bg-slate-800 rounded-2xl p-8 relative overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors transform lg:-translate-y-4 shadow-2xl shadow-black/50">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <PenTool size={120} />
            </div>
            <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-6 text-white">
                    <PenTool size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visualização e Design</h3>
                <p className="text-slate-300 mb-6 font-medium">O Sonho materializado.</p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Modelagem 3D Hiper-realista</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Vídeos de Walkthrough (Passeio)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Projetos modernos e funcionais</span>
                    </li>
                </ul>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="bg-slate-800 rounded-2xl p-8 relative overflow-hidden border border-slate-700 hover:border-green-500 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <FileCheck2 size={120} />
            </div>
            <div className="relative z-10">
                <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center mb-6 text-white">
                    <FileCheck2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Burocracia</h3>
                <p className="text-slate-300 mb-6 font-medium">A Tranquilidade legal.</p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Regularização na Prefeitura</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Habite-se e Averbação</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                        <span className="text-slate-400 text-sm">Valorização de mercado do imóvel</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;