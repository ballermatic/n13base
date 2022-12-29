import { Inter, Roboto_Flex } from '@next/font/google';

// Font families specified here
// app/globals.css controls font styles such as weight/axis/slant

export const globalFont = Inter({ subsets: ['latin'], variable: '--font-global' });

export const headingFont = Roboto_Flex({ subsets: ['latin'], variable: '--font-heading' });
