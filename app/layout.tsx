import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const vazir = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: {
    template: 'نکست بلاگ - %s',
    default: 'نکست بلاگ',
  },
  description: 'نکست بلاگ ساخته شده توسط نکست‌جی‌اس',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir='rtl' lang='fa-Ir'>
      <body className={vazir.className}>
        <Navbar />
        <div className='flex min-h-dvh flex-col justify-between'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
