import type { Metadata } from "next";
import { Manrope, Noto_Sans_TC } from "next/font/google";
import { LocaleProvider } from "@/components/providers/locale-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oreory Studio",
    template: "%s · Oreory Studio",
  },
  description:
    "Oreory Studio 專注於數位產品設計與影像創作，透過設計與故事，創造有價值的體驗。",
  openGraph: {
    title: "Oreory Studio",
    description:
      "打造數位產品，創造影像故事。Independent creative studio for digital products and film.",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${manrope.variable} ${notoSansTC.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
