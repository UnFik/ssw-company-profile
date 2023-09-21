"use client";

import { NavbarGeneral } from "@/components/ui/Navbar";
import SearchBar from "@/components/ui/SearchBar";
import { CheckboxWithText } from "@/components/ui/checkbox";
import { CardBestSeller, CardProduk } from "@/components/ui/Card";
import { useState, useCallback, useMemo, useEffect } from "react";
import produkData from "@/data/produk.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { buttonVariants } from "@/components/ui/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import CheckboxButton from "@/components/ui/CheckboxButton";


const ProdukPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categoryQuantities, setCategoryQuantities] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    const categoryCounts: Record<string, number> = {};

    produkData.forEach((product) => {

      if (!categoryCounts[product.category]) {
        categoryCounts[product.category] = 1;
      } else {
        categoryCounts[product.category]++;
      }
    });

    setCategoryQuantities(categoryCounts);
  }, []);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    [setSearchQuery]
  );

  const handleCategoryChange = useCallback(
    (category: string) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories((prevCategories) =>
          prevCategories.filter((c) => c !== category)
        );
      } else {
        setSelectedCategories((prevCategories) => [
          ...prevCategories,
          category,
        ]);
      }
    },
    [selectedCategories]
  );

  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    produkData.forEach((product) => {
      categories.add(product.category);
    });
    return Array.from(categories);
  }, []);

  const filteredProducts = useMemo(() => {
    return produkData.filter((product: Product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const isSelectedCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return matchesSearch && isSelectedCategory;
    });
  }, [searchQuery, selectedCategories]);

  return (
    <div>
      <NavbarGeneral />
      <div className="lg:hidden flex mb-7">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {availableCategories.map((category: string, index: number) => (
            <SwiperSlide key={index}>
              <CheckboxButton
                category={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pl-4 pe-3 lg:pl-32 md:pr-24">
        <div className="flex flex-row lg:mt-10 gap-5">
          <div className="lg:flex flex-col w-2/6 gap-10 hidden">
            <div className="search flex flex-col gap-3">
              <div className="text-2xl font-medium tracking-wide">
                Pencarian Produk
              </div>
              <SearchBar value={searchQuery} onChange={handleSearchChange} />
            </div>
            <div className="category flex flex-col gap-3">
              <div className="text-2xl font-medium tracking-wide">Kategori</div>
              <div className="flex flex-col gap-5">
                {availableCategories.map((category) => (
                  <CheckboxWithText
                    key={category}
                    category={category}
                    quantity={categoryQuantities[category] || 0}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                ))}
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
            {filteredProducts.map((product: Product, index: number) => (
              <div key={index}>
                <CardProduk
                  // {ecomaxx-&-econaxx.webp?updatedAt=1695267701439}
                  src={`https://ik.imagekit.io/8gkon2t3f/product/${product.title.toLowerCase()}.webp`}
                  alt={`${product.title} Product Image`}
                  href={`/${product.title.toLowerCase()}`}
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
