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

          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            RC UON, meet your medicine students
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
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
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@ 2024 RC-UON. All Rights Reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">214</span>
          members up to date
        </p>
      </div>
    </footer>
  );
};

export default Footer;
