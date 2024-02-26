import * as React from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import { Clock9, CircleDollarSign } from "lucide-react";
import { CalendarDays, User } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

interface cardImpianProps {}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

interface TestiProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
  content: string;
}

export const TestiCard: React.FC<TestiProps> = ({
  src,
  alt,
  title,
  desc,
  content,
}) => {
  return (
    <Card className="border bg-card text-card-foreground shadow-xl rounded-lg w-[98%] h-80">
      <CardHeader className="flex flex-row justify-start w-full content-center gap-4">
        <Image
          width={62}
          height={62}
          src={src}
          alt={alt}
          className="rounded-full object-cover"
        />
        <div className="w-full flex flex-col justify-center gap-2 my-auto">
          <CardTitle className="text-sm md:text-lg text-primary text-ellipsis">
            {title}
          </CardTitle>
          <CardDescription className="font-semibold">{desc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="w-full text-xs font-normal text-center tracking-wide">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

interface mitraProps {
  title: string;
  hak: string;
  produk: string;
  keuntungan: string;
  reward: string;
  harga: string;
}

export const CardMitra: React.FC<mitraProps> = ({
  title,
  hak,
  produk,
  keuntungan,
  reward,
  harga,
}) => {
  return (
    <Card className="shadow-xl rounded-lg w-10/12 md:w-5/12 lg:w-3/12 border-none">
      <CardHeader>
        <CardTitle className="text-center border-b-2 border-gray pb-3 uppercase">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-7">
        <div className="flex gap-7">
          <Image
            src="/icon/icon-check.svg"
            alt="check"
            width={20}
            height={18}
          />
          <h6 className="md:text-lg text-base font-base text-gray-500 tracking-wide">
            {hak} Hak <span className="font-semibold text-black">Usaha</span>
          </h6>
        </div>
        <div className="flex gap-7">
          <Image
            src="/icon/icon-check.svg"
            alt="check"
            width={20}
            height={18}
          />
          <h6 className="md:text-lg text-base font-base text-gray-500 tracking-wide italic">
            <span className="font-semibold text-black not-italic">
              {produk} Produk
            </span>{" "}
            value
          </h6>
        </div>
        <div className="flex gap-7">
          <Image
            src="/icon/icon-check.svg"
            alt="check"
            width={20}
            height={18}
          />
          <h6 className="md:text-lg text-base font-base text-gray-500 tracking-wide">
            Keuntungan Hingga
            <div className="bg-[#F8D65C] font-bold text-black w-9/12 rounded-sm">
              {" "}
              Rp {keuntungan}JT/Hari
            </div>
          </h6>
        </div>
        <div className="flex gap-7">
          <Image
            src="/icon/icon-check.svg"
            alt="check"
            width={20}
            height={18}
          />
          <h6 className="md:text-lg text-base font-base text-gray-500 tracking-wide">
            Potensi Reward
            <p className="bg-[#F8D65C] font-bold text-black rounded-sm px-[0.1rem]">
              {" "}
              Hingga {reward} Miliar
            </p>
          </h6>
        </div>
      </CardContent>
      <div className="w-full bg-primary rounded-b-lg h-14 flex items-center justify-center">
        <p className="text-white font-semibold text-center text-xl">
          Rp {harga}
        </p>
      </div>
    </Card>
  );
};

interface CardSeminarProps {
  src: string;
  alt: string;
  title: string;
  time: string;
  price: string;
  region: string;
  bookLink: string;
}

export const CardSeminar: React.FC<CardSeminarProps> = ({
  src,
  alt,
  title,
  time,
  price,
  region,
  bookLink,
}) => {
  return (
    <Card className="bg-primary shadow-xl mx-auto w-80">
      <div className="header bg-primary w-full py-4 rounded-t-lg">
        <div className="text-center text-white text-2xl font-bold italix">
          {region}
        </div>
      </div>
      <div className="w-full h-auto">
        <AspectRatio ratio={16 / 9}>
          <Image
            className="object-cover w-full h-full"
            width={384}
            height={300}
            sizes="(max-width: 768px) 100vw, 700px"
            src={src}
            alt={alt}
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-3 mb-2">
          <Clock9 className="w-5 h-5 my-auto text-white" />
          <p className="my-auto text-white font-normal tracking-wide">{time}</p>
        </div>
        <div className="flex flex-row gap-3 mb-2">
          <CircleDollarSign className="w-5 h-5 my-auto text-white" />
          <p className="my-auto text-white font-normal tracking-wide">
            {price}
          </p>
        </div>
      </CardContent>
      <Link href={bookLink}>
        <div className="header bg-white hover:opacity-90 w-full py-4 rounded-b-lg">
          <div className="text-center text-primary text-2xl font-bold italix">
            Book Now
          </div>
        </div>
      </Link>
    </Card>
  );
};

const CardImpian = () => {
  return (
    <Card className="shadow-xl mx-auto rounded-lg">
      <div className="lg:w-full w-50">
        <AspectRatio ratio={16 / 9}>
          <Image
            width={384}
            height={300}
            src="/assets/kemitraan.png"
            alt="Seminar SSW Griya Wulansari"
            className="rounded-t-lg object-cover"
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <CardTitle>KEMITRAAN</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="w-80 text-sm font-normal tracking-wide">
          Kemitraan dengan Smart Sinergy World membuka pintu kebebasan dari riba
          dan mewujudkan impian finansial, diiringi nilai-nilai kekeluargaan dan
          religiusitas yang menjadi pijakan kuat dalam perjalanan menuju
          kesuksesan bersama.
        </p>
      </CardContent>
      <Link href="/kemitraan">
        <CardFooter className="flex gap-4">
          <p>Selengkapnya</p>
          <Image width={17} height={17} src="icon/red-arrow.svg" alt="" />
        </CardFooter>
      </Link>
    </Card>
  );
};

interface BestSellerProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  desc: string;
}

export const CardBestSeller: React.FC<BestSellerProps> = ({
  href,
  src,
  alt,
  title,
  desc,
}) => {
  return (
    <Link href={href} className="grid grid-cols-3">
      <div className="lg:w-full h-full w-50 col-span-1">
        <AspectRatio ratio={2 / 2}>
          <Image width={404} height={200} src={src} alt={alt} className="" />
        </AspectRatio>
      </div>
      <div className="flex flex-col items-start justify-center h-full col-span-2">
        <CardContent className="flex flex-col gap-3 w-full">
          <CardTitle className="font-bold">{title}</CardTitle>
          <p className="w-full text-sm font-normal tracking-wide line-clamp-3">
            {desc}
          </p>
        </CardContent>
      </div>
    </Link>
  );
};

export const CardBestSellerSkeleton = () => {
  return (
    <div className="grid grid-cols-3 space-x-4">
      <div className="lg:w-full h-full w-50 col-span-1">
        <Skeleton className="w-[150px] h-[100px] rounded-lg" />
      </div>
      <div className="items-start justify-center h-full col-span-2">
        <CardContent className="flex flex-col gap-3 w-full">
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
          <Skeleton className="w-[150px] h-[20px] rounded-full" />
        </CardContent>
      </div>
    </div>
  );
};

interface ProdukProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  desc: string;
}

export const CardProduk: React.FC<ProdukProps> = ({
  href,
  src,
  alt,
  title,
  category,
  desc,
}) => {
  return (
    <Link
      href={`/produk/${href}`}
      className="bg-card text-card-foreground shadow-xl rounded-lg w-5/6"
    >
      <div className="lg:w-full h-auto w-50">
        <AspectRatio ratio={1 / 1}>
          <Image
            width={384}
            height={300}
            src={src}
            alt={alt}
            className="rounded-t-lg w-full h-full object-cover relative"
            priority
          />
        </AspectRatio>
      </div>
      <div className="py-5 space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
        <p className="w-full text-sm font-normal tracking-wide line-clamp-3 pt-2">
          {desc}
        </p>
      </div>
    </Link>
  );
};

export const CardProdukSkeleton = () => {
  return (
    <div className="text-card-foreground shadow-md rounded-lg w-6/6">
      <div className="lg:w-full h-auto w-50">
        <Skeleton className="w-full h-[200px] rounded-lg" />
      </div>
      <div className="py-5 px-2 space-y-4">
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[80px] h-[20px] rounded-full" />
        <Skeleton className="w-[150px] h-[20px] rounded-full" />
      </div>
    </div>
  );
};

interface CardBlogProps {
  href: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  date: string;
  author: string;
}

export const CardBlog: React.FC<CardBlogProps> = ({
  href,
  src,
  alt,
  category,
  title,
  date,
  author,
}) => {
  return (
    <Link href={href} className="border-none rounded-lg w-full">
      <div className="lg:w-full w-50">
        <AspectRatio ratio={4 / 3}>
          <Image fill src={src} alt={alt} className="rounded-lg object-cover" />
        </AspectRatio>
      </div>
      <div className="text-black py-4">
        <span className="mt-1 mb-2 text-primary font-semibold">{category}</span>
        <h3 className="font-bold text-2xl my-1 line-clamp-2 text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-row w-1/2">
            <CalendarDays className="w-5 h-5 text-gray-500 my-auto me-2" />
            <div className="text-xs text-gray-500 my-auto">{date}</div>
          </div>
          <div className="flex flex-row"></div>
          <User className="w-5 h-5 text-gray-500 my-auto me-2" />
          <div className="text-xs text-gray-500 my-auto">{author}</div>
        </div>
      </div>
    </Link>
  );
};

interface CardRekomendasiProps {
  href: string;
  src: string;
  alt: string;
  date: string;
  title: string;
  desc: string;
}

export const CardRekomendasi: React.FC<CardRekomendasiProps> = ({
  href,
  src,
  alt,
  date,
  title,
  desc,
}) => {
  return (
    <Link
      href={href}
      className="border bg-card text-card-foreground shadow-xl mx-auto rounded-lg"
    >
      <div className="lg:w-full w-50">
        <AspectRatio ratio={5 / 3}>
          <Image
            width={384}
            height={300}
            src={src}
            alt={alt}
            className="rounded-t-lg object-cover"
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <CardDescription>{date}</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="w-full text-sm font-normal tracking-wide line-clamp-3 text-ellipsis">
          {desc}
        </p>
      </CardContent>
    </Link>
  );
};

export const CardFormSkeleton = () => {
  return (
    <Card>
      <CardHeader className="space-y-6">
        <CardTitle>
          <Skeleton className="w-[400px] mx-auto h-[20px] rounded-full" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-[700px] mx-auto h-[20px] rounded-full" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-[200px] h-[20px] rounded-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-[300px] h-[20px] rounded-full" />
      </CardFooter>
      <CardContent>
        <Skeleton className="w-[200px] h-[20px] rounded-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-[300px] h-[20px] rounded-full" />
      </CardFooter>
      <CardContent>
        <Skeleton className="w-[200px] h-[20px] rounded-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-[300px] h-[20px] rounded-full" />
      </CardFooter>
    </Card>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
