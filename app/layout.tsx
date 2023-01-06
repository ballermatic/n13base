import './globals.scss';
import Footer from './components/footer';
import Masthead from './components/masthead';
import { NextSeo } from 'next-seo';
import { globalFont } from './utils/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* Used to be added by default, now we need to add manually */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
        {/* 
          Anything we add in layout will appear on EVERY PAGE. At present it can not be overridden lower down the tree.
          This can be useful for things like favicons, or other meta tags that are the same on every page. As noted here: https://github.com/garmeeh/next-seo/blob/HEAD/APP_DIRECTORY.md
        */}{' '}
        <NextSeo useAppDir={true} titleTemplate='%s | SiteName A' />
      </head>
      <body className={globalFont.className}>
        <Masthead />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
