/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import RecipeCatalog from './components/RecipeCatalog';
import HowItWorks from './components/HowItWorks';
import ObjectionHandling from './components/ObjectionHandling';
import Bonuses from './components/Bonuses';
import PricingCheckout from './components/PricingCheckout';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      <TopBanner />
      <Hero
        onScrollToPricing={() => scrollToSection('checkout')}
        onScrollToRecipes={() => scrollToSection('recetas')}
      />
      <Benefits />
      <RecipeCatalog />
      <HowItWorks />
      <ObjectionHandling />
      <Bonuses />
      <PricingCheckout />
      <FAQ />
      <Footer />
    </div>
  );
}

