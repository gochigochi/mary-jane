import '../styles/globals.css'
import '../styles/home.css'
import Layout from '../components/layout/Layout'
import LanguageContext from '../context/LanguageContext'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {

  return(
    <LanguageContext>
        <AnimatePresence>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
    </LanguageContext>
  )
}

export default MyApp