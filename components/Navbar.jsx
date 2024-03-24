import { NavLinks } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

//import AuthProviders from "./AuthProviders.jsx";
// import { getCurrentUser } from "@/lib/session";
//import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  //const session = await getCurrentUser();

  return (
    <nav className="bg-white h-16 md:flex md:items-end md:justify-between ">
      <div className="ml-10">
        <Link href="/">
          <Image
            src={"/medical logo.jpg"}
            height={115}
            width={85}
            alt="Medical Club Logo"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="justify-between gap-10 px-46">
        <ul className="md:flex hidden text-sm gap-6 justify-end ">
          {NavLinks.map((link) => (
            <Link
              className="text-black hover:text-blue-300 rounded-xl p-2 duration-500 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              href={link.href}
              key={link.key}
            >
              {link.text}
            </Link>
          ))}
          <Link
            className="h-6 px-4 flex text-blue-400 text-bold hover:text-blue-800 duration-500 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-blue-400 rounded-xl"
            href={"/signup"}
          >
            Sign Up
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
