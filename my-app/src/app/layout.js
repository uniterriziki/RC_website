//This will be the duplicated layout of the website passing in components and children

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UON Research Club",
  description: "UON Research Club",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
