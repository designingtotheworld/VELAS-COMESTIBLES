import React from 'react';
import { Star, ArrowRight, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onScrollToPricing: () => void;
  onScrollToRecipes: () => void;
}

export default function Hero({ onScrollToPricing, onScrollToRecipes }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden border-b border-amber-900/30">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Top Decorative Banner Card matching the exact image reference */}
        <div className="w-full bg-[#c59b27] h-12 sm:h-16 rounded-xl mb-8 shadow-lg shadow-amber-900/20 flex items-center justify-center px-6">
          <span className="text-black font-serif font-bold text-sm sm:text-base tracking-widest uppercase">
            ARTE CULINARIO & INNOVACIÓN EN LA MESA
          </span>
        </div>

        {/* High-Impact Moment with Friends at Table Photo */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl mb-8 group">
          <img 
            src="https://i.imgur.com/vlnQa06.png" 
            alt="Momento con amigos sorprendidos en la mesa con velas comestibles" 
            className="w-full h-[320px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Social Proof & Avatars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-3 overflow-hidden">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-500 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Estudiante" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-500 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" alt="Estudiante" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-500 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Estudiante" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-500 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Estudiante" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-amber-500 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Estudiante" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-neutral-300 text-sm sm:text-base font-medium tracking-wide">
              más de <strong className="text-amber-400">1,540 personas</strong> ya aprendieron cómo hacerlas
            </span>
          </div>
        </div>

        {/* Main Headline matching the exact prompt */}
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
          <div className="relative group overflow-hidden rounded-2xl aspect-square border border-amber-500/30 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&auto=format&fit=crop&q=80" 
              alt="Vela Tomate y Albahaca" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-xs font-serif text-amber-200 font-medium">Tomate Seco y Albahaca</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square border border-amber-500/30 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80" 
              alt="Vela Manteca Avellanada" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-xs font-serif text-amber-200 font-medium">Manteca Avellanada y Miel</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square border border-amber-500/30 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&auto=format&fit=crop&q=80" 
              alt="Vela Chocolate Cremoso" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-xs font-serif text-amber-200 font-medium">Chocolate con Sal Marina</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-square border border-amber-500/30 shadow-xl">
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
