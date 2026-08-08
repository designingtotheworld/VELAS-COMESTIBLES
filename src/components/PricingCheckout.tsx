import React, { useState } from 'react';
import { ShieldCheck, Check, Lock, Sparkles, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PricingCheckout() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.fullName) {
      alert('Por favor completa tu nombre y correo electrónico.');
      return;
    }
    setIsSuccess(true);
  };

  return (
    <section id="checkout" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-amber-900/30 relative">
      <div className="absolute inset-0 bg-radial from-amber-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Inversión Única con Descuento del 60%
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal mt-4 mb-4 text-white">
            Obtén Acceso Completo Hoy Mismo
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Empieza a crear velas comestibles gourmet en menos de 30 minutos.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-neutral-900 border border-amber-500 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl animate-fade-in">
            <div className="w-20 h-20 bg-amber-500/20 border border-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl font-medium text-amber-100 mb-4">
              ¡Felicitaciones, {formData.fullName || 'Futuro Chef'}!
            </h3>
            <p className="text-neutral-300 text-base mb-6 leading-relaxed">
              Tu acceso al curso <strong className="text-amber-400">Velas Comestibles Gourmet</strong> y los 4 bonos exclusivos ha sido procesado con éxito. Hemos enviado tus credenciales de acceso a <span className="text-amber-300 underline">{formData.email}</span>.
            </p>
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 text-xs text-neutral-400 mb-8">
              ID de Pedido: #VCG-{Math.floor(100000 + Math.random() * 900000)} • Acceso Vitalicio Garantizado
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-xl transition-all cursor-pointer"
            >
              Volver al inicio
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: What's included summary */}
            <div className="lg:col-span-5 bg-neutral-900/80 border border-amber-900/40 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block mb-4">
                  Pase Total VIP
                </span>
                <h3 className="font-serif text-2xl font-normal text-white mb-2">
                  Curso Velas Comestibles Gourmet
                </h3>
                <p className="text-neutral-400 text-sm mb-6">
                  Todo lo necesario para dominar el arte culinario de las velas comestibles dulces y saladas.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Acceso ilimitado de por vida a las 6 video-recetas oficiales.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Los 4 Bonos Exclusivos de regalo ($109 USD de valor).</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Actualizaciones futuras sin costo adicional.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Garantía de reembolso de 7 días sin preguntas.</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-800 pt-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-neutral-400 text-sm">Precio regular:</span>
                  <span className="text-neutral-500 line-through text-lg">$67 USD</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-white font-serif text-lg">Precio de hoy:</span>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">$15</span>
                    <span className="text-amber-400 text-sm ml-1">USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Checkout Form */}
            <div className="lg:col-span-7 bg-neutral-950 border border-amber-500/40 rounded-3xl p-8 shadow-2xl relative">
              <div className="absolute -top-3 right-8 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Ahorras 60% Hoy
              </div>

              <h3 className="font-serif text-2xl font-medium text-white mb-6">
                Completa tus datos de acceso
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Valenzuela"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                    Correo Electrónico (para enviar tu acceso)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Datos de Pago Simulado (Seguro SSL)</span>
                    <span className="text-amber-400 flex items-center gap-1 text-[11px]"><Lock className="w-3 h-3" /> 256-bit Encriptado</span>
                  </label>
                  <div className="space-y-3">
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-3.5 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        required
                        placeholder="Número de Tarjeta (4532 •••• •••• 8890)"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-500 rounded-xl pl-11 pr-4 py-3 text-white text-sm outline-none transition-colors font-mono"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        value={formData.expiry}
                        onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors text-center font-mono"
                      />
                      <input
                        type="text"
                        required
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-amber-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors text-center font-mono"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-4 rounded-xl shadow-lg shadow-amber-600/30 transition-all flex items-center justify-center gap-3 text-base cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Obtener Acceso Inmediato por $15 USD</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-400 text-center">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantía de devolución incondicional de 7 días. Si no te encanta, te devolvemos tu dinero.</span>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
