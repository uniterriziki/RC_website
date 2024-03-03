import Image from "next/image";
import CarouselDescription from "./CarouselDescription";

export default function Section() {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Article Title</h1>
      </div>

      <div className="border-red-600 grid md:grid-cols-2 ">
        <div>
          {/* <Image /> */}
        </div>
        <div>
          <CarouselDescription />
        </div>
      </div>
    </section>
  );
}
