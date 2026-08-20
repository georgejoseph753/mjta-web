import type { Metadata } from "next";
import { Cormorant_Garamond, Maven_Pro } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const mavenPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MJTA – Messianisch-Jüdische Theologische Akademie",
  description:
    "Messianisch-Jüdische Theologische Akademie – akademische theologische Ausbildung.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${mavenPro.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
