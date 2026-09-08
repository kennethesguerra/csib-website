import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CSIB | College of St. Ignatius Bulacan",
    template: "%s | CSIB",
  },
  description:
    "Official website of CSIB — College of St. Ignatius Bulacan. Explore our programs, history, vision, and how to get in touch.",
  icons: {
    icon: [{ url: "/csib.png", type: "image/png" }],
    apple: [{ url: "/csib.png", type: "image/png" }],
    shortcut: "/csib.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <Header />
        <main className="min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
