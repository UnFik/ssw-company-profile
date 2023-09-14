"use client";

import React, { forwardRef } from "react";
import Slider from "react-slick";
import { TestiCard } from "./Card";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AspectRatio } from "./Aspect-ratio";
import placeholder from "../../public/assets/169.png";
import { buttonVariants } from "./Button";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <Image
      src="/icon/left-arrow.svg"
      alt="prev-arrow"
      width={200}
      height={200}
      onClick={onClick}
      className="w-7 absolute right-0 -bottom-20 cursor-pointer hover:text-black"
      style={{ ...style, display: "block", transform: "rotate(180deg)" }}
    />
  );
}

export function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <Image
      src="/icon/left-arrow.svg"
      alt="prev-arrow"
      width={200}
      height={200}
      onClick={onClick}
      className="w-7 absolute right-20 -bottom-20 hover:text-gray-100 cursor-pointer"
      style={{ ...style, display: "block" }}
    />
  );
}

export const TestiSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <TestiCard
            src="/assets/Econax.png"
            alt="Seminar SSW Griya Wulansari"
            title="Eco - Naxx"
            desc="Kesehatan"
            content="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
          />
        </div>
        <div>
          <TestiCard
            src="/assets/Econax.png"
            alt="Seminar SSW Griya Wulansari"
            title="Eco - Naxx"
            desc="Kesehatan"
            content="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
          />
        </div>
        <div>
          <TestiCard
            src="/assets/Econax.png"
            alt="Seminar SSW Griya Wulansari"
            title="Eco - Naxx"
            desc="Kesehatan"
            content="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
          />
        </div>
        <div>
          <TestiCard
            src="/assets/Econax.png"
            alt="Seminar SSW Griya Wulansari"
            title="Eco - Naxx"
            desc="Kesehatan"
            content="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
          />
        </div>
        <div>
          <TestiCard
            src="/assets/Econax.png"
            alt="Seminar SSW Griya Wulansari"
            title="Eco - Naxx"
            desc="Kesehatan"
            content="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
          />
        </div>
        <div>
          <TestiCard
            src="/assets/Econax.png"
            alt="Seminar SSW Griya Wulansari"
            title="Eco - Naxx"
            desc="Kesehatan"
            content="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
          />
        </div>
        <div>
          <TestiCard
            src="/assets/Econax.png"
            alt="Seminar SSW Griya Wulansari"
            title="Eco - Naxx"
            desc="Kesehatan"
            content="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
          />
        </div>
        <div>
          <TestiCard
            src="/assets/Econax.png"
            alt="Seminar SSW Griya Wulansari"
            title="Eco - Naxx"
            desc="Kesehatan"
            content="Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng) untuk
          meningkatkan stamina, hormon, kesuburan, keperkasaan & kesehatan pria
          maupun wanita."
          />
        </div>
      </Slider>
    </div>
  );
};

export function ProfitNextArrow(props: ArrowProps) {
  const { style, onClick } = props;
  return (
    <Image
      src="/icon/profit-arrow.svg"
      alt="prev-arrow"
      width={200}
      height={200}
      onClick={onClick}
      className="w-14 absolute right-5 top-[35%] z-19"
      style={{ ...style, display: "block", transform: "rotate(180deg)" }}
    />
  );
}

export function ProfitPrevArrow(props: ArrowProps) {
  const { style, onClick } = props;
  return (
    <Image
      src="/icon/profit-arrow.svg"
      alt="prev-arrow"
      width={200}
      height={200}
      onClick={onClick}
      className="w-14 absolute left-[39%] top-[35%] z-20"
      style={{ ...style, display: "block" }}
    />
  );
}

