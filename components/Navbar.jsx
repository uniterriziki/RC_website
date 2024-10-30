import { NavLinks } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  return (
    <nav className="bg-primary-dark h-20 md:flex md:items-end md:justify-between">
      <div className="h-full mt-2 ml-4">
        <Link href="/">
          <Image
            src={"/black logo.jpeg"}
            height={300}
            width={90}
            alt="Medical Club Logo"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="justify-between gap-4 px-20 mb-6">
        <ul className="md:flex hidden text-sm gap-40 justify-end">
          {NavLinks.map((link) => (
            <Link
              className="text-white hover:text-secondary bg-secondary-light hover:bg-slate-100 font-semibold rounded-xl px-4 pb-2 pt-2 duration-500 hover:shadow-[0_3px_10px_#cbd5e1]"
              href={link.href}
              key={link.key}
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
