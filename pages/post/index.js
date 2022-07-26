import { useRouter } from 'next/router'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomepagePost = () => {

  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <main>
        
        <h3 style={{ minHeight: 70 }}>Index Post</h3>
    </main>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default HomepagePost
