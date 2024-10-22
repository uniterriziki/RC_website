import React from "react";
import Link from "next/link";
import { footerLinks } from "../lib/constants";
import { socials } from "../lib/constants";
import Image from "next/image";

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-white">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal text-slate-300">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Socials = ({ id, link, icon }) => (
  <div>
    <ul className="grid grid-cols-4 p-2 hover:cursor-pointer gap-6 text-3xl text-red-500">
      {socials.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          target="_blank"
          className="hover:bg-white hover:text-red-900 rounded-xl p-2 hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
        >
          {link.icon}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="mt-24 bg-slate-600">
      <div className="ml-6 flex flex-col gap-12 w-full">
        <div className="mt-2 flex items-start flex-col">
          <Image src="/medical logo.jpg" width={115} height={38} alt="RC UON" />

          <p className="text-white text-start text-lg font-normal mt-5 max-w-xs">
            Meet your medical students
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <div className="justify-between flex-col gap-4">
            <FooterColumn
              title={footerLinks[0].title}
              links={footerLinks[0].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
        </div>
        <div className="w-full border border-white h-1/2 bg-white text-white"></div>
        <div className="flex gap-4">
          <Socials />
        </div>
      </div>

      {/* <div className=" flexBetween">
        <p className="text-center italic text-sm font-bold">
          ©2024 RC-UON. All Rights Reserved
        </p>
      </div> */}
      <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 RC UON. All rights reserved.
        </p>
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
