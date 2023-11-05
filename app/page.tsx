import Navbar from "@/components/ui/Navbar";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/Aspect-ratio";
import Link from "next/link";
import { TestiSlider, GaleriSlider } from "@/components/ui/Slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <div className="relative bg-[url('/assets/header.svg')] bg-center bg-no-repeat md:bg-fixed bg-cover">
        <Navbar />
        <div className="lg:px-20 flex justify-center items-center">
          <div className="flex flex-col gap-5 w-9/12 mx-auto text-left text-white">
            <h1 className="title md:text-left text-center md:mt-32 mt-10">
              Membantu Umat Terbebas Riba.
            </h1>
            <h3 className="subtitle text tracking-wide text-center text-sm md:text-xl  md:text-left">
              SSW hadir menjadi sebuah Komunitas Bebas Riba. Menaungi lebih dari
              17.000 mitra yang tersebar di seluruh Indonesia bahkan
              mancanegara.
            </h3>
            <Link href="/formulir" className="md:mx-0 mx-auto">
              <Button className="w-48 py-6 md:mx-0 mx-auto">Join Mitra</Button>
            </Link>
          </div>
        </div>
        <div className="md:px-20 highlight text-white w-full h-[18.5rem] flex justify-center items-end">
          <div className="box bg-white/25 md:w-[15.9rem] w-24 h-36 align-bottom flex flex-col justify-center text-center rounded-tl-lg">
            <h2 className="lg:text-7xl md:text-4xl text-xl font-bold">4+</h2>
            <h4 className="md:text-sm text-xs font-semibold">
              Tahun Pengalaman
            </h4>
          </div>
          <div className="box bg-white/25 md:w-[15.9rem] w-24 h-36 align-bottom flex flex-col justify-center text-center">
            <h2 className="lg:text-7xl md:text-4xl text-xl font-bold">50+</h2>
            <h4 className="md:text-sm text-xs font-semibold">
              Kota di Seluruh Indonesia
            </h4>
          </div>
          <div className="box bg-primary md:w-[15.9rem] w-24 h-36 align-bottom flex flex-col justify-center text-center">
            <h2 className="lg:text-7xl md:text-4xl text-xl font-bold">
              20.000
            </h2>
            <h4 className="md:text-sm text-xs font-semibold">
              Mitra di Seluruh Indonesia
            </h4>
          </div>
          <div className="box bg-white/25 md:w-[15.9rem] w-24 h-36 align-bottom flex flex-col justify-center text-center rounded-tr-lg">
            <h2 className="lg:text-7xl md:text-4xl text-xl font-bold">200+</h2>
            <h4 className="md:text-sm text-xs font-semibold">
              Luxury Ambassador
            </h4>
          </div>
        </div>
      </div>
      <div className="md:container px-2 pb-20">
        <div className="flex flex-col gap-5 mx-auto text-left text-black">
          <h1 className="title md:mt-24 mt-10">
            Raih <br /> Impianmu <br />
            <span className="font-normal">
              bersama <span className="text-primary">Smart Sinergy World.</span>
            </span>
          </h1>
          <div className="card-section grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-7 w-full">
            <Card className="shadow-xl mx-auto w-11/12">
              <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    width={384}
                    height={300}
                    src="/assets/foto-wulansari.jpg"
                    alt="Seminar SSW Griya Wulansari"
                    className="rounded-t-lg object-cover w-auto h-auto"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>KEMITRAAN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="w-full text-sm font-normal tracking-wide">
                  Kemitraan dengan Smart Sinergy World membuka pintu kebebasan
                  dari riba dan mewujudkan impian finansial, diiringi
                  nilai-nilai kekeluargaan dan religiusitas yang menjadi pijakan
                  kuat dalam perjalanan menuju kesuksesan bersama.
                </p>
              </CardContent>
              <Link href="/kemitraan">
                <CardFooter className="flex gap-4">
                  <p>Selengkapnya</p>
                  <Image
                    width={17}
                    height={17}
                    src="icon/red-arrow.svg"
                    alt="red arrow"
                  />
                </CardFooter>
              </Link>
            </Card>
            <Card className="shadow-xl mx-auto w-11/12">
              <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    width={384}
                    height={300}
                    src="/assets/foto-produk.png"
                    alt="Produk Kemitraan SSW"
                    className="rounded-t-lg object-cover w-auto h-auto"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>PRODUK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="w-full text-sm font-normal tracking-wide">
                  Produk-produk yang kami distribusikan adalah pilihan terbaik
                  untuk memenuhi berbagai kebutuhan Anda, dengan kualitas unggul
                  dan inovasi terbaru untuk meningkatkan kenyamanan dan kepuasan
                  pelanggan.
                </p>
              </CardContent>
              <Link href="produk">
                <CardFooter className="flex gap-4">
                  <p>Selengkapnya</p>
                  <Image
                    width={17}
                    height={17}
                    src="icon/red-arrow.svg"
                    alt="red arrow"
                  />
                </CardFooter>
              </Link>
            </Card>
            <Card className="shadow-xl mx-auto w-11/12">
              <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    width={384}
                    height={300}
                    src="/assets/foto-wulansari.jpg"
                    alt="Seminar SSW Griya Wulansari"
                    className="rounded-t-lg object-cover w-auto h-auto"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>SEMINAR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="w-full text-sm font-normal tracking-wide">
                  Platform unggul untuk mengenal berbagai model bisnis, produk,
                  dan mengenai Smart Sinergy World itu sendiri. Seminar yang
                  kami selenggarakan memberikan wawasan lebih untuk meraih
                  kesuksesan dalam menjalani perjalanan bisnis yang
                  menginspirasi.
                </p>
              </CardContent>
              <Link href="/seminar">
                <CardFooter className="flex gap-4">
                  <p>Selengkapnya</p>
                  <Image
                    width={17}
                    height={17}
                    src="icon/red-arrow.svg"
                    alt=""
                  />
                </CardFooter>
              </Link>
            </Card>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-[url('/assets/about.svg')] bg-center bg-no-repeat md:bg-fixed bg-cover flex justify-center items-center">
        <div className="md:container px-2">
          <div className="flex flex-col gap-7 mx-auto text-white">
            <h1 className="title text-center tracking-tight leading-normal">
              Semangat <span className="text-primary">Bersaudara</span>.
              Semangat <span className="text-primary">Solusi</span>. Semangat
              Sukses <span className="text-primary">Bersama</span>.
            </h1>
            <Link href="tentang-kami" className="mx-auto">
              <Button className="w-48 py-7 text-xl">About Us</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:container px-2 py-20">
        <div className="flex flex-col gap-2 mx-auto">
          <h1 className="title text-center text-primary tracking-tight leading-normal">
            BEST SELLER
          </h1>
          <h3 className="subtitle text-center">
            Temukan koleksi Best Seller kami dan rasakan manfaat bahan-bahan
            terbaik yang kami tawarkan dan jadikan setiap hari lebih baik dengan
            produk pilihan kami.
          </h3>
          <div className="mt-5 card-section grid lg:grid-cols-4 grid-cols-1 gap-7 justify-center lg:gap-1 w-full">
            <Link
              href={`${process.env.DOMAIN}/produk/eco-farming`}
              className="border bg-card text-card-foreground shadow-xl mx-auto rounded-lg w-5/6"
            >
              <div className="lg:w-full w-50">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    width={384}
                    height={300}
                    src="https://ik.imagekit.io/8gkon2t3f/product/eco-farming.webp"
                    alt="Eco Farming"
                    className="rounded-t-lg object-cover"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>Eco Farming</CardTitle>
                <CardDescription>Pupuk</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-full text-sm font-normal tracking-wide line-clamp-3">
                  Eco Farming Original adalah pupuk organik super aktif yang
                  mengandung 13 unsur hara dengan memanfaatkan teknologi mikroba
                  (bakteri decomposer) sebagai bioaktivator untuk merestorasi
                  kesuburan tanah. Penggunaan Pupuk Eco Farming Original mampu
                  menekan penggunaan pupuk anorganik yang berlebih, sehingga
                  dapat menjadi alternatif pengembangan produksi pertanian sehat
                  dan ramah lingkungan.
                </p>
              </CardContent>
            </Link>
            <Link
              href={`${process.env.DOMAIN}/produk/ecomaxx-&-econaxx`}
              className="border bg-card text-card-foreground shadow-xl mx-auto rounded-lg w-5/6"
            >
              <div className="lg:w-full w-50">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    width={384}
                    height={300}
                    src="https://ik.imagekit.io/8gkon2t3f/product/ecomaxx-&-econaxx.webp"
                    alt="ECOMAXX & ECONAXX"
                    className="rounded-t-lg object-cover"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>ECONAXX</CardTitle>
                <CardDescription>Minuman Kesehatan</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-full text-sm font-normal tracking-wide line-clamp-3">
                  Minuman serbuk kopi dengan MTG (Maca, Tribulus & Ginseng)
                  untuk meningkatkan stamina, hormon, kesuburan, keperkasaan &
                  kesehatan pria maupun wanita.
                </p>
              </CardContent>
            </Link>
            <Link
              href={`${process.env.DOMAIN}/produk/habspro`}
              className="border bg-card text-card-foreground shadow-xl mx-auto rounded-lg w-5/6"
            >
              <div className="lg:w-full w-50">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    width={384}
                    height={300}
                    src="https://ik.imagekit.io/8gkon2t3f/product/habspro.webp"
                    alt="HABSPRO"
                    className="rounded-t-lg object-cover"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>HABSPRO</CardTitle>
                <CardDescription>Suplemen</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-full text-sm font-normal tracking-wide line-clamp-3">
                  HABSPRO adalah suplemen herbal berbentuk kapsul yang memiliki
                  kandungan utama Habbatussauda Bee Polen dan Propolis.
                  Kombinasi bahan-bahan tersebut mampu meningkatkan stamina dan
                  memberikan banyak manfaat untuk tubuh.
                </p>
              </CardContent>
            </Link>
            <Link
              href={`${process.env.DOMAIN}/produk/b-maxx`}
              className="border bg-card text-card-foreground shadow-xl mx-auto rounded-lg w-5/6"
            >
              <div className="lg:w-full w-50">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    width={384}
                    height={300}
                    src="https://ik.imagekit.io/8gkon2t3f/product/b-maxx.webp"
                    alt="B MAXX"
                    className="rounded-t-lg object-cover"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>B MAXX</CardTitle>
                <CardDescription>Suplemen</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="w-full text-xs font-normal tracking-wide line-clamp-3">
                  B-MAXX merupakan kapsul herbal penyeimbang nutrisi organ
                  dengan kandungan cabe jawa, merica, gamat emas, purwaceng, dan
                  pasak bumi mampu memberikan efek relaksasi, regenerasi,
                  release, dan refungsi sehingga mampu mengembalikan kinerja
                  organ lebih optimal.
                </p>
              </CardContent>
            </Link>
          </div>
          <Link href="produk" className="mx-auto">
            <Button className="w-48 py-6 mt-10 rounded-full  text-xl">
              See More
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-container justify-center py-20">
        <div className="md:container px-2">
          <h1 className="title text-white text-center mx-auto mb-10">GALERI</h1>
          <div className="w-11/12 mx-auto">
            <GaleriSlider />
          </div>
        </div>
      </div>
      <div className="md:container px-2 mb-20">
        <div className="flex flex-col gap-10">
          <h1 className="title md:mt-24 mt-10 text-primary">
            FAQ{" "}
            <span className="subtitle  font-semibold italic">
              Frequently Asked Question
            </span>
          </h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Apa itu Smart Sinergy World (SSW)?
              </AccordionTrigger>
              <AccordionContent>
                Smart Sinergy World (SSW) adalah sebuah komunitas di bawah
                naungan PT BEST yang berfokus pada penjualan langsung berjenjang
                syariah (PLBS). SSW menawarkan peluang bisnis yang dapat diikuti
                oleh berbagai latar belakang, dengan fokus pada semangat
                bersaudara, solusi, dan kesuksesan bersama.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Bagaimana cara bergabung dengan Smart Sinergy World?
              </AccordionTrigger>
              <AccordionContent>
                Anda dapat bergabung dengan SSW dengan mengisi formulir pada
                bagian Join Mitra atau menghubungi kami melalui kontak Whatsapp
                yang tertera.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Apakah saya perlu pengalaman sebelum bergabung?
              </AccordionTrigger>
              <AccordionContent>
                Tidak, Anda tidak perlu pengalaman sebelum bergabung. SSW
                menawarkan pelatihan dan dukungan untuk mitranya, termasuk bagi
                mereka yang baru memulai.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Bagaimana dukungan dan pelatihan disediakan kepada mitra?
              </AccordionTrigger>
              <AccordionContent>
                SSW menyediakan beragam sumber daya pendidikan dan dukungan
                kepada mitra, termasuk pelatihan online dan offline, webinar,
                dan seminar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Bisakah saya menjalankan bisnis SSW paruh waktu?
              </AccordionTrigger>
              <AccordionContent>
                Ya, banyak anggota SSW menjalankan bisnis ini paruh waktu sesuai
                dengan jadwal mereka. Namun, hasilnya bisa bervariasi tergantung
                pada seberapa banyak waktu dan upaya yang Anda investasikan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="bg-container w-full justify-center mt-20 pb-32">
        <div className="md:container px-2">
          <div className="flex flex-col gap-5">
            <h1 className="title text-white md:mt-24 mt-10">TESTIMONI</h1>
            <h3 className="subtitle text-white font-normal">
              Pendapat mitra tentang Smart Sinergy World
            </h3>
            <div className="mt-5 w-full">
              <TestiSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="md:container px-2 pb-20">
        <div className="flex flex-col gap-5">
          <h1 className="md:text-5xl text-xl font-semibold text-center md:mt-24 mt-10 text-primary">
            YOUTUBE SMART SINERGY WORLD
          </h1>
          <h3 className="md:subtitle text-sm text-center border-b-4 border-primary pb-5">
            Temukan banyak informasi dan pembelajaran di youtube kami.
          </h3>
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yNcOs7nN134?si=npvOr5gMMLL-gdPN"
              title="YouTube Smart Sinergy World"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </div>
      </div>
      <Footer />
    </>
  );
}
