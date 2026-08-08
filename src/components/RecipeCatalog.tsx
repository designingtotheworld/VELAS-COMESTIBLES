import React, { useState } from 'react';
import { RecipeItem } from '../types';
import { Clock, Check, Sparkles, ChefHat } from 'lucide-react';

export default function RecipeCatalog() {
  const [activeTab, setActiveTab] = useState<'todas' | 'salada' | 'dulce'>('todas');

  const recipes: RecipeItem[] = [
    {
      id: '1',
      category: 'salada',
      title: 'Tomate Seco y Albahaca',
      description: 'Una vela aromática y salada perfecta para untar en pan rústico o focaccia tibia. Infusionada con aceite de oliva virgen extra y albahaca fresca.',
      prepTime: '25 mins',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80',
      highlights: ['Ideal para picadas y entradas', 'Textura cremosa al derretirse', 'Aromas mediterráneos']
    },
    {
      id: '2',
      category: 'salada',
      title: 'Manteca de Hierbas Aromáticas',
      description: 'Mantequilla clarificada de alta calidad con romero, tomillo, ajo confitado y sal marina en escamas. El acompañamiento definitivo para carnes y panes.',
      prepTime: '20 mins',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&auto=format&fit=crop&q=80',
      highlights: ['Sabor profundo y herbáceo', 'Presentación elegante', 'Ingredientes 100% naturales']
    },
    {
      id: '3',
      category: 'salada',
      title: 'Queso Crema con Hierbas y Frutos Secos',
      description: 'Una base cremosa de quesos seleccionados combinados con nueces tostadas y finas hierbas. Se derrite lentamente liberando notas crujientes.',
      prepTime: '30 mins',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&auto=format&fit=crop&q=80',
      highlights: ['Contraste de texturas único', 'Perfecto con vino tinto', 'Sorprende a los paladares exigentes']
    },
    {
      id: '4',
      category: 'dulce',
      title: 'Manteca Avellanada y Miel',
      description: 'Mantequilla noisette con notas a caramelo y avellana, endulzada con miel orgánica pura. Una delicia cálida para panqueques, tostadas o brioche.',
      prepTime: '30 mins',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80',
      highlights: ['Notas a nuez tostada', 'Dulzura equilibrada', 'Perfecto para desayunos gourmet']
    },
    {
      id: '5',
      category: 'dulce',
      title: 'Chocolate Cremoso con Sal Marina',
      description: 'Vela de chocolate oscuro belga con un toque de sal marina de Maldon. Al encenderse, se funde en una salsa tibia perfecta para frutas y postres.',
      prepTime: '35 mins',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&auto=format&fit=crop&q=80',
      highlights: ['Cacao de alta pureza', 'Contraste dulce-salado adictivo', 'Ideal para citas románticas']
    },
    {
      id: '6',
      category: 'dulce',
      title: 'Delicia de Coco Tropical',
      description: 'Infusión cremosa de manteca de cacao, aceite de coco virgen y vainilla natural. Aroma envolvente que transporta a un paraíso tropical.',
      prepTime: '25 mins',
      image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=600&auto=format&fit=crop&q=80',
      highlights: ['Aroma exótico irresistible', 'Textura sedosa', 'Apto para ocasiones especiales']
    }
  ];

  const filteredRecipes = activeTab === 'todas' 
    ? recipes 
    : recipes.filter(r => r.category === activeTab);

  return (
    <section id="recetas" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-500 font-semibold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Catálogo Oficial de Recetas
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal mt-4 mb-4 text-white">
            Delicias Saladas y Dulces que Aprenderás
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Cada receta ha sido diseñada para equilibrar estética de vela, combustión limpia y sabor gourmet superior.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('todas')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'todas'
                  ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              Todas las Recetas (6)
            </button>
            <button
              onClick={() => setActiveTab('salada')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'salada'
                  ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              🧀 Saladas (3)
            </button>
            <button
              onClick={() => setActiveTab('dulce')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'dulce'
                  ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              🍫 Dulces (3)
            </button>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-neutral-900/80 border border-amber-900/30 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col group shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                    recipe.category === 'salada' ? 'bg-emerald-500 text-black' : 'bg-amber-500 text-black'
                  }`}>
                    {recipe.category === 'salada' ? 'Salada' : 'Dulce'}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-amber-300 font-medium border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{recipe.prepTime}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-neutral-800 pt-4">
                  {recipe.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
