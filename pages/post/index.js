import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dbConnect from '../../utils/dbConnect'
import ModelSubsidize from '../../models/Subsidize';

const HomepagePost = ({posts}) => {

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

        <div>{posts && JSON.stringify(posts)}</div>
    </main>
  )
}
export async function getStaticProps({ locale }){
  await dbConnect();
  const data = await ModelSubsidize.find().lean();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}

export default HomepagePost
