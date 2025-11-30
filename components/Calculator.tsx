import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, CheckCircle2, Circle, MessageSquare } from 'lucide-react';

type ServiceType = 'm2' | 'fixed' | 'tier';

interface Service {
  id: string;
  title: string;
  description: string;
  priceDisplay: string;
  type: ServiceType;
  minPrice?: number;
  maxPrice?: number;
}

const SERVICES: Service[] = [
  {
    id: 'arquitetonico',
    title: 'Projeto Arquitetônico',
    description: 'Planta baixa, fachada e detalhamento',
    priceDisplay: 'R$ 35 - R$ 50/m²',
    type: 'm2',
    minPrice: 35,
    maxPrice: 50
  },
  {
    id: 'eletrico',
    title: 'Projeto Elétrico',
    description: 'Dimensionamento e distribuição elétrica',
    priceDisplay: 'R$ 15 - R$ 25/m²',
    type: 'm2',
    minPrice: 15,
    maxPrice: 25
  },
  {
    id: 'hidro',
    title: 'Projeto Hidrossanitário',
    description: 'Água fria, quente e esgoto',
    priceDisplay: 'R$ 15 - R$ 25/m²',
    type: 'm2',
    minPrice: 15,
    maxPrice: 25
  },
  {
    id: 'regularizacao',
    title: 'Regularização de Imóvel',
    description: 'Documentação e aprovação na prefeitura',
    priceDisplay: 'R$ 2.000 - R$ 5.000',
    type: 'fixed',
    minPrice: 2000,
    maxPrice: 5000
  },
  {
    id: 'modelagem',
    title: 'Modelagem 3D',
    description: 'Para quem já possui o projeto arquitetônico pronto',
    priceDisplay: 'R$ 800 - R$ 1.500',
    type: 'fixed',
    minPrice: 800,
    maxPrice: 1500
  },
  {
    id: 'render_img',
    title: 'Render Realista (Imagem)',
    description: 'Preço varia por quantidade',
    priceDisplay: 'A partir de R$ 120/un',
    type: 'tier'
  },
  {
    id: 'render_video',
    title: 'Render Realista (Vídeo)',
    description: 'Vídeo walkthrough do projeto',
    priceDisplay: 'R$ 1.500 - R$ 3.000',
    type: 'fixed',
    minPrice: 1500,
    maxPrice: 3000
  },
  {
    id: 'obra',
    title: 'Execução de Obra',
    description: 'Acompanhamento técnico da construção',
    priceDisplay: 'R$ 80 - R$ 120/m²',
    type: 'm2',
    minPrice: 80,
    maxPrice: 120
  }
];

