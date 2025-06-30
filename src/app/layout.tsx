import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: 'Mark Girgis - Software Engineer',
    template: '%s | Mark Girgis'
  },
  description: 'Software Engineer with ECE Master\'s focused on building scalable backend systems, CLI tools, and full-stack experiences. Passionate about everything from frontend to blockchain development and Linux kernel drivers.',
  keywords: [
    'Mark Girgis',
    'varagos',
    'Software Engineer',
    'Backend Engineer', 
    'Full Stack Developer',
    'Electrical Computer Engineering',
    'JavaScript',
    'TypeScript',
    'Python',
    'Go',
    'Blockchain Development',
    'Linux Kernel',
    'CLI Tools',
    'Athens',
    'Greece'
  ],
  authors: [{ name: 'Mark Girgis' }],
  creator: 'Mark Girgis',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://varagos.dev',
    siteName: 'Mark Girgis',
    title: 'Mark Girgis - Software Engineer',
    description: 'Software Engineer with ECE Master\'s focused on building scalable backend systems, CLI tools, and full-stack experiences.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Mark Girgis - Software Engineer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Girgis - Software Engineer',
    description: 'Software Engineer focused on backend systems, CLI tools, and full-stack development.',
    // images: ['/og-image.jpg'],
    creator: '@MarkosGirgis', // Add if you have Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add after setting up Google Search Console
  },
  alternates: {
    canonical: 'https://varagos.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
