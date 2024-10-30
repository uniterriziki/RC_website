// import React from "react";
// import Link from "next/link";
// import { footerLinks } from "../lib/constants";
// import { socials } from "../lib/constants";
// import Image from "next/image";

// const FooterColumn = ({ title, links }) => (
//   <div className="flex flex-col gap-4">
//     {" "}
//     {/* Added gap for spacing */}
//     <h4 className="font-bold text-white text-lg">{title}</h4>
//     <ul className="flex flex-col gap-2 font-normal text-slate-300">
//       {links.map((link) => (
//         <Link
//           href="/"
//           key={link}
//           className="hover:text-red-500 transition duration-200"
//         >
//           {" "}
//           {/* Added hover effect */}
//           {link}
//         </Link>
//       ))}
//     </ul>
//   </div>
// );

// const Socials = () => (
//   <div>
//     <ul className="grid grid-cols-4 p-2 hover:cursor-pointer gap-6 text-3xl text-red-500">
//       {socials.map((link) => (
//         <Link
//           href={link.href}
//           key={link.title}
//           target="_blank"
//           className="hover:bg-slate-300 hover:text-red-900 rounded-xl p-2 transition duration-200 hover:shadow-[0_3px_10px_rgba(203,213,225,0.5)]"
//         >
//           {link.icon}
//         </Link>
//       ))}
//     </ul>
//   </div>
// );

// const Footer = () => {
//   return (
//     <footer className="mt-2 bg-primary-dark">
//       {" "}
//       {/* Changed to primary-dark */}
//       <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12 w-full">
//         {" "}
//         {/* Centered the content */}
//         <div className="mt-2 flex items-start flex-col">
//           {/* <Image src="/medical logo.jpg" width={115} height={38} alt="RC UON" /> */}
//           {/* <p className="text-white text-start text-lg font-normal mt-5 max-w-xs">
//             Meet your medical students
//           </p> */}
//         </div>
//         <div className="flex flex-wrap gap-16 justify-between">
//           {" "}
//           {/* Increased gap between columns */}
//           <FooterColumn
//             title={footerLinks[0].title}
//             links={footerLinks[0].links}
//           />
//           <FooterColumn
//             title={footerLinks[1].title}
//             links={footerLinks[1].links}
//           />
//           <FooterColumn
//             title={footerLinks[2].title}
//             links={footerLinks[2].links}
//           />
//         </div>
//         <div className="w-full border border-slate-300 h-1/2 bg-white text-white"></div>
//         <div className="flex gap-4">
//           <Socials />
//         </div>
//       </div>
//       <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-slate-300">
//         <p className="text-xs text-muted-foreground">
//           © 2024 RC UON. All rights reserved.
//         </p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <a className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </a>
//           <a className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </a>
//         </nav>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";
import { footerLinks, socials } from "../lib/constants";
import Image from "next/image";

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h4 className="font-bold text-white text-lg">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal text-slate-300">
      {links.map((link) => (
        <Link
          href="/"
          key={link}
          className="hover:text-red-500 transition duration-200"
        >
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Socials = () => (
  <div>
    <ul className="grid grid-cols-4 p-2 cursor-pointer gap-6 text-3xl text-slate-400">
      {" "}
      {/* Default slate color */}
      {socials.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          target="_blank"
          className="hover:bg-slate-300 hover:text-red-900 rounded-xl p-2 transition duration-200 hover:shadow-[0_3px_10px_rgba(203,213,225,0.5)]"
        >
          {link.icon}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-12 bg-primary-dark py-10">
      {" "}
      {/* Increased top margin and padding */}
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col text-white">
          {/* <Image src="/medical logo.jpg" width={115} height={38} alt="RC UON" /> */}
          {/* <p className="text-lg font-normal mt-5 max-w-xs">Meet your medical students</p> */}
        </div>
        <div className="flex flex-wrap gap-20 justify-around">
          {" "}
          {/* Centered columns and added spacing */}
          {footerLinks.map((section, index) => (
            <FooterColumn
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="w-full border-t border-slate-300 my-6"></div>{" "}
        {/* Updated styling for separator */}
        <div className="flex justify-center">
          <Socials />
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row py-4 w-full items-center border-t border-slate-300 text-slate-400">
        <p className="text-xs">© 2024 RC UON. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
