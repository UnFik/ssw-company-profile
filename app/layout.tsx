import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"], display: "swap", variable: "--font-mr",
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Smart Sinergy World",
  description: "Go Berkah No Riba!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader color="#C5A32B" />
        {children}
      </body>
    </html>
  );
}
