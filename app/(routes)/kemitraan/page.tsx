import { NavbarGeneral } from "@/components/ui/Navbar";
import React from "react";
import { GaleriSlider, ProfitSlider } from "@/components/ui/Slider";
import Cta, { CtaContact } from "@/components/ui/Cta";
import Image from "next/image";
import ProfitComponent from "@/components/ui/Profit";
import { CardMitra } from "@/components/ui/Card";
import Footer from "@/components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kemitraan | Smart Sinergy World",
  description: "Smart Sinergy World",
};

const page = () => {
  return (
    <div>
      <NavbarGeneral />
      <div className="md:container px-2 mt-10">
        <GaleriSlider />
        <p className="font-medium md:text-lg text-sm text-center my-10 py-16 tracking-wide leading-5 md:leading-8 border-y-2 border-primary mt-12">
          Program kemitraan Smart Sinergy World dibawah naungan PT Bandung Eco
          Sinergi Teknologi adalah suatu kesempatan yang diberikan kepada
          masyarakat untuk menjadi reseller produk melalui model penjualan
          langsung (Direct Selling). Perusahaan ini berkomitmen untuk membantu
          masyarakat memperoleh peluang usaha yang mengedepankan prinsip-prinsip
          syariah dan memberikan kesempatan kepada para mitra untuk
          mengembangkan bisnis mereka sendiri.
        </p>
        <Cta />
      </div>
      <div className="bg-container w-full">
        <div className="md:container px-2 text-center py-20 mt-10 flex flex-col gap-7 w-full">
          <h1 className="title text-white drop-shadow-lg">
            7 SUMBER POTENSI PENGHASILAN
          </h1>
          <h3 className="subtitle text-white w-11/12 mx-auto">
            KAMI MEMBERIKAN BEBERAPA SUMBER PENGHASILAN YANG MENGUNTUNGKAN UNTUK
            MENAWARKAN PELUANG PENGHASILAN YANG UNIK BAGI SETIAP ANGGOTA.
          </h3>
          <div className="justify-center items-center hidden lg:grid w-full h-full grid-cols-4 px-10">
            <div className="flex flex-col mx-auto">
              <Image
                className="mx-auto w-auto h-auto"
                src="icon/profit/icon-selling.svg"
                alt="Contact us on Whatsapp"
                width={0}
                height={0}
              />
              <h4 className="md:text-3xl text-xs mx-auto text-white font-semibold leading-3 md:leading-8 w-10/12">
                Selling <br />Profit
              </h4>
            </div>
            <div className="flex flex-col mx-auto">
              <Image
                className="mx-auto w-auto h-auto"
                src="icon/profit/icon-development.svg"
                alt="Development Profit"
                width={0}
                height={0}
              />
              <h4 className="md:text-3xl text-xs mx-auto text-white font-semibold leading-3 md:leading-8 w-10/12">
                Development <br />Profit
              </h4>
            </div>
            <div className="flex flex-col mx-auto">
              <Image
                className="mx-auto w-auto h-auto"
                src="icon/profit/icon-workflow.svg"
                alt="Daily Workflow Profit"
                width={0}
                height={0}
              />
              <h4 className="md:text-3xl text-xs mx-auto text-white font-semibold leading-3 md:leading-8 w-10/12">
                Daily <br />Workflow
              </h4>
            </div>
            <div className="flex flex-col mx-auto">
              <Image
                className="mx-auto w-auto h-auto"
                src="icon/profit/icon-rank.svg"
                alt="Group Rank Profit"
                width={0}
                height={0}
              />
              <h4 className="md:text-3xl text-xs mx-auto text-white font-semibold leading-3 md:leading-8 w-10/12">
                Group <br />Rank
              </h4>
            </div>
          </div>
          <div className="hidden lg:grid w-full h-full grid-cols-3 px-20">
            <ProfitComponent
              src="icon/profit/icon-ambassador.svg"
              alt="Ambassador Rank Profit"
              title="Ambassador Rank"
            />
            <ProfitComponent
              src="icon/profit/icon-sales.svg"
              alt="Monthly Sales Profit"
              title="Monthly Sales"
            />
            <ProfitComponent
              src="icon/profit/icon-leading.svg"
              alt="Leading Monthly Sales Profit"
              title="Leading Monthly Sales"
            />
          </div>
        </div>
      </div>
      <div className="relative md:container px-4 py-20">
        <div className="lg:px-72 absolute top-24 w-full grid grid-cols-3 justify-items-center items-center">
          <div className="lg:col-span-1 col-span-3 hidden lg:flex"></div>
          <div className="lg:col-span-2 col-span-3">
            <h3 className="text-2xl font-bold">Potensi Income Mitra SSW</h3>
          </div>
        </div>
        <div className="mt-20 lg:mt-0"></div>
        <ProfitSlider />
        <CtaContact />
      </div>
      <div className="bg-container py-20">
        <div className="md:container px-2">
          <h1 className="title text-white text-center">
            Keuntungan Bermitra bersama SSW
          </h1>
          <div className="flex flex-wrap mt-14 justify-center items-center gap-24">
            <div className="flex flex-col gap-3">
              <Image
                className="w-auto h-auto"
                src="/assets/illustration-discount.svg"
                sizes="(max-width: 768px) 100vw, 700px"
                alt="Discount Illustration"
                width={0}
                height={0}
              />
              <h3 className="text-2xl text-white text-center mx-auto w-8/12 font-semibold">
                Discount Repeat Order
              </h3>
            </div>
            <div className="flex flex-col gap-6 w-82">
              <Image
                className="w-auto h-auto"
                src="/assets/illustration-benefit.svg"
                alt="Beneficial Life Illustration"
                sizes="(max-width: 768px) 100vw, 700px"
                width={0}
                height={0}
              />
              <h3 className="text-2xl text-white text-center mx-auto w-8/12 font-semibold">
                Hidup Lebih Bermanfaat
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <Image
                className="w-auto h-auto"
                src="/assets/illustration-business.svg"
                alt="Business opportunities Illustration"
                sizes="(max-width: 768px) 100vw, 700px"
                width={0}
                height={0}
              />
              <h3 className="text-2xl text-white text-center mx-auto w-8/12 font-semibold ">
                Peluang Bisnis
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container px-2 py-10">
        <h1 className="title text-primary w-8/12 text-center mx-auto">
          Pilihan Paket Kemitraan dan Potensinya
        </h1>
        <div className="flex flex-wrap justify-center gap-12 gap-y-5 mt-10 md:pe-0 pe-8">
          <div className="md:w-82 w-72">
            <CardMitra
              title="basic"
              hak="1"
              produk="14"
              keuntungan="1.2"
              reward="1.6"
              harga="2.500.000"
            />
          </div>
          <div className="md:w-82 w-72">
            <CardMitra
              title="reguler"
              hak="3"
              produk="42"
              keuntungan="3.6"
              reward="5"
              harga="7.500.000"
            />
          </div>
          <div className="md:w-82 w-72">
            <CardMitra
              title="business"
              hak="7"
              produk="98"
              keuntungan="8.4"
              reward="15"
              harga="17.500.000"
            />
          </div>
          <div className="md:w-82 w-72">
            <CardMitra
              title="executives"
              hak="15"
              produk="210"
              keuntungan="18"
              reward="25"
              harga="37.500.000"
            />
          </div>
          <div className="md:w-82 w-72">
            <CardMitra
              title="priority"
              hak="31"
              produk="434"
              keuntungan="37.2"
              reward="51.7"
              harga="77.500.000"
            />
          </div>
        </div>
      </div>
      <div className="bg-container py-20">
        <div className="md:container px-2">
          <h1 className="title text-white text-center">
            Cara Mudah Menjalankan Bisnisnya
          </h1>
          <div className="flex flex-row flex-wrap mt-10 justify-center gap-10 gap-y-5 lg:gap-44">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div
                className="box bg-white w-56 h-56 flex items-center justify-center"
                style={{ boxShadow: "10px 10px 6px 1px #F8D65C" }}
              >
                <div className="text-8xl text-primary font-bold my-auto">P</div>
              </div>
              <h3 className="text-3xl text-center font-semibold text-white">
                PAKAI <br /> Produknya.
              </h3>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div
                className="box bg-[#F8D65C] w-56 h-56 flex items-center justify-center"
                style={{ boxShadow: "10px 10px 6px 1px #FFF" }}
              >
                <div className="text-8xl text-white font-bold my-auto">C</div>
              </div>
              <h3 className="text-3xl text-center font-semibold text-white">
                CERITA <br />
                pada orang lain.
              </h3>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div
                className="box bg-white w-56 h-56 flex items-center justify-center"
                style={{ boxShadow: "10px 10px 6px 1px #F8D65C" }}
              >
                <div className="text-8xl text-primary font-bold my-auto">A</div>
              </div>
              <h3 className="text-3xl text-center font-semibold text-white">
                ARAHKAN <br />
                ke pertemuan.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container px-2 py-20">
        <div className="flex flex-col gap-7">
          <h1 className="title text-primary text-center">
            Legalitas & Sertifikasi Syariah
          </h1>
          <h3 className="subtitle font-medium text-center mx-auto md:w-7/12 w-full tracking-wide">
            Smart Sinergy World di bawah naungan PT. Best sudah memiliki
            legalitas lengkap yang dapat dipercaya oleh mitra
          </h3>
          <div className="flex flex-row flex-wrap gap-5 justify-center">
            <div className="flex flex-col w-96 h-72">
              <div className="w-full text-white subtitle text-center bg-primary h-20 flex items-center justify-center">
                Sertifikasi syariah oleh
              </div>
              <div className="w-full h-full bg-white flex justify-center items-center">
                <Image
                  className="lg:w-auto lg:h-auto w-32 h-32"
                  src="/logo/logo-mui.png"
                  alt="Logo MUI"
                  sizes="(max-width: 768px) 100vw, 700px"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="flex flex-col w-96 h-72">
              <div className="w-full bg-primary h-20 flex justify-center items-center">
                <div className="text-white text-sm text-center w-11/12">
                  Resmi Berizin dengan Nomor 99/SIPT/SIUPL/04/2021- PSE
                </div>
              </div>
              <div className="w-full h-full bg-white flex justify-center items-center">
                <Image
                  className="lg:w-auto lg:h-auto w-32 h-32"
                  src="/logo/logo-bkpm.png"
                  alt="Logo BKPM"
                  sizes="(max-width: 768px) 100vw, 700px"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="flex flex-col w-96 h-72">
              <div className="w-full text-white subtitle text-center bg-primary h-20 flex items-center justify-center">
                Bagian dari
              </div>
              <div className="w-full h-full bg-white flex justify-center items-center">
                <Image
                  className="lg:w-auto lg:h-auto w-32 h-42"
                  src="/logo/logo-ap2li.png"
                  alt="Logo AP2LI"
                  sizes="(max-width: 768px) 100vw, 700px"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="mt-10"></div>
          <Cta />
          <CtaContact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
