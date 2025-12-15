import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Blockchain Developer | Zero Knowledge & Smart Contracts",
  description: "Blockchain Developer with 3+ years of experience specializing in Smart Contracts with Solidity and privacy dApps using Zero Knowledge proofs. Avalanche Technical Ambassador.",
  keywords: ["Blockchain", "Developer", "Solidity", "Smart Contracts", "Zero Knowledge", "ZK", "Avalanche", "Web3"],
  authors: [{ name: "DZ" }],
  openGraph: {
    title: "Blockchain Developer Portfolio",
    description: "Blockchain Developer specializing in Smart Contracts and Zero Knowledge",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
