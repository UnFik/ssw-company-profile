import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ScrollToTop } from "@/components/scrollToTop";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Bisnis Syariah",
    "PT BEST",
    "Smart Sinergy World",
    "Go Berkah No Riba",
    "Bantu Umat bebas hutang, tanpa riba",
    "PT Best TVOne",
  ],
  authors: [
    {
      name: "Fikri.dev",
      url: "https://fikri-dev.vercel.app/",
    },
  ],
  creator: "Fikri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@fikriilham109",
  },
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
      <body
        className={cn(
          "font-poppins antialiased select-none",
          poppins.className
        )}
      >
        <NextTopLoader color="#C5A32B" />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
