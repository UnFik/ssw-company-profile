import MapSeminar from "@/components/ui/MapSeminar";
import { NavbarGeneral } from "@/components/ui/Navbar";
import Image from "next/image";
import { CardSeminar } from "@/components/ui/Card";
import Footer from "@/components/ui/Footer";
import type { Metadata } from "next";
import SeminarData from "@/data/seminar.json";

export const metadata: Metadata = {
  title: "Seminar | Smart Sinergy World",
  description: "Smart Sinergy World",
};

const SeminarPage = () => {
  return (
    <div>
      <NavbarGeneral />
      <div className="md:container px-2 py-20">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col w-full lg:w-7/12 gap-7">
            <h1 className="text-3xl md:text-5xl font-bold md:leading-relaxed text-center md:text-left">
              Welcome to The <br />
              SSW Seminar Center
            </h1>
            <h3 className="text-gray-600 md:text-base text-sm md:w-8/12 w-full text-center md:text-left">
              Sejalan dengan misi kami, SSW menyediakan beragam kegiatan seminar
              setiap mingggunya yang dapat membantu anda untuk mengenal lebih
              jauh mengenai SSW dan sistem bisnis syariah yang diselenggarakan
              di dalamnya.
            </h3>
            <div className="flex flex-row w-full gap-5">
              <div className="flex flex-row gap-5 md:w-auto w-6/12 px-2 md:px-0">
                <Image
                  className="w-auto h-auto"
                  src="/icon/icon-expert.svg"
                  alt="Expert icon"
                  sizes="(max-width: 768px) 100vw, 700px"
                  width={0}
                  height={0}
                />
                <div className="flex md:text-base text-xs font-semibold m-auto md:w-44 w-full md:leading-loose">
                  Start learning from our experts
                </div>
              </div>
              <div className="flex flex-row gap-5 md:w-auto w-6/12 px-2 md:px-0">
                <Image
                  className="w-auto h-auto"
                  src="/icon/icon-skill.svg"
                  alt="Skill icon"
                  sizes="(max-width: 768px) 100vw, 700px"
                  width={0}
                  height={0}
                />
                <div className="flex md:text-base text-xs font-semibold m-auto md:w-44 w-full md:leading-loose">
                  Enhance your skills with us now
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-5/12 lg:flex hidden">
            <Image
              className="absolute top-0 right-0 z-0 w-auto h-auto"
              src="/assets/dotted2.svg"
              alt="dotted"
              width={0}
              height={0}
            />
            <Image
              className="w-auto h-auto z-20 relative"
              src="/assets/illustration-seminar.svg"
              alt="Seminar Illustration"
              sizes="(max-width: 768px) 100vw, 700px"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(153deg,_#C5A32B_0%,_rgba(0,_0,_0,_0.00)_100%)] py-20">
        <div className="md:container px-2">
          <div className="title text-center text-white mx-auto">
            Find out our <br /> Weekly Seminar Routine
          </div>
        </div>
      </div>
      <div className="md:container px-8 py-20">
        <div className="flex flex-wrap justify-center gap-20 gap-y-10 mt-10 md:pe-0 pe-8">
          {SeminarData.map((seminar: Seminar) => (
            <div className="md:w-82 w-72" key={seminar.id}>
              <CardSeminar
                src={seminar.img}
                alt={seminar.name}
                title={seminar.name}
                time={seminar.time}
                region={seminar.region}
                price={seminar.price}
                bookLink={`/seminar/${seminar.name}`}
              />
            </div>
          ))}
          {/* <div className="md:w-82 w-72">
            <CardSeminar
              src="/assets/foto-wulansari.jpg"
              alt="Seminar SSW Griya Wulansari"
              title="Griya Wulansari"
              time="Selasa, 12.00 - 15.00"
              region="bekasi"
              price="HTM 25K (Snack Box)"
            />
          </div>
          <div className="md:w-82 w-72">
            <CardSeminar
              src="/assets/foto-wulansari.jpg"
              alt="Seminar SSW Griya Wulansari"
              title="Griya Wulansari"
              time="Selasa, 12.00 - 15.00"
              region="bekasi"
              price="HTM 25K (Snack Box)"
            />
          </div>
          <div className="md:w-82 w-72">
            <CardSeminar
              src="/assets/foto-wulansari.jpg"
              alt="Seminar SSW Griya Wulansari"
              title="Griya Wulansari"
              time="Selasa, 12.00 - 15.00"
              region="bekasi"
              price="HTM 25K (Snack Box)"
            />
          </div>
          <div className="md:w-82 w-72">
            <CardSeminar
              src="/assets/foto-wulansari.jpg"
              alt="Seminar SSW Griya Wulansari"
              title="Griya Wulansari"
              time="Selasa, 12.00 - 15.00"
              region="bekasi"
              price="HTM 25K (Snack Box)"
            />
          </div> */}
        </div>
        <div className="flex flex-col mt-10">
          <div className="header bg-primary w-full py-4">
            <div className="text-center text-white text-2xl">
              5 Region di Jabodetabek
            </div>
          </div>
          <div>
            <MapSeminar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeminarPage;
