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
      <span className="text-2xl font-[Poppins] cursor-pointer px-6">
        <Link href="/">
          <p>RC UON Logo</p>
          {/* <Image src="/logo.svg" width={115} height={43} alt="RC-UON" /> */}
        </Link>
      </span>

      <div className="justify-between gap-10 px-46">
        <ul className="md:flex hidden text-base gap-6 justify-end ">
          {NavLinks.map((link) => (
            <Link
              className="hover:text-red-500 duration-500 hover:shadow-xl"
              href={link.href}
              key={link.key}
            >
              {link.text}
            </Link>
          ))}
          <Link
            className=" px-4 flex text-white text-semibold hover:text-red-500 duration-500 hover:shadow-xl bg-blue-400 rounded-xl"
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
