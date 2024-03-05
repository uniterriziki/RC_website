//use these in the component Navbar.jsx
export const NavLinks = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/articles", key: "Articles", text: "Articles" },
  { href: "/about", key: "About Us", text: "About Us" },
  { href: "/contact", key: "Contact Us", text: "Contact Us" },
  // { href: "/create-article", key: "Create Article", text: "Create Article" },
];

//use these in the component Footer.jsx
export const footerLinks = [
  {
    title: "",
    links: ["Read an article", "Submit an article"],
  },
  {
    title: "Ex Footer title 1",
    links: ["Ex Footer link 1", "Ex Footer Link 1"],
  },
];

//use these in the Carousel.jsx and CarouselDescription.jsx
export const images = [
  {
    id: 1,
    src: "/image.png",
    title: "Article 1",
    desc: "First article 1",
  },
  {
    id: 2,
    src: "/image.png",
    title: "Article 2",
    desc: "Second article 2",
  },
];
