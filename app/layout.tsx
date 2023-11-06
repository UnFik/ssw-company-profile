import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700", "800"],
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
      <head>
        <meta
          name="google-site-verification"
          content="G1aDbgQxUyEvhpG5cvKPk8WkYOVM4jd7wRaq5tcmaCU"
        />
      </head>
      <body className={poppins.className}>
        <NextTopLoader color="#C5A32B" />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
