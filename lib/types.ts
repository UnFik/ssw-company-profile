interface Product {
  alt?: string;
  title: string;
  category: string;
  tagline?: string;
  priceRange?: {
    priceMin?: number;
    priceMax?: number;
  };
  desc: string;
  benefit?: string[];
  linkShopee?: string;
  content?: {
    type: string;
    info: string;
  }[];
  instruction?: string;
  dose?: string[] | string;
  identity?: {
    bpom?: string;
    halalMUI?: string;
  };
  linkYoutube?: string;
};

interface Seminar {
  id: number;
  name: string;
  lat?: number;
  long?: number;
  img: string;
  region: string;
  address?: string;
  is_active: number;
  time: string;
  price: string;
};
