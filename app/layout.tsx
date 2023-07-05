import ModalProvider from "../provider/ModalProvider";
import ToastProvider from "../provider/ToastProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "ECommerce Store",
  description: "ECommerce Store Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <ModalProvider />
        <ToastProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
