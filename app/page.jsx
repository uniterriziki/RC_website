//THIS WILL BE THE HOMEPAGE OF THE APP
import "tailwindcss/tailwind.css";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main className="bg-blue-200">
      <Carousel />
    </main>
  );
}
