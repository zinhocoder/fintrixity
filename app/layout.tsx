import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fintrixity",
  description: "Finance Solution in One Platform",
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

