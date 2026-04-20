import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { bricolage } from "./fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.url),
  title: {
    default: `${siteSettings.name} — Empowering Youth, Expanding Opportunity`,
    template: `%s · ${siteSettings.shortName}`,
  },
  description: siteSettings.description,
  openGraph: {
    type: "website",
    siteName: siteSettings.name,
    title: siteSettings.name,
    description: siteSettings.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.name,
    description: siteSettings.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-masaf-cream text-masaf-ink" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
