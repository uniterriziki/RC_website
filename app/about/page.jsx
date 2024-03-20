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
            <Image src="/dolphin 1.jpg" width={400} height={400} alt="" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="lg:ml-12 font-bold text-3xl mt-5 mb-5">About Us</h2>
            <p className="lg:ml-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
