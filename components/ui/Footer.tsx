import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import { buttonVariants } from "./Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-footer pt-10">
      <div className="md:container px-1 flex flex-col">
        <div className="head-footer grid grid-cols-12 align-items content-center justify-between w-full">
          <div className="md:col-span-1 col-span-12 mx-auto">
            <Logo width={109} height={106} />
          </div>
          <div className="col-span-2 text-7xl font-bold text-white my-auto hidden md:flex">
            SSW
          </div>
          <div className="md:col-span-2"></div>
          <div className="flex justify-end gap-5 h-full md:col-span-7 col-span-12 px-5 my-auto">
            <div className="subtitle text-white my-auto">
              Satu langkah lagi menuju kebebasan finansial
            </div>
            <Link
              href=""
              className={`${buttonVariants({
                variant: "secondary",
              })} w-48 py-7 my-auto`}
            >
              Join Mitra
            </Link>
          </div>
        </div>
        <div className="content-footer grid grid-cols-12 justify-start lg:justify-items-center w-full gap-5 lg:gap-24 mt-5 ps-5 lg:ps-0 py-10 border-y-2 md:border-y-4 border-white">
          <div className="link flex flex-col col-span-12 lg:col-span-3 gap-5 items-start">
            <div className="text-2xl text-white font-bold mt-5 mb-3">
              Link Terkait
            </div>
            <Link href="" className="subtitle text-white hover:text-gray-200">
              Tentang Kami
            </Link>
            <Link href="" className="subtitle text-white hover:text-gray-200">
              Kebijakan Privasi
            </Link>
            <Link href="" className="subtitle text-white hover:text-gray-200">
              Ketentuan Pengguna
            </Link>
          </div>
          <div className="office flex flex-col col-span-12 lg:col-span-3 gap-5">
            <div className="text-2xl text-white font-bold mt-5 mb-3">
              Office Distributor
            </div>
            <div className="flex gap-3">
              <Image
                className="mb-auto hover:opacity-80"
                src="/icon/icon-location.svg"
                alt="SSW Distributor Location"
                width={21}
                height={29}
              />
              <Link href="" className="subtitle text-white hover:text-gray-200">
                Premier Estate 2 Blok H6, Jatiwarna, Pondok Melati, Bekasi, Jawa
                Barat 17415
              </Link>
            </div>
          </div>
          <div className="contact flex flex-col col-span-12 lg:col-span-3 gap-5">
            <div className="text-2xl text-white font-bold mt-5 mb-3">
              Contact
            </div>
            <div className="flex gap-3">
              <Image
                className="my-auto hover:opacity-80"
                src="/icon/icon-wa.svg"
                alt="Contact us on Whatsapp"
                width={32}
                height={32}
              />
              <Link
                href=""
                className="my-auto subtitle text-white hover:text-gray-200"
              >
                +62 811 1033 358
              </Link>
            </div>
            <div className="flex gap-4">
              <Image
                className="my-auto hover:opacity-80"
                src="/icon/icon-phone.svg"
                alt="Contact by Phone"
                width={31}
                height={31}
              />
              <Link
                href=""
                className="my-auto subtitle text-white hover:text-gray-200"
              >
                +62 811 1033 358
              </Link>
            </div>
          </div>
          <div className="contact flex flex-col col-span-12 lg:col-span-3 gap-5 lg:items-end">
            <div className="text-2xl text-white font-bold mt-5 mb-3">
              Follow us at
            </div>
            <div className="flex gap-7">
              <Link href="">
                <div className="my-auto  hover:opacity-80">
                  <Image
                    src="/icon/icon-youtube.svg"
                    alt="Watch us on YouTube"
                    width={44}
                    height={44}
                  />
                </div>
              </Link>
              <Link href="">
                <div className="my-auto hover:opacity-80">
                  <Image
                    src="/icon/icon-facebook.svg"
                    alt="Join our comunity on Facebook"
                    width={32}
                    height={32}
                  />
                </div>
              </Link>
              <Link href="">
                <div className="my-auto hover:opacity-80">
                  <Image
                    src="/icon/icon-ig.svg"
                    alt="Follow us on Instagram"
                    width={32}
                    height={32}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright text-lg text-white text-center my-8">
          Copyright © 2023 SMART SINERGY WORLD . All rights reserved | PT
          BANDUNG ECO SINERGY TECHNOLOGY
        </div>
      </div>
    </div>
  );
};

export default Footer;
