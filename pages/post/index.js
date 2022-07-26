import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomepagePost = () => {

  const router = useRouter()
  const { t } = useTranslation('common')
  const [data, setDetail] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/subsidize', {
        params: {},
      });
      setDetail(res.data);
    };

    fetchData();
  }, []);

  return (
    <main>
        
        <h3 style={{ minHeight: 70 }}>Index Post</h3>

        <div>{data && JSON.stringify(data)}</div>
    </main>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default HomepagePost
