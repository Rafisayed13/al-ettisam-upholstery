import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './Navbar';

import FloatingContactButtons from '../components/FloatingContactButtons';
import ExternalScripts from './ExternalScripts';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Al Ettisam Car Seat Upholstery",
  description: "Al Ettisam provides expert car seat upholstery, custom leather interiors, and professional repairs in Dubai. Transform your car's interior with our quality craftsmanship.",
  metadataBase: new URL('https://alettisamcarseatsupholstery.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/logo.png', sizes: '250x250', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Al Ettisam Car Seat Upholstery",
    description: "Expert car seat upholstery, custom leather interiors, and professional repairs in Dubai.",
    url: "https://alettisamcarseatsupholstery.com",
    siteName: "Al Ettisam Car Seat Upholstery",
    images: [
      {
        url: "https://alettisamcarseatsupholstery.com/logo.png",
        width: 250,
        height: 250,
        alt: "Al Ettisam Car Seat Upholstery Logo",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen bg-gray-100`}
      >
        <Navbar />
        <ExternalScripts />
        <div className="w-full pt-20 md:pt-28">
          {children}
        </div>
        <FloatingContactButtons />
      </body>
    </html>
  );
}