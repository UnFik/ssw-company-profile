// "use client";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { buttonVariants } from "./Button";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// // import required modules
// import { FreeMode, Pagination } from "swiper/modules";
// import CheckboxButton from "./CheckboxButton";

// export default function TabsButton(data: string[]) {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={10}
//         freeMode={true}
//         modules={[FreeMode, Pagination]}
//         className="mySwiper"
//       >
//         {data.map((category: string, index: number) => (
//           <SwiperSlide key={index}>
//             <CheckboxButton category={category} quantity={0} />
//           </SwiperSlide>
//         ))}
//         <SwiperSlide>
//           <div
//             className={`${buttonVariants({
//               variant: "secondary",
//             })} w-full py-6 my-auto rounded-none`}
//           >
//             Kecantikan
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className={`${buttonVariants({
//               variant: "secondary",
//             })} w-full py-6 my-auto rounded-none`}
//           >
//             Kendaraan
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className={`${buttonVariants({
//               variant: "secondary",
//             })} w-full py-6 my-auto rounded-none`}
//           >
//             Pupuk
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
