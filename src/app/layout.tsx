import type { Metadata } from "next";
import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto",
  subsets: ["latin"],
  axes: ["GRAD", "opsz", "slnt", "wdth", "XTRA", "XOPQ", "YOPQ", "YTAS", "YTDE", "YTFI", "YTLC", "YTUC"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CineVeo AI · Product Requirement Document",
  description:
    "Comprehensive PRD outlining the vision, feature set, and security architecture for the CineVeo AI mobile camera platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoFlex.variable} antialiased bg-[#050507] text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
