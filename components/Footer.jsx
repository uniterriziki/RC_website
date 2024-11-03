import React from "react";
import Link from "next/link";
import { footerLinks, socials } from "../lib/constants";

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h4 className="font-bold text-white text-lg">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal text-slate-300">
      {links.map((link) => (
        <Link
          href="/"
          key={link}
          className="hover:bg-slate-300 hover:text-primary-dark transition duration-200 px-2"
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
          className="hover:bg-slate-300 hover:text-primary-dark rounded-xl p-2 transition duration-200 hover:shadow-[0_3px_10px_rgba(203,213,225,0.5)]"
        >
          {link.icon}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-12 bg-primary-light py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12 w-full">
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
        <div className="w-full border-t border-slate-300 my-2"></div>
        <div className="flex justify-center">
          <Socials />
        </div>
      </div>
      <div className="px-8 flex flex-col gap-2 sm:flex-row py-2 w-full items-center border-t border-slate-300 text-slate-400">
        <p className="text-xs text-slate-200 hover:text-primary-dark hover:bg-slate-300 hover:font-semibold">
          © 2024 RC UON. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs text-slate-200 hover:text-primary-dark hover:bg-slate-300 hover:font-semibold hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs text-slate-200 hover:text-primary-dark hover:bg-slate-300 hover:font-semibold hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
