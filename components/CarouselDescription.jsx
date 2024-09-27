import React from "react";
import { images } from "../lib/constants";
import Link from "next/link";

const CarouselDescription = ({ clickNext, clickPrev, activeImgIndex }) => {
  return (
    <div>
      <div className="uppercase text-sm absolute right-4 top-2 underline underline-offset-4">
        RC UON
      </div>
      {images.map((elem, id) => (
        <div
          key={id}
          //change the css style to only show the active selection in carousel
          className={
            id === activeImgIndex
              ? `block w-full h-[100vh]  object-cover transition-all duration-500 ease-in-out`
              : "hidden "
          }
        >
          <div className="absolute bottom-1 w-full flex justify-center items-center">
            {/* To scroll next right */}
            <div
              onClick={clickPrev}
              className="absolute bottom-2 right-10 cursor-pointer"
            >
              {/* <Image src={left.svg} alt="" width={20} height={20}></Image> */}
              previous
            </div>
            {/* To scroll next left */}
            <div
              onClick={clickNext}
              className="absolute bottom-2 right-2 cursor-pointer"
            >
              {/* <Image src={left.svg} alt="" width={20} height={20}></Image> */}
              next
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselDescription;
