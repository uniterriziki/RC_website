// THIS WILL BE THE HOMEPAGE OF THE APP
import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-500">
      <section>
        <section
          className=" bg-gradient-to-r h-20 text-4xl text-center decoration-8 my-10 py-6 font-mono italic text-white"
          style={{
            background: "linear-gradient(to right, #2a338a, #843b81)",
          }}
        >
          WELCOME TO RESEARCH CLUB UoN
        </section>
        <section className="sm:hidden">
          <div className="">
            Learn more about
            <div className="text-green-400">us</div>
            <Link href="/about" legacyBehavior>
              <a className="text-un">here</a>
            </Link>
          </div>
          <div>
            <img src="/." alt="" />
          </div>
        </section>
      </section>
    </main>
  );
}
