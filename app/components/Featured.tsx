"use client";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Featured() {
  const images = [
    {
      url: "https://res.cloudinary.com/dckhzlw83/image/upload/v1769690949/upscalemedia-transformed_1_txzi0s.jpg",
    },
    {
      url: "https://res.cloudinary.com/dckhzlw83/image/upload/v1769854155/upscalemedia-transformed_4_uqa8iz.jpg",
    },
    {
      url: "https://res.cloudinary.com/dckhzlw83/image/upload/v1769854208/upscalemedia-transformed_3_bssnf4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="w-full h-125 relative group p-4">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 text-white "
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      >
        <div
          className=" absolute top-55 left-8 p-1 rounded-full cursor-pointer  bg-amber-700/60 "
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1,
            )
          }
        >
          <BsChevronCompactLeft size={25} color="white" />
        </div>
        <div
          className=" bg-amber-700/60 absolute rounded-full p-1 right-8 top-55 cursor-pointer"
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          <BsChevronCompactRight size={25} color="white" />
        </div>
      </div>
      <div className="flex justify-center p-1">
        {images.map((sliderItems, index) => (
          <div
            className="cursor-pointer "
            onClick={() => moveToSlide(index)}
            key={index}
          >
            <RxDotFilled size={25} />
          </div>
        ))}
      </div>
    </div>
  );
}
