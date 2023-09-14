import ProdukData from "@/data/produk.json";
import { CardProduk } from "@/components/ui/Card";

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
}

// Create a ProductList component
const ProductList = () => {
  var products = ProdukData;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-4/6 md:mt-10">
        {products.map((product: Product, index: number) => (
          <CardProduk
            key={index}
            src={product.img}
            alt={`${product.title} Product Image`}
            href={`/${product.title}`}
            title={product.title}
            category={product.category}
            desc={product.desc}
          />
        ))}
    </div>
  );
};

export default ProductList;
