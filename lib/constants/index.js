import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
//these are the social media links to be called anywhere we have the social icons
export const socials = [
  {
    id: 0,
    title: "instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    id: 1,
    title: "facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    title: "twitter",
    href: "https://www.twitter.com/",
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    title: "youtube",
    href: "https://www.youtube.com/",
    icon: <FiYoutube />,
  },
];

//use these in the component Navbar.jsx
export const NavLinks = [
  { href: "/", key: "Home", text: "HOME" },
  { href: "/articles", key: "Articles", text: "ARTICLES" },
  { href: "/about", key: "About Us", text: "ABOUT US" },
  { href: "/contact", key: "Contact Us", text: "CONTACT US" },
  // { href: "/write", key: "Write", text: "Write" },
];

//use these in the component Footer.jsx
export const footerLinks = [
  {
    title: "Your Leaders",
    links: ["Chairman", "Vice Chair", "Secretary", "Treasurer"],
  },
  {
    title: "Contact Us",
    links: ["Emailing", "Telephone", "Chat Us"],
  },
  {
    title: "Follow Us",
    links: ["Youtube", "Twitter", "Facebook", "Instagram"],
  },
];

//use these in the Carousel.jsx and CarouselDescription.jsx
export const images = [
  {
    id: 1,
    src: "/website_pic1.jpeg",
    title: "Article 1",
    desc: "First article 1",
  },
  {
    id: 2,
    src: "/website_pic2.jpeg",
    title: "Article 2",
    desc: "Second article 2",
  },
  {
    id: 3,
    src: "/website_pic3.jpeg",
    title: "Article 3",
    desc: "Third article 3",
  },
  {
    id: 4,
    src: "/website_pic4.jpeg",
    title: "Article 4",
    desc: "Fourth article 4",
  },
  // {
  //   id: 5,
  //   src: "/cat 4.jpg",
  //   title: "Article 5",
  //   desc: "Fifth article 5",
  // },
  // {
  //   id: 6,
  //   src: "/horse 1.jpg",
  //   title: "Article 6",
  //   desc: "Sixth article 6",
  // },
  // {
  //   id: 7,
  //   src: "/horse 2.jpg",
  //   title: "Article 7",
  //   desc: "Seventh article 7",
  // },
  // {
  //   id: 8,
  //   src: "/dolphin 1.jpg",
  //   title: "Article 8",
  //   desc: "Eighth article 8",
  // },
];

export const articleImages = [
  {
    id: 1,
    src: "/room 1.jpg",
    title: "room 1",
    desc: "room 1",
  },
];
