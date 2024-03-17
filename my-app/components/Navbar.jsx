import { NavLinks } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";

//import AuthProviders from "./AuthProviders.jsx";
// import { getCurrentUser } from "@/lib/session";
//import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  //const session = await getCurrentUser();

  return (
    <nav className="bg-white h-20 p-0 shadow md:flex md:items-end md:justify-between ">
      <span className="text-2xl font-[Poppins] cursor-pointer px-6">
        <Link href="/">
          <p>RC UON Logo</p>
          {/* <Image src="/logo.svg" width={115} height={43} alt="RC-UON" /> */}
        </Link>
      </span>

      <div className="pb-9 gap-10 px-40">
        <ul className="md:flex hidden text-small gap-7 justify-end ">
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
            className=" px-2 rounded-lg hover:text-red-500 duration-500 hover:shadow-xl bg-indigo-200"
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
