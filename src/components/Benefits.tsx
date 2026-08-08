import React from 'react';
import { Sparkles, Utensils, Smile, Clock, Award, Repeat } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      icon: Sparkles,
      title: "Recetas creativas que no se esperan",
      description: "Sorprende a todos con una propuesta culinaria vanguardista que fusiona el diseño de velas con sabores gourmet irresistibles."
    },
    {
      icon: Utensils,
      title: "Ingredientes sencillos",
      description: "No necesitas buscar productos exóticos ni costosos. Todo lo consigues en tu supermercado local habitual."
    },
    {
      icon: Smile,
      title: "Ideal para principiantes",
      description: "Método ultra didáctico pensado para quienes nunca han elaborado velas ni recetas de este tipo. Cero frustraciones."
    },
    {
      icon: Clock,
      title: "Listas en unos 30 minutos",
      description: "Proceso rápido, limpio y optimizado para que puedas prepararlas incluso el mismo día de tu reunión o evento."
    },
    {
      icon: Award,
      title: "Un verdadero momento 'WOW'",
      description: "Imagina la cara de tus invitados cuando la vela se derrita suavemente sobre el pan caliente o los aperitivos."
    },
    {
      icon: Repeat,
      title: "Apréndelo una vez, úsalo siempre",
      description: "Una habilidad culinaria exclusiva que elevará todas tus cenas, celebraciones y regalos especiales para siempre."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            ¿Por qué este curso es diferente?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4 mb-4 text-white">
            Beneficios exclusivos que transformarán tus reuniones
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Todo lo que necesitas saber para dominar el arte de las velas comestibles gourmet sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-neutral-900/60 border border-amber-900/20 hover:border-amber-500/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-amber-100 mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
