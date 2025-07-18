import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import NavBar from "@/components/organisme/navigator/navbar";
import Footer from "@/components/organisme/sections/footer/footer";
import "./globals.css";


const raleway = Raleway ({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Website Testing JAMETOL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}>
        <NavBar/>
        <main className="bg-gray-50 min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
