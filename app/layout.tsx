import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Abdul Latif Siyam | Full-Stack Software Developer",
  description: "Portfolio of Md. Abdul Latif Siyam, a Full-Stack Software Developer specializing in ASP.NET, Angular, React, and cloud technologies. Expert in building scalable web and mobile applications.",
};

export const viewport = {
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/background.webp" fetchPriority="high" />
        <meta name="theme-color" content="#f47c5b" />
      </head>
      <body>{children}</body>
    </html>
  );
}
