import { useRouter } from "next/router"
import ExhibitorDetailPage from "../../components/exhibitorDetailPage/ExhibitorDetailPage"

const ExhibitorDetail = ({ res }) => {

  const router = useRouter()

  const img = res.data.pages.edges[0].node.singleExhibitor.exhibitorPageHeaderImage

  const exhibitor = res.data.exhibitors.edges.find(ex => {
    return ex.node.uri.slice(0, ex.node.uri.length -1) === router.asPath
  })

  return <ExhibitorDetailPage data={exhibitor.node} img={img} />
}

export default ExhibitorDetail

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        exhibitors(first: 1000) {
          edges {
            node {
              logo {
                altText
                sourceUrl
              }
              website
              uri
              title
              website
              countryEn
              countryDe
              isWhiteLogo
            }
          }
        }

        pages(where: {id: 1546}) {
          edges {
            node {
              singleExhibitor {
                exhibitorPageHeaderImage {
                  altText
                  sourceUrl
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