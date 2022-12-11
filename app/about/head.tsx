import { NextSeo, NextSeoProps } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../../next-seo.config'; // Default settings

export default async function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT, 
    title: 'About Page',
    description: 'This is an about page',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
