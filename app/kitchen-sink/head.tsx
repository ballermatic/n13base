import { NextSeo, NextSeoProps } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../../next-seo.config'; // Default settings

export default async function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'The Kitchen Sink',
    description: 'A dump of useful raw HTML 5 elements',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
