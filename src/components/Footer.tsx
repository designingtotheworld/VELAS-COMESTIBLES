import React from 'react';
import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 text-center text-neutral-500 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-amber-400 font-serif font-medium text-lg">
          <Flame className="w-5 h-5 fill-amber-400" />
          <span>Velas Comestibles Gourmet</span>
        </div>
        <p className="max-w-md text-neutral-400">
          El arte culinario que transforma cualquier mesa en una experiencia inolvidable. Todos los derechos reservados © {new Date().getFullYear()}.
        </p>
        <div className="flex items-center gap-6 mt-4 text-neutral-400">
          <a href="#recetas" className="hover:text-amber-400 transition-colors">Recetas</a>
          <a href="#checkout" className="hover:text-amber-400 transition-colors">Inscripción</a>
          <span>•</span>
          <span>Soporte 24/7: soporte@velascomestibles.com</span>
        </div>
      </div>
    </footer>
  );
}
