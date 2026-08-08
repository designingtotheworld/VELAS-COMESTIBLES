import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Sparkles, Flame, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onScrollToPricing: () => void;
  onScrollToRecipes: () => void;
}

const carouselImages = [
  { url: 'https://i.imgur.com/FFgMOc0.png', title: 'Velas Gourmet Artesanales' },
  { url: 'https://i.imgur.com/1KUAoy1.png', title: 'Creaciones Exclusivas' },
  { url: 'https://i.imgur.com/g26mdyC.png', title: 'Experiencia Culinaria Única' },
  { url: 'https://i.imgur.com/gCRpHB2.png', title: 'Presentación Profesional' },
  { url: 'https://i.imgur.com/8zQSizA.png', title: 'Sabores Dulces y Salados' },
  { url: 'https://i.imgur.com/sjwT7Y7.png', title: 'Detalles que Sorprenden' },
  { url: 'https://i.imgur.com/vl3Mkcq.png', title: 'El Arte de las Velas Comestibles' },
];

export default function Hero({ onScrollToPricing, onScrollToRecipes }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden border-b border-amber-900/30">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Auto-playing Carousel */}
        <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-3 group bg-neutral-900 aspect-[16/9] max-h-[340px]">
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-600 text-white hover:text-black p-2.5 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-600 text-white hover:text-black p-2.5 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'w-6 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Small caption below carousel */}
        <div className="mb-8">
          <span className="inline-block bg-neutral-900 text-amber-300 font-serif text-xs sm:text-sm px-4 py-1.5 rounded-full border border-amber-500/30 shadow-md">
            ✨ {carouselImages[currentIndex].title}
          </span>
        </div>

        {/* Main Headline right below first photo/carousel */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.2] mb-6 tracking-tight">
          Crea Velas Comestibles Gourmet <br className="hidden sm:inline" />
          y sorprende a tus invitados{' '}
          <span className="block mt-2 font-serif italic text-amber-400 gold-gradient-text">
            con una mesa original e inolvidable.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-300 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Aprende a hacer Velas Comestibles Gourmet dulces y saladas con ingredientes sencillos y un método paso a paso muy fácil.
        </p>



        {/* Full width image FoyEusV */}
        <div className="w-full mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://i.imgur.com/FoyEusV.png" 
            alt="Vela comestible gourmet destacada" 
            className="w-full h-[320px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToPricing}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-600/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-black" />
            <span>Quiero Acceso Inmediato ($15 USD)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={onScrollToRecipes}
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-amber-500/30 hover:border-amber-500/60 font-medium px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <span>Ver Recetas y Contenido</span>
          </button>
        </div>

        {/* Trust Badges under CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-400 mb-12">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Acceso inmediato de por vida
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Garantía de satisfacción de 7 días
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Compatible con cualquier nivel
          </span>
        </div>

        {/* Immediate High-Impact Photo Showcase to Grab Attention */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-amber-900/40">
          <div className="relative group overflow-hidden rounded-2xl aspect-square shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&auto=format&fit=crop&q=80" 
              alt="Vela Tomate y Albahaca" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-xs font-serif text-amber-200 font-medium">Tomate Seco y Albahaca</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80" 
              alt="Vela Manteca Avellanada" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-xs font-serif text-amber-200 font-medium">Manteca Avellanada y Miel</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&auto=format&fit=crop&q=80" 
              alt="Vela Chocolate Cremoso" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-xs font-serif text-amber-200 font-medium">Chocolate con Sal Marina</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=80" 
              alt="Vela Hierbas Aromáticas" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-xs font-serif text-amber-200 font-medium">Manteca de Hierbas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
