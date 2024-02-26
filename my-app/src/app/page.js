import Image from "next/image";
import Link from "next/link";
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <main>
      <h1>This is my stooooory</h1>
      <Link href={"/posts/first-post"}>first-post</Link>
    </main>

  );
}
