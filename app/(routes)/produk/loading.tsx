import { CardBestSellerSkeleton, CardProdukSkeleton } from "@/components/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProductPageLoading = () => {
  return (
    <div className="pl-4 pe-3 lg:pl-32 md:pr-24 mb-10">
      <div className="flex flex-row lg:mt-10 gap-5 items-start">
        <div className="lg:flex flex-col w-2/6 gap-10 hidden sticky h-full">
          <div className="search flex flex-col gap-3">
            <div className="text-2xl font-medium tracking-wide">
              Pencarian Produk
            </div>
            <Skeleton className="w-[400px] h-[20px] rounded-full" />
          </div>
          <div className="category flex flex-col gap-3">
            <div className="text-2xl font-medium tracking-wide">Kategori</div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row space-x-6">
                <Skeleton className="w-[20px] h-[20px] rounded-full" />
                <Skeleton className="w-[200px] h-[20px] rounded-full" />
              </div>
              <div className="flex flex-row space-x-6">
                <Skeleton className="w-[20px] h-[20px] rounded-full" />
                <Skeleton className="w-[200px] h-[20px] rounded-full" />
              </div>
              <div className="flex flex-row space-x-6">
                <Skeleton className="w-[20px] h-[20px] rounded-full" />
                <Skeleton className="w-[200px] h-[20px] rounded-full" />
              </div>
            </div>
          </div>
          <div className="best-seller flex flex-col gap-5">
            <div className="text-2xl font-medium tracking-wide">
              Best Seller
            </div>
            <div className="flex flex-col gap-5 w-96">
              <CardBestSellerSkeleton />
              <CardBestSellerSkeleton />
              <CardBestSellerSkeleton />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-4/6 md:mt-10">
          <CardProdukSkeleton />
          <CardProdukSkeleton />
          <CardProdukSkeleton />
          <CardProdukSkeleton />
          <CardProdukSkeleton />
          <CardProdukSkeleton />
        </div>
      </div>
    </div>
  );
};

export default ProductPageLoading;
