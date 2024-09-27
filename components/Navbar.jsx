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
    <nav className="bg-black h-16 md:flex md:items-end md:justify-between ">
      <div className="ml-10">
        <Link href="/">
          <Image
            src={"/black logo.jpeg"}
            height={110}
            width={90}
            alt="Medical Club Logo"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="justify-between gap-10 px-46">
        <ul className="md:flex hidden text-sm gap-40 justify-end ">
          {NavLinks.map((link) => (
            <Link
              className="text-white hover:text-blue-300 rounded-xl p-6 duration-500 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              href={link.href}
              key={link.key}
            >
              {link.text}
            </Link>
          ))}
          <Link
            className="h-6 px-4 flex text-white text-bold hover:text-blue-400 duration-500 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-blue-400 rounded-xl mt-5"
            href={"/signup"}
          >
            SIGN UP
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
