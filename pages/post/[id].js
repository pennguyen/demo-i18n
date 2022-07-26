import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Post() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { id } = router.query;

  return (
    <div>
      <h3 style={{ minHeight: 70 }}>Post {id}</h3>
      <h2> {t('back-to-home')}</h2>
    </div>
  );
}

export default Post

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true
})
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
