import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Google Font: Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Kulmi Digital Agency",
  description:
    "We're Digital Specialists helping ambitious brands in Africa and globally push boundaries and drive impact.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${plusJakartaSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
