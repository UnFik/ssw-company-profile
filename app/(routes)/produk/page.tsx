import { NavbarGeneral } from "@/components/ui/Navbar";
import SearchBar from "@/components/ui/SearchBar";
import { CheckboxWithText } from "@/components/ui/checkbox";
import { CardBestSeller, CardProduk, CardSeminar } from "@/components/ui/Card";
import React from "react";
import TabsButton from "@/components/ui/Swiper";
import produkData from "@/data/produk.json";
import ProductList from "./components/ProductList";

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

const ProdukPage = () => {
  var products = produkData;

  return (
    <div>
      <NavbarGeneral />
      <div className="lg:hidden flex mb-7">
        <TabsButton />
      </div>
      <div className="pl-4 pe-3 lg:pl-32 md:pr-24">
        <div className="flex flex-row lg:mt-10 gap-5">
          <div className="lg:flex flex-col w-2/6 gap-10 hidden">
            <div className="search flex flex-col gap-3">
              <div className="text-2xl font-medium tracking-wide">
                Pencarian Produk
              </div>
              <SearchBar />
            </div>
            <div className="category flex flex-col gap-3">
              <div className="text-2xl font-medium tracking-wide">Kategori</div>
              <div className="flex flex-col gap-5">
                {["Kesehatan", "Kecantikan", "Kendaraan", "Pupuk"].map(
                  (category) => (
                    <CheckboxWithText
                      key={category}
                      category={category}
                      quantity={100}
                    />
                  )
                )}
              </div>
            </div>
            <div className="best-seller flex flex-col gap-5">
              <div className="text-2xl font-medium tracking-wide">
                Best Seller
              </div>
              <div className="flex flex-col gap-5 w-96">
                <CardBestSeller />
                <CardBestSeller />
                <CardBestSeller />
                <CardBestSeller />
              </div>
            </div>
          </div>
          {/* <ProductList /> */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-4/6 md:mt-10">
            {products.map((product: Product, index: number) => (
              <div key={index}>
                <CardProduk
                  src={product.img}
                  alt={`${product.title} Product Image`}
                  href={`/${product.title}`}
                  title={product.title}
                  category={product.category}
                  desc={product.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukPage;