export const ProfitSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "ease",
    nextArrow: <ProfitNextArrow />,
    prevArrow: <ProfitPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="lg:h-72">
          <div className="w-full grid grid-cols-3 justify-items-center items-center gap-5">
            <Image
              className="lg:col-span-1 col-span-3"
              src="/icon/profit/illustration-profit1.svg"
              alt="Selling Illustration"
              sizes="(max-width: 768px) 100vw, 700px"
              width={300}
              height={300}
            />
            <div className="lg:col-span-2 col-span-3 flex gap-3 flex-col mb-9 mx-auto">
              <h5 className="text-primary font-bold text-base text-center">
                Keuntungan Penjualan Langsung (Selling Profit)
              </h5>
              <p className="text-center text-xs md:w-7/12 w-full mx-auto font-semibold">
                Setiap terjadi pembelian paket First Order maka komisinya 16%.
                Misalnya terjual paket Luxury Cash Basic 2,5 juta komisi Rp.
                400.000,- dst
              </p>
            </div>
          </div>
        </div>
        <div className="lg:h-72">
          <div className="w-full grid grid-cols-3 justify-items-center items-center gap-5">
            <Image
              className="lg:col-span-1 col-span-3"
              src="/icon/profit/illustration-profit2.svg"
              alt="Selling Illustration"
              sizes="(max-width: 768px) 100vw, 700px"
              width={300}
              height={300}
            />
            <div className="lg:col-span-2 col-span-3 flex gap-3 flex-col mb-9 mx-auto">
              <h5 className="text-primary font-bold text-base text-center">
                Bonus Pengembangan (Development Profit)
              </h5>
              <p className="text-center text-xs md:w-7/12 w-full mx-auto font-semibold">
                Bonus Pengembangan adalah bonus yang Anda dapatkan dari pasangan
                poin (Pair) Produk FO di grup kiri & kanan. Bonus Rp.
                50.000/pasang dibayar mingguan. POTENSI PERHARI TANPA BATAS
                (UNLIMITED) 12 pasang pertama x Rp. 50.000 = Rp. 600.000,-
              </p>
            </div>
          </div>
        </div>
        <div className="lg:h-72">
          <div className="w-full grid grid-cols-3 justify-items-center items-center gap-5">
            <Image
              className="lg:col-span-1 col-span-3"
              src="/icon/profit/illustration-profit3.svg"
              alt="Selling Illustration"
              sizes="(max-width: 768px) 100vw, 700px"
              width={300}
              height={300}
            />
            <div className="lg:col-span-2 col-span-3 flex gap-3 flex-col mb-9 mx-auto">
              <h5 className="text-primary font-bold text-base text-center">
                Bonus Unlimited Flush Out (Pool Sharing)
              </h5>
              <p className="text-center text-xs md:w-7/12 w-full mx-auto font-semibold">
                BONUS PASANGAN DIBAYAR TANPA BATAS FLUSH OUT !! Yaitu bonus yang
                diberikan kepada Mitra yang memiliki lebih dari 12 pasang
                aktivitas Lisensi per-hari senilai 10.000 per-pasang Sehingga
                seluruh pasangan dibayarkan, tidak ada pasangan yang hilang
              </p>
            </div>
          </div>
        </div>
        <div className="lg:h-72">
          <div className="w-full grid grid-cols-3 justify-items-center items-center gap-5">
            <Image
              className="lg:col-span-1 col-span-3"
              src="/icon/profit/illustration-profit4.svg"
              alt="Selling Illustration"
              sizes="(max-width: 768px) 100vw, 700px"
              width={300}
              height={300}
            />
            <div className="lg:col-span-2 col-span-3 flex gap-3 flex-col mb-9 mx-auto">
              <h5 className="text-primary font-bold text-base text-center">
                Reward Prestasi (Group Rank)
              </h5>
              <p className="text-center text-xs md:w-7/12 w-full mx-auto font-semibold">
                Bonus Prestasi diperoleh Ketika seorang member mencapai omset
                grup (POIN DIAKUMULASI DARI PAKET FIRST ORDER)
              </p>
            </div>
          </div>
        </div>
        <div className="lg:h-72">
          <div className="w-full grid grid-cols-3 justify-items-center items-center gap-5">
            <Image
              className="lg:col-span-1 col-span-3"
              src="/icon/profit/illustration-profit5.svg"
              alt="Selling Illustration"
              sizes="(max-width: 768px) 100vw, 700px"
              width={300}
              height={300}
            />
            <div className="lg:col-span-2 col-span-3 flex gap-3 flex-col mb-9 mx-auto">
              <h5 className="text-primary font-bold text-base text-center">
                Royalti Prestasi (Ambassador Rank)
              </h5>
              <p className="text-center text-xs md:w-7/12 w-full mx-auto font-semibold">
                Royalti tambahan yang diberikan kepada mitra yang telah meraih
                jenjang prestasi, Bonus dihitung dari setiap pembelanjaan
                downline dijalur generasinya yang telah mencapai pembelanjaan 2
                juta. Royalti berlaku tanpa batasan generasi.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:h-72">
          <div className="w-full grid grid-cols-3 justify-items-center items-center gap-5">
            <Image
              className="lg:col-span-1 col-span-3"
              src="/icon/profit/illustration-profit5.svg"
              alt="Selling Illustration"
              sizes="(max-width: 768px) 100vw, 700px"
              width={300}
              height={300}
            />
            <div className="lg:col-span-2 col-span-3 flex gap-3 flex-col mb-9 mx-auto">
              <h5 className="text-primary font-bold text-base text-center">
                Royalti Prestasi (Ambassador Rank)
              </h5>
              <p className="text-center text-xs md:w-7/12 w-full mx-auto font-semibold">
                Royalti tambahan yang diberikan kepada mitra yang telah meraih
                jenjang prestasi, Bonus dihitung dari setiap pembelanjaan
                downline dijalur generasinya yang telah mencapai pembelanjaan 2
                juta. Royalti berlaku tanpa batasan generasi.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:h-72">
          <div className="w-full grid grid-cols-3 justify-items-center items-center gap-5">
            <Image
              className="lg:col-span-1 col-span-3"
              src="/icon/profit/illustration-profit4.svg"
              alt="Selling Illustration"
              sizes="(max-width: 768px) 100vw, 700px"
              width={300}
              height={300}
            />
            <div className="lg:col-span-2 col-span-3 flex gap-3 flex-col mb-9 mx-auto">
              <h5 className="text-primary font-bold text-base text-center">
                Royalti Kepemin (Ambassador Rank)
              </h5>
              <p className="text-center text-xs md:w-7/12 w-full mx-auto font-semibold">
                Royalti tambahan yang diberikan kepada mitra yang telah meraih
                jenjang prestasi, Bonus dihitung dari setiap pembelanjaan
                downline dijalur generasinya yang telah mencapai pembelanjaan 2
                juta. Royalti berlaku tanpa batasan generasi.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export const GaleriSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="w-full">
          <AspectRatio ratio={12 / 5} className="relative h-8/12">
            <Image
              src={placeholder}
              fill
              alt="Image"
              sizes="(max-width: 768px) 100vw, 700px"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

