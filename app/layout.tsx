import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Abdul Latif Siyam | Software Developer",
  description: "Portfolio of Md. Abdul Latif Siyam, a software developer building reliable products with .NET and modern frontend technologies.",
};

export const viewport = {
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><link rel="preload" as="image" href="/background.webp" fetchPriority="high" /></head>
      <body>{children}</body>
    </html>
  );
}
