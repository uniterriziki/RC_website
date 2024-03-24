"use client";
//allow mutations on the client

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarouselDescription from "./CarouselDescription";
import { images } from "../lib/constants/index";

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);
  //useState to determine active images and allow the client change to a new active image

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
    <div className="bg-indigo-400 h-[60vh] w-[200vh] mt-10 grid place-items-center mx-auto max-w-xl shadow-2xl rounded-xl">
      <div className=" w-full flex justify-center items-center gap-0 transition-transform ease-in-out duration-500 rounded-xl ">
        {/* map through images which are located have been stored in our constants */}
        {images.map((pic, idx) => (
          <div
            className={`${
              idx === activeImage
                ? "block w-full h-[50vh] object-cover transition-all duration-500 ease-in-out "
                : "hidden"
            }`}
            key={idx}
          >
            <Image
              src={pic.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-[50vh] object-cover rounded-tl-xl rounded-bl-xl hover:shadow-2xl hover:cursor-pointer"
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
