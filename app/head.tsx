import { NextSeo, NextSeoProps } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../next-seo.config';

export default async function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'Home Page',
    description: 'This is the home page',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
