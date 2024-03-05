//This will be the duplicated layout of the website passing in components and children

import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//for SEO
export const metadata = {
  title: "UON Research Club",
  description: "UON Research Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        {<Footer />}
      </body>
    </html>
  );
}
