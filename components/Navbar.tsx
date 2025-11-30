import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Sou', href: '#quem-sou' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Galeria', href: '#projetos' },
    { name: 'Contatos', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-2"
        >
          <img
            src={isScrolled ? "/logo_color.png" : "/logo_pb.png"}
            alt="Furmiga Edificações"
            className="h-[62px] md:h-[73px] w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-medium transition-colors hover:text-amber-500 text-sm xl:text-base ${isScrolled ? 'text-slate-700' : 'text-white shadow-black drop-shadow-md'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5582999510558"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-sm xl:text-base"
          >
            Orçamento Gratuito
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-amber-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} color={isScrolled ? '#0f172a' : '#ffffff'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 border-t border-gray-100 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-800 text-lg font-medium py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5582999510558"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-green-600 text-white text-center py-3 rounded-lg font-bold text-lg mt-2"
          >
            Chamar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;