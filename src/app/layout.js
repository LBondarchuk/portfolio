import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider/TransitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Leonid Bondarchuk Portfolio App',
  description: 'the best portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
