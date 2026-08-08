import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles } from 'lucide-react';

export default function TopBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="bg-[#faf7f0] text-neutral-900 font-medium text-xs sm:text-sm py-2 px-4 border-b border-amber-500/30 overflow-hidden">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-bold tracking-wide uppercase whitespace-nowrap overflow-hidden">
            <div className="flex items-center gap-4 animate-[marquee_20s_linear_infinite]">
              <span className="flex items-center gap-1.5 text-amber-800">
                <Flame className="w-4 h-4 fill-amber-600 text-amber-600 animate-pulse" />
                🔥 SOLO POR HOY — ACCESO DE POR VIDA CON 60% DE DESCUENTO
              </span>
              <span className="text-amber-600">•</span>
              <span className="flex items-center gap-1.5 text-neutral-800">
                <Sparkles className="w-4 h-4 text-amber-600" />
                GARANTÍA DE 7 DÍAS
              </span>
              <span className="text-amber-600">•</span>
              <span className="flex items-center gap-1.5 text-amber-800">
                <Flame className="w-4 h-4 fill-amber-600 text-amber-600 animate-pulse" />
                🔥 SOLO POR HOY — ACCESO DE POR VIDA CON 60% DE DESCUENTO
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 px-3 py-0.5 rounded-full text-amber-900 font-semibold tracking-wider shrink-0 ml-4">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
      {/* Detail badge right below the moving ribbon */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black text-center text-xs sm:text-sm font-bold py-1.5 px-4 tracking-wide shadow-inner flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 fill-black text-black" />
        <span>⚡ ¡OFERTA ESPECIAL! Solo por hoy: 60% de descuento aplicado automáticamente en tu acceso</span>
        <Sparkles className="w-4 h-4 fill-black text-black" />
      </div>
    </div>
  );
}

