import React from 'react';
import { Instagram, Hammer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img
                src="/logo_pb.png"
                alt="Furmiga Edificações"
                className="h-[83px] w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 text-sm text-center md:text-left max-w-xs">
              Transformando sonhos em realidade através de projetos técnicos, segurança e design de ponta.
            </p>
          </div>

          {/* Social & Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a
                href="https://instagram.com/marcofurmigamcz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-amber-500 hover:text-white transition-all group"
                aria-label="Instagram"
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="flex gap-6 text-sm text-slate-400 font-medium">
              <a href="#inicio" className="hover:text-amber-500 transition-colors">Início</a>
              <a href="#solucoes" className="hover:text-amber-500 transition-colors">Soluções</a>
              <a href="#projetos" className="hover:text-amber-500 transition-colors">Galeria</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-900 text-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} FurmigaEdificações - Marco Furmiga. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;