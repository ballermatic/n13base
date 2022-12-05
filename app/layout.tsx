import { Inter_Tight } from '@next/font/google';
import './globals.css';
import Footer from './components/footer';
import Masthead from './components/masthead';

// Global font family specified here rather than globals.css but font weight specified in globals.css
const globalFont = Inter_Tight({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className={globalFont.className}>
        <Masthead />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
