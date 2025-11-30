import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Vocês fazem apenas o projeto ou constroem também?",
      answer: "Fazemos os dois! Desde o desenho da planta, passando pelos projetos complementares (elétrica/hidráulica) até o acompanhamento e execução da obra. Oferecemos a solução completa."
    },
    {
      question: "O que é um render realista?",
      answer: "É uma imagem gerada por computador que simula com perfeição como o ambiente ficará, incluindo luzes, texturas e móveis. Isso permite que você veja o resultado final antes de gastar com a construção."
    },
    {
      question: "Meu imóvel já está construído, vocês regularizam?",
      answer: "Sim, fazemos todo o levantamento técnico do imóvel existente e realizamos o processo burocrático de regularização junto aos órgãos competentes (Prefeitura, Bombeiros, etc)."
    },
    {
      question: "Quanto tempo demora um projeto?",
      answer: "Depende da complexidade e do tamanho da obra. Um projeto residencial completo costuma levar entre 3 a 6 semanas, incluindo as revisões e aprovações do cliente."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-amber-500 flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;