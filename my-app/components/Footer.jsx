import React from "react";
import Link from "next/link";
import { footerLinks } from "../constants";

const FooterColumn = ({ title, links }) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          {/* <Image src="/logo-purple.svg" width={115} height={38} alt="RC UON" /> */}

          <p className="text-red-400 text-start text-sm font-normal mt-5 max-w-xs">
            RC UON, meet your medicine students
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-3">
            <Link href={"/"} className=" h-fit px-2 rounded-lg hover:text-red-500 duration-500 hover:shadow-xl bg-indigo-200">Read an Article</Link>
            <Link href={"/"} className=" h-fit px-2 rounded-lg hover:text-red-500 duration-500 hover:shadow-xl bg-indigo-200">Submit an Article</Link>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />

          </div>
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />

          </div>
        </div>
      </div>

      <div className=" flexBetween bg-indigo-300 footer_copyright">
        <p className="text-center">@ 2024 RC-UON. All Rights Reserved</p>

      </div>
    </footer>
  );
};

export default Footer;
