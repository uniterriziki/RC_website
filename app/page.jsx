// THIS WILL BE THE HOMEPAGE OF THE APP
import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-500">
      <section>
        <section
          className="bg-gradient-to-r h-10 text-x1 text-center decoration-8 my-10 font-mono italic text-white"
          style={{
            background: "linear-gradient(to right, #2a338a, #843b81)",
          }}
        >
          WELCOME TO RESEARCH CLUB UoN
        </section>

        {/* Who We Are Section */}
        <section className="bg-slate-400 py-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-black px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="bg-slate-300 py-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-black px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="bg-slate-200 py-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-black px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

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
    </main>
  );
}
