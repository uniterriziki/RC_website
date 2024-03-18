//This will be the duplicated layout of the website passing in components and children

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "../components/Providers"; //everything in the site is wrapped with providers but doesn't make everything a client component.

//for SEO
export const metadata = {
  title: "UON Research Club",
  description: "UON Research Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
