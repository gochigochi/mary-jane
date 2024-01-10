import { useRouter } from "next/router"
import SponsorDetailPage from "../../components/sponsorDetailPage/SponsorDetailPage"

const ExhibitorDetail = ({ res }) => {

  const router = useRouter()

    console.log(res)

  const img = res.data.pages.edges[0].node.singleSponsor.headerBackgroundImage

//   const sponsor = res.data.exhibitors.edges.find(ex => {
//     return ex.node.uri.slice(0, ex.node.uri.length -1) === router.asPath
//   })

  const sponsor = res.data.sponsors.edges.find(sponsor => {
    return sponsor.node.uri.slice(0, sponsor.node.uri.length -1) === router.asPath
  })

  console.log(sponsor)

  return <SponsorDetailPage data={sponsor.node} img={img} />
}

export default ExhibitorDetail

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query NewQuery {
            sponsors {
            edges {
                node {
                uri
                website
                title
                logo {
                    altText
                    sourceUrl
                }
                }
            }
            }
            pages(where: {id: 2147}) {
            edges {
                node {
                singleSponsor {
                    headerBackgroundImage {
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