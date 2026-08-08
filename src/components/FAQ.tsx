import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "¿Necesito experiencia previa en la cocina o repostería?",
      answer: "Absolutamente no. El curso está diseñado desde cero para principiantes absolutos. Te llevamos de la mano con explicaciones claras, sin términos técnicos complejos y con ingredientes que encuentras en cualquier supermercado."
    },
    {
      question: "¿Cuándo y cómo recibo el acceso al curso?",
      answer: "El acceso es 100% inmediato después de completar tu inscripción. Recibirás un correo electrónico con tus datos de usuario para ingresar a nuestra plataforma privada en línea y ver las lecciones cuantas veces quieras."
    },
    {
      question: "¿Cuánto tiempo tendré acceso a los videos y bonos?",
      answer: "Tendrás acceso vitalicio (de por vida). Podrás ver los videos, descargar las guías en PDF y consultar las recetas en cualquier momento, desde tu celular, tablet o computadora."
    },
    {
      question: "¿Qué tipo de ingredientes y utensilios necesito?",
      answer: "No necesitas hornos industriales ni aparatos caros. Usaremos manteca, aceites vegetales, chocolate, quesos seleccionados, hierbas aromáticas y moldes caseros comunes que probablemente ya tienes en tu cocina."
    },
    {
      question: "¿Las velas se pueden comer realmente?",
      answer: "¡Sí, al 100%! Están formuladas con grasas comestibles de alta calidad, aceites naturales y mantecas grado alimenticio que se funden a una temperatura tibia perfecta para untar en pan, galletas o acompañar aperitivos sin ningún riesgo."
    },
    {
      question: "¿Qué pasa si el curso no cumple mis expectativas?",
      answer: "Tienes una garantía incondicional de 7 días. Si por cualquier motivo no quedas totalmente satisfecho o no logras sorprender a tus invitados, nos envías un correo y te devolvemos el 100% de tu dinero sin preguntas."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolvemos tus dudas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Todo lo que necesitas saber antes de dar el paso y unirte a nuestra comunidad.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-900/60 border border-amber-900/30 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-lg text-amber-100 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/60 mt-1 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
