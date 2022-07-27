import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { baseUrl } from '../../utils/dbConnect';

const HomepagePost = ({listPost}) => {

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
        <h3 style={{ minHeight: 70 }}>List Post</h3>

        <div>{listPost && JSON.stringify(listPost)}</div>
    </main>
  )
}


export async function getStaticProps({ locale }){
  const res = await fetch(`${baseUrl}api/subsidize`)
  const posts = await res.json()

  return {
    props: {
      listPost: posts,
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}

export default HomepagePost
