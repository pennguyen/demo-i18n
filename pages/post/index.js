import React, {useEffect, useState} from 'react';
import useSWR from 'swr'
import axios from 'axios';
import { useRouter } from 'next/router'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { baseUrl } from '../../utils/dbConnect';

const fetcher = (url) => fetch(url).then((res) => res.json())
const HomepagePost = ({listPost}) => {
  const { data, error } = useSWR('/api/post', fetcher)


  const router = useRouter()
  const { t } = useTranslation('common')

  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <main>
        
        <h3 style={{ minHeight: 70 }}>Index Post</h3>

        <div>{data && JSON.stringify(data)}</div>
    </main>
  )
}


export async function getStaticProps({ locale }){
  // const res = await fetch(`${baseUrl}api/subsidize`)
  // const posts = await res.json()

  return {
    props: {
      // listPost: posts,
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}

export default HomepagePost
