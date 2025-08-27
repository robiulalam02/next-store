import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import Providers from "./providers";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Store",
  description: "Ecommerce product buy & sale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ThemeProvider>
            <Navbar />
            <main className="min-h-screen max-w-screen-xl mx-auto">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
