interface Product {
  img: string;
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
