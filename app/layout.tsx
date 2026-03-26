import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LocaleProvider } from "@/components/layout/locale-provider";
import { copy, defaultLocale } from "@/lib/copy";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: copy[defaultLocale].meta.title,
  description: copy[defaultLocale].meta.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
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
