import type { Metadata } from "next";
import { Chakra_Petch, Figtree } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "700",
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Logan Young | Full-Stack Developer",
  description:
    "Portfolio of Logan Young, a full-stack developer building web apps, systems and IoT solutions. BICT graduate, founder of Save Point.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.variable} ${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
