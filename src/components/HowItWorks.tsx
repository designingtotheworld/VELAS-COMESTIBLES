import React from 'react';
import { BookOpen, Flame, Smile } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Elige tu receta',
      description: 'Selecciona entre nuestras exclusivas opciones dulces o saladas según la ocasión, ya sea una cena formal, un aperitivo casual o un postre romántico.',
      icon: BookOpen
    },
    {
      number: '02',
      title: 'Sigue el método',
      description: 'Derrite, mezcla y vierte con nuestro sistema paso a paso. Sin equipos industriales ni técnicas complejas; todo con utensilios caseros.',
      icon: Flame
    },
    {
      number: '03',
      title: 'Sirve y disfruta las reacciones',
      description: 'Coloca tu vela gourmet en la mesa, enciéndela frente a tus invitados y observa su asombro cuando descubran que es 100% comestible y deliciosa.',
      icon: Smile
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Metodología Simple
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4 text-white">
            ¿Cómo funciona en la práctica?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Tres simples pasos para convertirte en un maestro de las velas comestibles gourmet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-neutral-900/50 border border-amber-900/20 rounded-2xl p-8 relative flex flex-col items-text text-left hover:border-amber-500/40 transition-all"
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-amber-500/30">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium text-amber-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
