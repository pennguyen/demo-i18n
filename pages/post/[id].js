import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const values = {
  name: {vn: 'wellcome', jp: 'wellcome de'},
  value: '1000',
  type: 'fixed-amount',
  note: {vn: 'ghi chu', jp: 'note de'},
};

function Post() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { id } = router.query;
  const [data, setDetail] = useState()

  const insert = async () => {
    try {
      // create url
      const url = '/api/subsidize/';

      const res = await axios.post(url, values);

      console.log(res)
    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const res = await axios.get(`/api/subsidize/${id}`);
      setDetail(res.data);
    };

    fetchData();
  }, [id]);


  return (
    <div>
      <h3 style={{ minHeight: 70 }}>Post {id}</h3>
      <h2> {t('back-to-home')}</h2>
      <div>{data && JSON.stringify(data)}</div>
      <button onClick={insert}>Insert data </button>
    </div>
  );
}

export default Post

export async function getStaticPaths() {

  const ids = ['62e006b1ea3dab836c51eb48', '62e00703ea3dab836c51eb4a'];
  const paths = [];
  ids.forEach(id => {
    paths.push({params: { id }, locale: 'en'})
    paths.push({params: { id }, locale: 'de'})
  });
  return { paths, fallback: true };
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
