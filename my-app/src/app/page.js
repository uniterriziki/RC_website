//THIS WILL BE THE HOMEPAGE OF THE APP

import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold">Carousel Here</h1>
      <Carousel />
    </main>
  );
}
