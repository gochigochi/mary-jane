import AccomodationPage from "../components/accomodationPage/AccomodationPage"
import { GetContextLanguage, GetLanguageContext } from '../context/LanguageContext'


const Accomodation = ({ res }) => {

  const { language } = GetLanguageContext()

  return (
    <AccomodationPage data={res.data.hotels.edges} bg={res.data.pages.edges[0].node.accomodation.headerBackgroundImage} language={language} />
  )
}

export default Accomodation

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 53}) {
          edges {
            node {
              accomodation {
                headerBackgroundImage {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
        hotels {
          edges {
            node {
                    address
                    distanceInMinutes
                    name
                    phone
                    website
                    featuredImage {
                      sourceUrl
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