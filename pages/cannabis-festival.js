import { GetLanguageContext } from "../context/LanguageContext"
import CannabisFestivalPage from "../components/cannabisFestivalPage/CannabisFestivalPage"

const CannabisFestival = ({ res }) => {

  const { language } = GetLanguageContext()

  return (
    <CannabisFestivalPage data={res.data.posters.edges} language={language} />
  )
}

export default CannabisFestival

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
      posters(first: 1000) {
        edges {
          node {
            titleEn
            titleDe
            posterImage {
              altText
              sourceUrl
            }
            callToActionTextEn
            callToActionTextDe
            callToActionUrl
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