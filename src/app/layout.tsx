import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-[#f2f2f2]">{children}</body>
    </html>
  );
}
