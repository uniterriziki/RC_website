//This will be the duplicated layout of the website passing in components and children

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "components/Header";

//for SEO
export const metadata = {
  title: {
    default: "UON Research Club", //applied defaults in case we need to pass a more specific title later
    template: "%s - UON Research Club",
  },
  description: "UON Research Club", //this is shown if the web link is pasted in other websites
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
