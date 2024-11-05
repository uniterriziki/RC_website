import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section>
        {/* Welcome Section */}
        <section
          className="bg-gradient-to-r h-84 decoration-8"
          style={{
            background: "linear-gradient(to right, #2a338a, #843b81)",
          }}
        >
          <div className="relative text-center">
            <Image
              src="/homepagebg.jpeg"
              alt="microscope"
              width={400}
              height={500}
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
            The Research Club of the University of Nairobi (UoNRC) is a
            student-led organization dedicated to building a community of
            aspiring researchers. We connect students with medical
            professionals, fostering curiosity and practical skills to bridge
            classroom learning with real-world research.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="bg-slate-300 py-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-black px-5">
            Our mission is to empower students with essential research skills,
            ethical foundations, and mentorship opportunities. Through hands-on
            learning and collaboration, we prepare members to conduct, present,
            and publish impactful research, shaping the future of medical
            science.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="bg-slate-200 py-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-black px-5">
            To create a vibrant community of student researchers who advance
            medical knowledge and contribute meaningfully to healthcare
            innovation on both local and global scales.
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
