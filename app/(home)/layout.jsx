import { Inter } from "next/font/google";
import "../globals.css";
import Topsection from "./components/homepage/topsection";
import Navbar from "./components/homepage/navbar";
import FooterSection from "./components/homepage/footersection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "College of Applied Science Thamarassery",
  description: "CAS Thamarassery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topsection />
        <Navbar />
        <div className="min-h-[400px]">{children}</div>
        <FooterSection />
      </body>
    </html>
  );
}
