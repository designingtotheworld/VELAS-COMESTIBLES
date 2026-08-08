import React from 'react';
import { ShieldCheck, Flame, Zap, HeartHandshake } from 'lucide-react';

export default function ObjectionHandling() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-amber-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-lg">
              "
            </span>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              ¿Crees que no es para ti?
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-white mb-6 leading-snug">
            “No se me da muy bien la cocina y nunca he hecho velas...”
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
            Esa es la razón exacta por la cual este método fue creado. No necesitas ser chef profesional ni tener experiencia previa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-amber-900/40">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-medium text-amber-100 text-base mb-1">Sin Horno</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">Procesos sencillos a temperatura controlada en pocos minutos.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-medium text-amber-100 text-base mb-1">Sin Equipo Especial</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">Usa ollas, moldes y utensilios que ya tienes en tu cocina.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-medium text-amber-100 text-base mb-1">Solo 30 Minutos</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">Resultados perfectos garantizados desde tu primer intento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
