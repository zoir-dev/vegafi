import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import favicon from '/public/images/logo.png'

export const metadata: Metadata = {
  title: "Vega Fi",
  icons: {
    icon: ['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
