import { NavLinks } from "../constants";
import Image from "next/image";
import Link from "next/link";

//import AuthProviders from "./AuthProviders.jsx";
// import { getCurrentUser } from "@/lib/session";
//import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  //const session = await getCurrentUser();

  return (
    <nav className="bg-red-200 p-2 shadow md:flex md:items-end md:justify-between">
      <span className="text-2xl font-[Poppins] cursor-pointer px-6">
        <Link href="/">
          <p>RC UON Logo</p>
          {/* <Image src="/logo.svg" width={115} height={43} alt="RC-UON" /> */}
        </Link>
      </span>

      <div className="flex-1 flexStart gap-10 px-40">
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link
              className="hover:text-red-500 duration-500 hover:shadow-xl"
              href={link.href}
              key={link.key}
            >
              {" "}
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4 px-20 hover:text-red-500 duration-500 hover:shadow-xl">
        {/* {session?.user ? (
          <>
          <ProfileMenu session={session}/> */}
        <Link href="/create-article">Create An Article</Link>
        {/* </>
        ) : (
          <AuthProviders />
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
