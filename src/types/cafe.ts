export type MenuItem = {
  id: string;
  name: string;
  subname?: string;
  desc: string;
  price: number;
  category: "brews" | "espresso" | "breakfast" | "plates" | "dessert";
  veg: boolean;
  vegan?: boolean;
  featured?: boolean;
  tastingNotes?: string[];
  image: string;
};

export type BrewMethod = {
  id: string;
  name: string;
  tagline: string;
  ratio: string;
  temp: string;
  grind: string;
  time: string;
  body: "Light & Silky" | "Medium & Complex" | "Full & Velvety" | "Syrupy & Bold";
  notes: string[];
  description: string;
  image: string;
};

export type Review = {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  quote: string;
  drinkOrdered: string;
  avatar: string;
  tag: "Coffee" | "Food" | "Ambiance";
};

export type SpacePhoto = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  span: string; // for bento grid
};
