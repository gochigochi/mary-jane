import FurnitureRentalPage from '../components/furnitureRentalPage/FurnitureRentalPage'
import { GetLanguageContext } from '../context/LanguageContext'

const FurnitureRentalAndHostesses = ({ res }) => {

  const { language } = GetLanguageContext()

  const content = language === 'en' ?
    res.data.pages.edges[0].node.furnitureRentalAndHostesses.furnitureContentEn :
    res.data.pages.edges[0].node.furnitureRentalAndHostesses.furnitureContentDe

  const hostContent = language === 'en' ?
    res.data.pages.edges[0].node.furnitureRentalAndHostesses.hostessesContentEn :
    res.data.pages.edges[0].node.furnitureRentalAndHostesses.hostessesContentDe

  const rawGallery = res.data.pages.edges[0].node.furnitureRentalAndHostesses.furnitureRentalImageGallery
  const gallery = Object.keys(rawGallery).map(key => {
    return { ...rawGallery[key] }
  })

  const hostRawGallery = res.data.pages.edges[0].node.furnitureRentalAndHostesses.hostessesImageGallery
  const hostGallery = Object.keys(hostRawGallery).map(key => {
    return { ...hostRawGallery[key] }
  })

  return (
    <FurnitureRentalPage gallery={gallery} content={content} hostContent={hostContent} hostGallery={hostGallery} bg={res.data.pages.edges[0].node.furnitureRentalAndHostesses.headerBackgroundImage}/>
  )
}

export default FurnitureRentalAndHostesses

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 547}) {
          edges {
            node {
              furnitureRentalAndHostesses {
                headerBackgroundImage {
                  altText
                  sourceUrl
                }
                furnitureRentalImageGallery {
                  one {
                    altText
                    sourceUrl
                  }
                  two {
                    altText
                    sourceUrl
                  }
                  three {
                    altText
                    sourceUrl
                  }
                }
                furnitureContentEn {
                  title
                  subtitle
                  shortText
                  address
                  details {
                    phoneOne
                    phoneTwo
                    mail
                    website
                  }
                  bottomTitle
                }
                furnitureContentDe {
                  title
                  subtitle
                  shortText
                  address
                  details {
                    phoneOne
                    phoneTwo
                    mail
                    website
                  }
                  bottomTitle
                }
                hostessesContentEn {
                  title
                  shortText
                  address
                  details {
                    phoneOne
                    mail
                    website
                  }
                }
                hostessesContentDe {
                  title
                  shortText
                  address
                  details {
                    phoneOne
                    mail
                    website
                  }
                }
                hostessesImageGallery {
                  one {
                    altText
                    sourceUrl
                  }
                  two {
                    altText
                    sourceUrl
                  }
                  three {
                    altText
                    sourceUrl
                  }
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