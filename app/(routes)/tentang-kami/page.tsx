import { Button } from "@/components/ui/button";
import { NavbarGeneral } from "@/components/navbar";
import Link from "next/link";
import React from "react";
import { Divide } from "lucide-react";

const TentangKamiPage = () => {
  return (
    <div>
      <NavbarGeneral />
      <div className="relative bg-center bg-no-repeat md:bg-fixed bg-cover">
        <div className="flex flex-col mx-auto w-9/12 gap-3">
          <h1 className="text-center title text-white border-b-4 border-white p-4 mx-auto">Tentang Kami</h1>
          <h3 className="subtitle text-white text-center">Smart Sinergy World adalah komunitas berbasis multi-level marketing yang didirikan di bawah naungan PT BEST. Mereka menawarkan peluang bisnis yang inovatif dan profitable, dengan sistem yang dapat diikuti oleh berbagai latar belakang. Dengan fokus pada semangat bersaudara, solusi, dan kesuksesan bersama, Smart Sinergy World berkomitmen untuk membantu anggotanya membangun warisan kesuksesan dalam industri MLM.</h3>
        </div>
      </div>
    </div>
  );
};

export default TentangKamiPage;