interface Location {
  id: number;
  name: string;
  region: string;
  address: string;
  long: number;
  lat: number;
  img: string;
  is_active: number;
  time: string;
}

interface ItemSliderProps {
  locations?: Location[];
  handleJumpTo: (long: number, lat: number) => void;
  setPopupInfo: (location: Location) => void;
}

export const ItemSlider = forwardRef<Slider, ItemSliderProps>(
  (
    { locations = [], handleJumpTo = () => {}, setPopupInfo = () => {} },
    ref
  ) => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      variableWidth: true,
      pauseOnHover: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };

    return (
      <Slider {...settings} ref={ref}>
        {locations.map((location) => (
          <div
            key={location.name}
            className={
              "pr-4 h-32 w-56 hover:cursor-pointer hover:opacity-80 focus:border-none"
            }
            onClick={() => {
              handleJumpTo(location.long, location.lat);
              setPopupInfo(location);
            }}
          >
            <Image
              className="object-cover h-full w-full aspect-video"
              src={location.img}
              alt={location.name}
              sizes="(max-width: 768px) 100vw, 700px"
              width={40}
              height={40}
            />
            <h6 className="text-white/80 mt-2 w-40 text-lg">{location.name}</h6>
            <h6 className="text-white/80 mt-1 w-56 text-sm">
              {location.address}
            </h6>
          </div>
        ))}
      </Slider>
    );
  }
);

ItemSlider.displayName = "ItemSlider";

// export default SimpleSlider;
