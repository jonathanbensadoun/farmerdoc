import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Animations avec Next.js, Tailwind CSS et Framer Motion',
  description: 'Apprenez à créer des animations modernes avec Next.js, Tailwind CSS et Framer Motion grâce à des exemples interactifs et faciles à copier.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}