import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section>
        {/* Welcome Section */}
        <section
          className="bg-gradient-to-r h-84   decoration-8  py-18  "
          style={{
            background: "linear-gradient(to right, #2a338a, #843b81)",
          }}
        >
          <div className="relative text-center">
            <Image
              src="/homepagebg.jpeg"
              alt="microscope"
              width={400}
              height={600}
              className="w-full opacity-25"
            />
            <div className="w-full absolute top-[250px] text-center">
              <p className="text-6xl font-bold text-white font-mono italic text-center">
                WELCOME TO RESEARCH CLUB UoN
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="bg-slate-400 py-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-black px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="bg-slate-300 py-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-black px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="bg-slate-200 py-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-black px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto py-4">
          <h2 className="text-center text-3xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 gap-5 border-gray-500 border p-5">
            {/* Images and descriptions */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border p-3">
                <Image
                  src={`/website_pic${i + 1}.jpeg`}
                  alt={`Gallery image ${i + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <p className="mt-2 text-center">
                  Description for image {i + 1}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
