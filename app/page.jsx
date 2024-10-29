import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section>
        {/* Welcome Section */}
        <section
          className="bg-gradient-to-r h-10 text-x1 text-center decoration-8 my-10 font-mono italic text-white"
          style={{
            background: "linear-gradient(to right, #2a338a, #843b81)",
          }}
        >
          WELCOME TO RESEARCH CLUB UoN
        </section>

        {/* Who We Are, Our Mission, and Our Vision Section */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Who We Are Section */}
          <section className="min-h-[500px] border-black border-2 bg-gray-700 py-10 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-white">Who We Are</h2>
            <p className="text-white px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          {/* Our Mission Section */}
          <section className="min-h-[500px] bg-red-300 border-black border-2 py-10 text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-black px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          {/* Our Vision Section */}
          <section className="min-h-[500px] bg-slate-200 border-black border-2 py-10 text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-black px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        </div>

        {/* Gallery Section */}
        <section className="container mx-auto py-10">
          <h2 className="text-center text-3xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 gap-5 border-gray-500 border p-5">
            {/* Images and descriptions */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border p-3">
                <img src={`/image${i + 1}.jpg`} alt={`Gallery image ${i + 1}`} className="w-full h-48 object-cover" />
                <p className="mt-2 text-center">Description for image {i + 1}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main >
  );
}
