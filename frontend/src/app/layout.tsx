import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body className='h-full flex flex-col'>
        <div className='flex-grow flex flex-col'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
