import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Hammer, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formats the message for WhatsApp
    const msg = `*Novo Contato via Site*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Assunto:* ${formData.subject}\n\n*Mensagem:* ${formData.message}`;
    
    window.open(`https://wa.me/5582999510558?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-slate-900 text-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info Column */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Fale Conosco</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Vamos tirar seu projeto do papel?
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Preencha o formulário ou entre em contato direto pelos nossos canais. Estamos prontos para atender sua demanda de projeto, obra ou aulas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-amber-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefone / WhatsApp</h4>
                  <p className="text-slate-400">+55 82 99951-0558</p>
                  <a href="https://wa.me/5582999510558" className="text-amber-500 text-sm hover:underline">
                    Clique para conversar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-amber-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-mail</h4>
                  <p className="text-slate-400">contato@edificatech.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Localização</h4>
                  <p className="text-slate-400">Maceió - Alagoas - Brasil</p>
                  <p className="text-slate-500 text-xs mt-1">Atendimento online para todo o Brasil</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
               <h4 className="font-bold text-lg mb-4">Siga-nos</h4>
               <a 
                  href="https://instagram.com/marcofurmigamcz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
               >
                 <Instagram size={20} />
                 @marcofurmigamcz
               </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:w-2/3 bg-white text-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Hammer className="text-amber-500" />
              Envie uma mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Telefone (WhatsApp)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Orçamento de Projeto">Orçamento de Projeto</option>
                    <option value="Regularização">Regularização de Imóvel</option>
                    <option value="Aulas de Revit">Aulas de Revit</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Descreva brevemente sua necessidade..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-amber-500/30 transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send size={20} />
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;