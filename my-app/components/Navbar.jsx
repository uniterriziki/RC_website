// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="grid-cols-3 items-center hidden w-full px-4 text-sm font-medium tracking-wide lg:grid lg:gap-4 lg:px-6 xl:text-base">
//       <Link className="flex items-center font-bold" href="#">
//         RC UON
//         {/* describe RC UON logo <Image /> */}
//       </Link>
//       <div className="flex justify-end">
//         <Link
//           className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-200"
//           href="#"
//         >
//           Home
//         </Link>
//         <Link
//           className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-200"
//           href="#"
//         >
//           About Us
//         </Link>
//         <Link
//           className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-200"
//           href="#"
//         >
//           Contact Us
//         </Link>
//         <Link
//           className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:text-gray-900 focus-visible:ring-1 focus-visible:ring-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-200"
//           href="#"
//         >
//           Sign Up
//         </Link>
//       </div>
//     </nav>
//   );
// }

// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

import { NavLinks } from "../constants";
import Image from "next/image";
import Link from "next/link";

//import AuthProviders from "./AuthProviders.jsx";
// import { getCurrentUser } from "@/lib/session";
//import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  //const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="RC-UON" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {" "}
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {/* {session?.user ? (
          <>
          <ProfileMenu session={session}/> */}
        <Link href="/create-project">Create An Article</Link>
        {/* </>
        ) : (
          <AuthProviders />
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