const Calculator: React.FC = () => {
  const [area, setArea] = useState<number>(100);
  const [selectedServices, setSelectedServices] = useState<string[]>(['arquitetonico']);
  const [renderQty, setRenderQty] = useState<number>(1);
  const [totalMin, setTotalMin] = useState<number>(0);
  const [totalMax, setTotalMax] = useState<number>(0);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    let min = 0;
    let max = 0;

    selectedServices.forEach(serviceId => {
      const service = SERVICES.find(s => s.id === serviceId);
      if (!service) return;

      if (service.type === 'm2') {
        min += area * (service.minPrice || 0);
        max += area * (service.maxPrice || 0);
      } else if (service.type === 'fixed') {
        min += service.minPrice || 0;
        max += service.maxPrice || 0;
      } else if (service.type === 'tier' && service.id === 'render_img') {
        // Tier logic
        let pricePerUnit = 250;
        if (renderQty >= 5 && renderQty <= 7) pricePerUnit = 200;
        if (renderQty >= 8 && renderQty <= 10) pricePerUnit = 160;
        if (renderQty > 10) pricePerUnit = 120;

        const cost = renderQty * pricePerUnit;
        min += cost;
        max += cost; // Tier is exact based on quantity
      }
    });

    setTotalMin(min);
    setTotalMax(max);
  }, [area, selectedServices, renderQty]);

  const handleWhatsAppClick = () => {
    const serviceNames = selectedServices
      .map(id => SERVICES.find(s => s.id === id)?.title)
      .join(', ');

    const message = `Olá! Fiz uma simulação na calculadora do site.\n\n` +
      `📐 *Área:* ${area}m²\n` +
      `🛠 *Serviços:* ${serviceNames}\n` +
      (selectedServices.includes('render_img') ? `🖼 *Qtd Renders:* ${renderQty}\n` : '') +
      `💰 *Estimativa:* ${formatCurrency(totalMin)} - ${formatCurrency(totalMax)}\n\n` +
      `Gostaria de um orçamento detalhado.`;

    window.open(`https://wa.me/5582999510558?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculadora" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            Calculadora de Orçamento
          </h2>
          <p className="text-slate-500 text-lg">
            Selecione os serviços desejados e receba uma estimativa instantânea
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Inputs */}
          <div className="flex-1 w-full">
            
            {/* Area Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Área do Projeto (m²)
              </label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full p-4 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                placeholder="Ex: 100"
              />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/50'
                        : 'border-slate-100 bg-white hover:border-slate-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-bold text-lg ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                        {service.title}
                      </h3>
                      <div className={isSelected ? 'text-amber-500' : 'text-slate-200'}>
                        {isSelected ? <CheckCircle2 size={24} className="fill-amber-500 text-white" /> : <Circle size={24} />}
                      </div>
                    </div>
                    
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Special Render Logic */}
                    {service.id === 'render_img' && isSelected && (
                      <div className="mb-4 bg-white p-3 rounded-lg border border-amber-100" onClick={(e) => e.stopPropagation()}>
                        <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Quantidade de Imagens</label>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => setRenderQty(Math.max(1, renderQty - 1))}
                            className="w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-600"
                          >
                            -
                          </button>
                          <span className="font-bold text-slate-900 w-6 text-center">{renderQty}</span>
                          <button 
                            onClick={() => setRenderQty(renderQty + 1)}
                            className="w-8 h-8 rounded bg-amber-100 hover:bg-amber-200 flex items-center justify-center font-bold text-amber-700"
                          >
                            +
                          </button>
                        </div>
                        <div className="mt-2 text-xs text-slate-400">
                          {renderQty === 1 && 'R$ 250 un.'}
                          {renderQty >= 5 && renderQty <= 7 && 'R$ 200 un.'}
                          {renderQty >= 8 && renderQty <= 10 && 'R$ 160 un.'}
                          {renderQty > 10 && 'R$ 120 un.'}
                        </div>
                      </div>
                    )}
                    
                    {service.id === 'render_img' && !isSelected && (
                       <div className="text-xs text-slate-400 mt-2 space-y-1">
                          <p>• 1 imagem: R$ 250</p>
                          <p>• 5-7 imagens: R$ 200/un</p>
                          <p>• 8-10 imagens: R$ 160/un</p>
                       </div>
                    )}

                    <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {service.priceDisplay}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Summary Sticky */}
          <div className="w-full lg:w-[400px] lg:sticky lg:top-24">
            <div className="bg-[#4A90E2] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">
                Estimativa do Projeto
              </h3>

              <div className="mb-6">
                <p className="text-blue-100 text-sm mb-1">Valor Mínimo</p>
                <p className="text-4xl font-bold">{formatCurrency(totalMin)}</p>
              </div>

              <div className="mb-8">
                <p className="text-blue-100 text-sm mb-1">Valor Máximo</p>
                <p className="text-4xl font-bold">{formatCurrency(totalMax)}</p>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-6 text-sm backdrop-blur-sm">
                <div className="flex justify-between mb-2">
                  <span>{selectedServices.length} serviço(s) selecionado(s)</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Área: {area}m²</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#E86C35] hover:bg-[#D65A24] text-white font-bold py-4 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                SOLICITAR ORÇAMENTO
              </button>

              <p className="text-xs text-blue-100 mt-4 text-center opacity-80 leading-relaxed">
                * Valores aproximados. Orçamento final será detalhado após análise técnica do projeto e suas especificidades.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;