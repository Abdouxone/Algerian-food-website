"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { topPicks } from "../data/data";
export default function TopPicks() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-400 m-auto py-2 px-2">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          style={
            {
              "--swiper-navigation-color": "#ffff",
            } as React.CSSProperties
          }
        >
          {topPicks.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-3xl">
                  <div className="absolute w-full h-full bg-black/50 text-white rounded-3xl">
                    <p className="px-2 font-bold pt-2 text-2xl">{item.title}</p>
                    <p className="px-2">{item.price}</p>
                    <button className="border rounded-3xl px-1 text-white bottom-4 absolute mx-2 border-white cursor-pointer ">
                      Add To Cart
                    </button>
                  </div>

                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-50  w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
