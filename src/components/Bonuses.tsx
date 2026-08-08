import React from 'react';
import { Gift, CheckCircle, Sparkles } from 'lucide-react';
import { BonusItem } from '../types';

export default function Bonuses() {
  const bonuses: BonusItem[] = [
    {
      id: '1',
      number: '01',
      title: 'Guía "Tu Primera Vela Perfecta"',
      description: 'Paso a paso ilustrado para evitar los errores más comunes de principiantes, asegurando que tu vela queme uniforme y luzca impecable.',
      value: '$25 USD',
      icon: 'sparkles'
    },
    {
      id: '2',
      number: '02',
      title: 'Lista de Compras Lista para Usar',
      description: 'Checklist imprimible con todos los ingredientes y utensilios exactos organizados por pasillo para que vayas al supermercado sin perder tiempo.',
      value: '$19 USD',
      icon: 'check'
    },
    {
      id: '3',
      number: '03',
      title: 'Guía de Presentación "Momento WOW"',
      description: 'Ideas de maridaje, tipos de pan, vajilla recomendada y el ritual exacto para encender la vela frente a tus invitados y deslumbrarlos.',
      value: '$30 USD',
      icon: 'gift'
    },
    {
      id: '4',
      number: '04',
      title: 'Recetas para Ocasiones Especiales',
      description: 'Edición especial con velas temáticas para Navidad, San Valentín, aniversarios y cenas íntimas que dejarán huella en la memoria de todos.',
      value: '$35 USD',
      icon: 'sparkles'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>Regalos Especiales por tiempo limitado</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            4 Bonos Exclusivos Incluidos Gratis
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Al inscribirte hoy al curso completo, obtendrás acceso inmediato a estos valiosos complementos sin costo adicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-neutral-900/70 border border-amber-900/30 hover:border-amber-500/50 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-400 font-serif font-bold text-xs px-4 py-2 rounded-bl-xl border-l border-b border-amber-500/30">
                VALORADO EN <span className="line-through">{bonus.value}</span> <strong className="text-amber-300">¡GRATIS!</strong>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-2xl font-bold text-amber-500">
                    Bono {bonus.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-amber-100 mb-3 group-hover:text-amber-400 transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {bonus.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-amber-400/90 pt-4 border-t border-neutral-800">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Incluido automáticamente en tu acceso de hoy</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
