import "@/styles/globals.css";
import { Metadata } from "next";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/header";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["zwel", "zwelhtetyan"],
  bookmarks: "zwel",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/en-US" },
  },
  openGraph: {
    title: {
      default: siteConfig.title,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    siteName: siteConfig.name,
    countryName: siteConfig.country,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: siteConfig.title,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    creator: "@zwel",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.shortcutIcon,
    apple: siteConfig.appleTouchIcon,
    other: {
      rel: "icon",
      url: siteConfig.shortcutIcon,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
