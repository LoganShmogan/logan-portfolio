import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Figtree } from "next/font/google";
import NavBar from "@/app/components/navBar";
import Footer from "@/app/components/footer";
import "./globals.css";

// Header / button font
const chakraPetch = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

// Body font
const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://loganportfolio.savepoint.co.nz"),
  title: {
    default: "Logan Young | Software Engineer & Founder of Save Point",
    template: "%s | Logan Young",
  },
  description:
    "Portfolio of Logan Young, a New Zealand software engineer and the founder of Save Point, building web apps, mobile apps, business systems and connected devices.",
  authors: [{ name: "Logan Young" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${chakraPetch.variable} ${figtree.variable}`}>
      <body className="antialiased">
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
