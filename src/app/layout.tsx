import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
