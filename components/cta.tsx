import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="relative bg-primary w-full rounded-lg py-7 px-12">
      <Image
        className="absolute top-3 left-4"
        src="/assets/dotted.svg"
        alt=""
        width={80}
        height={80}
      />
      <div className="md:flex grid justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-white text-lg font-semibold">Tunggu Apa lagi?</p>
          <p className="text-white text-lg font-semibold">
            Ayo join kemitraan SSW sekarang!
          </p>
        </div>
        <Link className="my-auto" href="/formulir">
          <Button variant="secondary" className="px-12 py-6 w-full">
            Join Mitra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const CtaContact = () => {
  return (
    <div className="relative bg-[#9E8014] w-full rounded-lg py-7 px-12">
      <Image
        className="absolute top-3 left-4"
        src="/assets/dotted.svg"
        alt=""
        width={80}
        height={80}
      />
      <Image
        className="absolute top-3 left-7 md:block hidden"
        src="/assets/contact-illustration.svg"
        alt="Contact Illustration"
        width={95}
        height={95}
      />
      <div className="md:flex ms-0 lg:ms-24 grid justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-white text-lg font-semibold">
            Anda memiliki pertanyaan{" "}
          </p>
          <p className="text-white text-lg font-semibold">
            atau butuh penjelasan lebih lanjut?
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-base font-semibold tracking-wide">
            Hubungi kami di
          </p>
          <Link
            className="my-auto flex gap-3"
            target="_blank"
            href="https://wa.me/6282114038541?text=Halo%2C%20Saya%20Ingin%20Bertanya%20lebih%20lanjut%20mengenai%20kemitraan%20di%20SSW"
          >
            <Image
              className="my-auto"
              src="icon/icon-wa.svg"
              alt="Contact us on Whatsapp"
              width={22}
              height={22}
            />
            <p className="text-white text-base font-semibold tracking-wide">
              +62 821 1403 8541
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
