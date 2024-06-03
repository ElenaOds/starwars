import { Inter } from "next/font/google";
import { Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from './loading';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Star Wars",
  description: "Star Wars heroes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Suspense fallback={<Loader />}>
        {children}
        </Suspense>
        <Footer/>
        </body>
    </html>
  );
}
