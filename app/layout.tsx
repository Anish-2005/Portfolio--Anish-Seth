import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { ReactNode } from "react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://portfolio-anish-seth-1.vercel.app'),
  title: "Anish Seth - Web Developer & UI/UX Designer",
  description: "Professional portfolio of Anish Seth - A passionate Full Stack Web Developer and UI/UX Designer specializing in modern web technologies and elegant design solutions.",
  keywords: "Anish Seth, Web Developer, UI/UX Designer, Full Stack Developer, React, Next.js, Frontend Developer",
  authors: [{ name: "Anish Seth" }],
  creator: "Anish Seth",
  openGraph: {
    title: "Anish Seth - Web Developer & UI/UX Designer",
    description: "Professional portfolio showcasing modern web development and design expertise",
    url: "https://portfolio-anish-seth-1.vercel.app/",
    siteName: "Anish Seth Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Anish Seth - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Seth - Web Developer & UI/UX Designer",
    description: "Professional portfolio showcasing modern web development and design expertise",
    creator: "@AnishSeth170734",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="classic-background">
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            className="custom-toast"
          />
          <main className="min-h-screen relative mx-auto px-4 sm:px-6 lg:px-8 max-w-full lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white overflow-x-hidden">
            <Navbar />
            <div className="classic-content w-full">
              {children}
            </div>
            <ScrollToTop />
          </main>
          <Footer />
        </div>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM ?? ""} />
    </html>
  );
}
