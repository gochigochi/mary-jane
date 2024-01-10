import { GetLanguageContext } from '../context/LanguageContext'
import StandInquiryPage from '../components/standInquiryPage/StandInquiryPage'

const StandInquiry = ({ res }) => {

  const { language } = GetLanguageContext()
  const content = language === 'en' ? res.data.pages.edges[0].node.standInqui.contentEn : res.data.pages.edges[0].node.standInqui.contentDe

  return (
    <StandInquiryPage content={content} />
  )
}

export default StandInquiry

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 808}) {
          edges {
            node {
              standInqui {
                contentEn {
                  title
                  bgImage {
                    altText
                    sourceUrl
                  }
                }
                contentDe {
                  bgImage {
                    altText
                    sourceUrl
                  }
                  title
                }
              }
            }
          }
        }
      }
      `
    })
  })

  const json = await res.json()

  return {
    props: {
      res: json
    }
  }
}