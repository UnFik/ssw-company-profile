import { Button } from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
import { NavbarGeneral } from "@/components/ui/Navbar";
import Image from "next/image";
import React from "react";

const ProdukDetailPage = () => {
  return (
    <div>
      <NavbarGeneral />
      <div className="md:container px-2 mt-10">
        <div className="flex flex-col md:flex-row gap-12 pb-10 border-b-2 border-black">
          <div className="w-full h-full">
            <Image
              className="w-auto h-auto mx-auto"
              src="/assets/Econax.png"
              sizes="(max-width: 768px) 300vw, 100vw"
              alt="Econax"
              width={0}
              height={0}
            />
            <Button className="mt-5 w-full h-14 text-xl space-x-3">
              <div className="">Beli Sekarang</div>
              <span className="my-auto">
                <Image
                  src="/logo/logo-shopee.webp"
                  width={25}
                  height={25}
                  alt="Logo Shopee"
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 50vw, 100vw"
                  className="group-hover:opacity-70"
                />
              </span>
            </Button>
          </div>
          <div className="">
            <h1 className="title">Eco Racing</h1>
            <h2 className="subtitle">Bahan Bakar Aditif</h2>
            <div className="text-2xl mt-5">Rp 25.000 - Rp 250.000</div>
            <p className="text-lg mt-5 leading-8">
              Eco Racing adalah aditif bahan bakar untuk membantu mengoptimalkan
              pembakaran, formula awalnya berbentuk cairan namun dikristalkan
              (dipadatkan) sehingga memudahkan proses distribusi. Eco Racing
              telah melalui uji Dynotest, dan juga telah melalui uji emisi di
              Dishub kota Bandung dan Dishub kota - kota besar lainnya di
              Indonesia.
            </p>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap justify-around w-full gap-y-10">
          <div className="flex flex-col gap-y-10 me-auto">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Manfaat Eco Racing</h2>
              <ol className="list-decimal ms-4 space-y-1">
                <li>Membersihkan dan merawat mesin.</li>
                <li>Menyempurnakan pembakaran.</li>
                <li>Menghilangkan knocking.</li>
                <li>Meningkatkan akselerasi dan tenaga.</li>
                <li>Mengurangi emisi gas buang.</li>
              </ol>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Isi Dalam Kemasan</h2>
              <ol className="space-y-1">
                <li>1 box isi 10 pil. </li>
                <li>1 blister isi 50 tablet.</li>
                <li>1 botol besar isi 100 pil.</li>
                <li>1 botol kecil isi 30 pil..</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 me-auto">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Petunjuk Penggunaan</h2>
              <p className="">
                Masukkan pil/tablet ke dalam tangki kendaraan Anda sesuai dosis.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Dosis</h2>
              <ol className="space-y-1">
                <li>Mobil : 1 pil untuk 20 - 50 liter bensin.</li>
                <li>Motor : 1 tablet untuk 4 - 8 liter bensin.</li>
              </ol>
            </div>
          </div>
        </div>
        <h2 className="text-3xl text-center mt-20 font-semibold">Tentang Eco Racing</h2>
      </div>
      <div className="mt-10"></div>
      <Footer />
    </div>
  );
};

export default ProdukDetailPage;
