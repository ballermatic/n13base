import { NextSeo, NextSeoProps } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../../next-seo.config'; // Default settings

export default async function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'Factory',
    description: 'Creating molecules here',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
