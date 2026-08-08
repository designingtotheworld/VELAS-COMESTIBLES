export interface RecipeItem {
  id: string;
  category: 'salada' | 'dulce';
  title: string;
  description: string;
  prepTime: string;
  image: string;
  highlights: string[];
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  value: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
