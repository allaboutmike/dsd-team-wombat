import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wombat Admin Page",
  description:
    "This is a basic admin page for access control page based on facial recognition service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <main className="min-h-full">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
