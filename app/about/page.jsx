import Image from "next/image";

export const metadata = {
  title: "About", //title: {absolute: "sth sth sth here"}
};

const About = () => {
  return (
    <div className="bg-slate-300">
      <section>
        <div className="flex lg:items-center p-12">
          <div className="lg:w-1/2">
            <Image src="/white logo.jpeg" width={400} height={400} alt="" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="lg:ml-12 font-bold text-3xl mt-5 mb-5">About Us</h2>
            <p className="lg:ml-12 text-xl leading-10">
              The Research Club of The University of Nairobi is an association of students founded in ____.<br />
              It aims to increase awareness of research opportunities, provide a basic foundation in research and facilitate<br /> interaction between researchers and professionals in the medical field.
            </p>
            <button className="lg:ml-12 text-sm bg-red-500 text-white hover:bg-green-600">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
