import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Botyama - AI Automation & Web Solutions",
  description: "Premium web development and AI automation services. Get your custom website for just $50/month.",
  openGraph: {
    title: "Botyama - Build Your Digital Future",
    description: "Premium web development and AI automation services. All-in-one subscription.",
    url: "https://botyama.com",
    siteName: "Botyama",
    images: [
      {
        url: "https://botyama.com/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
