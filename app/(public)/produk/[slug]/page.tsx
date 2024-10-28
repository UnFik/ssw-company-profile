"use client";

import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { NavbarGeneral } from "@/components/navbar";
import Image from "next/image";
import React from "react";
import produkData from "@/data/produk.json";

import { usePathname } from "next/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProdukDetailPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((segment) => segment)[1];
  const product = produkData.find((p) => p.title.toLocaleLowerCase() === slug);

  // console.log(product?.category);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <div className="md:container px-2 mt-10">
        <div className="flex flex-col md:flex-row gap-12 pb-10 border-b-2 border-black">
          <div className="lg:w-7/12 w-full h-auto mx-auto">
            <AspectRatio ratio={1 / 1}>
              <Image
                className="w-full h-full mx-auto object-cover relative"
                src={`https://ik.imagekit.io/8gkon2t3f/product/${product.title.toLowerCase()}.webp`}
                sizes="(max-width: 768px) 100vw, 700px"
                alt={`${product.title.replace(/-/g, " ")} Product Image`}
                width={200}
                height={200}
                priority
              />
            </AspectRatio>
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
          <div className="w-full">
            <h1 className="title">{product.title.replace(/-/g, " ")}</h1>
            <h2 className="subtitle">{product.tagline}</h2>
            <div className="text-2xl mt-5">
              Rp {product.priceRange.priceMin} - Rp{" "}
              {product.priceRange.priceMax}
            </div>
            <p className="text-lg mt-5 leading-8">{product.desc}</p>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap justify-around w-full gap-y-10">
          <div className="flex flex-col gap-y-10 me-auto">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">
                Manfaat {product.title.replace(/-/g, " ")}
              </h2>
              <ol className="list-decimal ms-4 space-y-1">
                {product.benefit.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ol>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Isi Dalam Kemasan</h2>
              <ol className="space-y-1">
                {product.content.map((item, index) => (
                  <li key={index}>
                    {item.type}: {item.info}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 me-auto">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold ">
                {product.category != "Otomotif"
                  ? "Aturan Konsumsi"
                  : "Petunjuk Penggunaan"}
              </h2>
              <p className="w-full">{product.instruction}</p>
            </div>
            {product.dose != null ? (
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Dosis</h2>
                <ol className="space-y-1">
                  {Array.isArray(product.dose) ? (
                    product.dose.map((dose, index) => (
                      <li key={index}>{dose}</li>
                    ))
                  ) : (
                    <li>{product.dose}</li>
                  )}
                </ol>
              </div>
            ) : (
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">
                  {product.identity.bpom}
                </h2>
                <h2 className="text-xl font-semibold">
                  {product.identity.halalMUI}
                </h2>
                <h2 className="text-xl font-semibold">
                  {product.identity.izinEdar}
                </h2>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-3xl text-center mt-20 font-semibold">
          Tentang {product.title.replace(/-/g, " ")}
        </h2>
      </div>
      <div className="mt-10"></div>
    </div>
  );
};

export default ProdukDetailPage;
