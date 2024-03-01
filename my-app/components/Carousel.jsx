"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarouselDescription from "./CarouselDescription";
import { images } from "../constants";

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
    <div className="grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
        {images.map((pic, id) => (
          <div
            classname={`${
              id === activeImage
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
            key={id}
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

// "use client"

// import * as React from "react"
// import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
// import useEmblaCarousel, {
//   type UseEmblaCarouselType,
// } from "embla-carousel-react"

// import { cn } from "@/lib/utils"
// import Button  from "@/components/Button"

// type CarouselApi = UseEmblaCarouselType[1]
// type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
// type CarouselOptions = UseCarouselParameters[0]
// type CarouselPlugin = UseCarouselParameters[1]

// type CarouselProps = {
//   opts?: CarouselOptions
//   plugins?: CarouselPlugin
//   orientation?: "horizontal" | "vertical"
//   setApi?: (api: CarouselApi) => void
// }

// type CarouselContextProps = {
//   carouselRef: ReturnType<typeof useEmblaCarousel>[0]
//   api: ReturnType<typeof useEmblaCarousel>[1]
//   scrollPrev: () => void
//   scrollNext: () => void
//   canScrollPrev: boolean
//   canScrollNext: boolean
// } & CarouselProps

// const CarouselContext = React.createContext<CarouselContextProps | null>(null)

// function useCarousel() {
//   const context = React.useContext(CarouselContext)

//   if (!context) {
//     throw new Error("useCarousel must be used within a <Carousel />")
//   }

//   return context
// }

// const Carousel = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement> & CarouselProps
// >(
//   (
//     {
//       orientation = "horizontal",
//       opts,
//       setApi,
//       plugins,
//       className,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const [carouselRef, api] = useEmblaCarousel(
//       {
//         ...opts,
//         axis: orientation === "horizontal" ? "x" : "y",
//       },
//       plugins
//     )
//     const [canScrollPrev, setCanScrollPrev] = React.useState(false)
//     const [canScrollNext, setCanScrollNext] = React.useState(false)

//     const onSelect = React.useCallback((api: CarouselApi) => {
//       if (!api) {
//         return
//       }

//       setCanScrollPrev(api.canScrollPrev())
//       setCanScrollNext(api.canScrollNext())
//     }, [])

//     const scrollPrev = React.useCallback(() => {
//       api?.scrollPrev()
//     }, [api])

//     const scrollNext = React.useCallback(() => {
//       api?.scrollNext()
//     }, [api])

//     const handleKeyDown = React.useCallback(
//       (event: React.KeyboardEvent<HTMLDivElement>) => {
//         if (event.key === "ArrowLeft") {
//           event.preventDefault()
//           scrollPrev()
//         } else if (event.key === "ArrowRight") {
//           event.preventDefault()
//           scrollNext()
//         }
//       },
//       [scrollPrev, scrollNext]
//     )

//     React.useEffect(() => {
//       if (!api || !setApi) {
//         return
//       }

//       setApi(api)
//     }, [api, setApi])

//     React.useEffect(() => {
//       if (!api) {
//         return
//       }

//       onSelect(api)
//       api.on("reInit", onSelect)
//       api.on("select", onSelect)

//       return () => {
//         api?.off("select", onSelect)
//       }
//     }, [api, onSelect])

//     return (
//       <CarouselContext.Provider
//         value={{
//           carouselRef,
//           api: api,
//           opts,
//           orientation:
//             orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
//           scrollPrev,
//           scrollNext,
//           canScrollPrev,
//           canScrollNext,
//         }}
//       >
//         <div
//           ref={ref}
//           onKeyDownCapture={handleKeyDown}
//           className={cn("relative", className)}
//           role="region"
//           aria-roledescription="carousel"
//           {...props}
//         >
//           {children}
//         </div>
//       </CarouselContext.Provider>
//     )
//   }
// )
// Carousel.displayName = "Carousel"

// const CarouselContent = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => {
//   const { carouselRef, orientation } = useCarousel()

//   return (
//     <div ref={carouselRef} className="overflow-hidden">
//       <div
//         ref={ref}
//         className={cn(
//           "flex",
//           orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
//           className
