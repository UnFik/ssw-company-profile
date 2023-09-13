import { NavbarGeneral } from "@/components/ui/Navbar";
import SearchBar from "@/components/ui/SearchBar";
import { CheckboxWithText } from "@/components/ui/checkbox";
import { CardBestSeller, CardProduk, CardSeminar } from "@/components/ui/Card";
import React from "react";
import TabsButton from "@/components/ui/Swiper";
import produkData from "@/data/produk.json";

interface ProdukProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  desc: string;
}

const ProdukPage = () => {
  var produ = produkData;

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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-4/6 md:mt-10">
            <div className="place-self-center  ">
              {/* produkData.map((produk: ProdukProps, index: number) => () */}
              
              <CardProduk
                src="/assets/produk/ecoracing.png"
                alt="Eco Racing"
                href="ecoracing"
                title="Eco Racing"
                category="Otomotif"
                desc="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
              />
            </div>
            <div className="place-self-center  ">
              <CardProduk
                src="/assets/produk/ecoracing.png"
                alt="Eco Racing"
                href="ecoracing"
                title="Eco Racing"
                category="Otomotif"
                desc="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
              />
            </div>
            <div className="place-self-center  ">
              <CardProduk
                src="/assets/produk/ecoracing.png"
                alt="Eco Racing"
                href="ecoracing"
                title="Eco Racing"
                category="Otomotif"
                desc="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
              />
            </div>
            <div className="place-self-center  ">
              <CardProduk
                src="/assets/produk/ecoracing.png"
                alt="Eco Racing"
                href="ecoracing"
                title="Eco Racing"
                category="Otomotif"
                desc="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukPage;
