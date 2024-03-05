"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarouselDescription from "./CarouselDescription";
import { images } from "../constants/index"

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  //if the active image is equal to the last image length - 1, show the first element 0, else just increase by 1
  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  //if the active image is the first one, go to the last image, else cycle back just one
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  //useEffect to make the images cycle through automatically
  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000); //schedule action after this no. of milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="bg-indigo-400 p-2 grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div className=" w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
        {images.map((pic, idx) => (
          <div
            className={`${idx === activeImage
              ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
              : "hidden"
              }`}
            key={idx}
          >
            <Image
              src={pic.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
            />
          </div>
        ))}
        <CarouselDescription
          activeImgIndex={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </div>
  );
};

export default Carousel;
