import React, {useEffect, useState} from 'react';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <main>
        
        <h3 style={{ minHeight: 70 }}>Index Post</h3>

        <div>{data && JSON.stringify(data)}</div>
    </main>
  )
}
