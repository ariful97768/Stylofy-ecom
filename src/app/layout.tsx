import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Stylofy",
  description:
    "Discover your style - modern, affordable, and timeless fashion for every occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-[#f2f2f2]">
        <header>
          <Navbar />
        </header>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
