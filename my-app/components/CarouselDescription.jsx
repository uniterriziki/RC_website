import React from "react";
import { images } from "../constants";
import left from "../public/left.svg";
import Image from "next/image";

const CarouselDescription = ({ clickNext, clickPrev, activeImgIndex }) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative rounded-tr-3xl rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline underline-offset-4">
        RC UON
      </div>
      {images.map((elem, id) => (
        <div
          key={id}
          //change the css style to only show the active selection in carousel
          className={
            id === activeImgIndex
              ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
              : "hidden"
          }
        >
          <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
          <div className="leading-relaxed font-medium text-base tracking-white h-40 italic text-gray-600">
            {elem.desc}
          </div>

          {/* Replace this button with that in a component */}
          <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
            Read This Now
          </button>

          <div className="absolute bottom-1 w-full flex justify-center items-center">
            {/* To scroll next right */}
            <div
              onClick={clickPrev}
              className="absolute bottom-2 right-10 cursor-pointer"
            >
              <Image src={left.svg} alt="" width={20} height={20}></Image>
            </div>
            {/* To scroll next left */}
            <div
              onClick={clickNext}
              className="absolute bottom-2 right-2 cursor-pointer"
            >
              <Image src={left.svg} alt="" width={20} height={20}></Image>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselDescription;
