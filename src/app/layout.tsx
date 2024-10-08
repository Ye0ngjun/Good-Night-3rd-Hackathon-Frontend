import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_componenets/Navbar";
import AdminBtn from "./_componenets/AdminBtn";

export const metadata: Metadata = {
  title: "Good-Night-3rd-Hackathon",
  description: "Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AdminBtn />
        {children}
      </body>
    </html>
  );
}
