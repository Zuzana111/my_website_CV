import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LocaleProvider } from "@/components/layout/locale-provider";
import { copy, defaultLocale } from "@/lib/copy";
import { siteMeta } from "@/lib/site-data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: copy[defaultLocale].meta.title,
  description: copy[defaultLocale].meta.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: copy[defaultLocale].meta.title,
    description: copy[defaultLocale].meta.description,
    url: siteMeta.url,
    siteName: "Zuzana Labs",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: copy[defaultLocale].meta.title,
    description: copy[defaultLocale].meta.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0Z8QWXQD9P" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0Z8QWXQD9P');
            `
          }}
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <LocaleProvider>
          <Header />
          <main className="page-shell py-8 sm:py-10 lg:py-12">
            <div className="content-column space-y-16 pb-16">{children}</div>
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
