import React from 'react';
import { MonitorPlay, GraduationCap, Layers, CheckCircle2 } from 'lucide-react';

const Classes: React.FC = () => {
    return (
        <section id="aulas" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-28">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-sm font-bold mb-6">
                            <GraduationCap size={18} />
                            <span>Aulas Particulares</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Domine o <span className="text-amber-500">Revit</span> do Básico ao Executivo
                        </h2>

                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Não aprenda apenas a apertar botões. Entenda a metodologia BIM e aprenda a criar projetos completos, da modelagem inicial até o detalhamento executivo e o render realista.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <Layers className="text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-white">Modelagem BIM Completa</h4>
                                    <p className="text-sm text-slate-400">Paredes, pisos, forros, telhados e famílias paramétricas.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <CheckCircle2 className="text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-white">Projeto Executivo</h4>
                                    <p className="text-sm text-slate-400">Detalhamento, pranchas, tabelas de quantitativos e documentação.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <MonitorPlay className="text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-white">Renderização Realista</h4>
                                    <p className="text-sm text-slate-400">Aprenda a criar imagens que vendem o projeto.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/5582999510558?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20Revit."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105 inline-block"
                        >
                            Agendar Aula Particular
                        </a>
                    </div>

                    {/* Right Image/Visual */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
                            <img
                                src="/aulas_revit.jpg"
                                alt="Tela do computador com software de engenharia"
                                className="w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-mono text-sm text-amber-400 mb-1">Software</p>
                                <h3 className="text-2xl font-bold">Autodesk Revit</h3>
                            </div>
                        </div>

                        {/* Float Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl hidden md:block max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold text-sm">Método Prático</p>
                                    <p className="text-slate-500 text-xs">Focado no mercado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Classes;