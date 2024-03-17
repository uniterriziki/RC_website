import Link from "next/link";

//This is the custom 404 page
export default function NotFound() {
  return (
    <main>
      <h1 className="text-3xl">Error, page not found</h1>
      <p>
        Go back to the <Link href="/">Homepage </Link>{" "}
      </p>
    </main>
  );
}
