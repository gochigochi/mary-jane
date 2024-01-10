import { GetLanguageContext } from '../context/LanguageContext'
import SponsoringPage from '../components/sponsoringPage/SponsoringPage'

const sponsoring = ({ res }) => {

  const { language } = GetLanguageContext()

  const sponsoringContent = language === 'en' ?
    res.data.pages.edges[0].node.sponsoringPage.sponsoringContentEn :
    res.data.pages.edges[0].node.sponsoringPage.sponsoringContentDe

  const foyerContent = language === 'en' ?
    res.data.pages.edges[0].node.sponsoringPage.foyerContentEn :
    res.data.pages.edges[0].node.sponsoringPage.foyerContentDe

  const rawGallery = res.data.pages.edges[0].node.sponsoringPage.sponsoringImageGallery
  const gallery = Object.keys(rawGallery).map(key => {
    return { ...rawGallery[key] }
  })

  const rawFoyerGallery = res.data.pages.edges[0].node.sponsoringPage.foyerImageGallery
  const foyerGallery = Object.keys(rawFoyerGallery).map(key => {
    return { ...rawFoyerGallery[key] }
  })

  const files = {
    packages: res.data.pages.edges[0].node.sponsoringPage.sponsoringpackagespdf,
    foyerOne: res.data.pages.edges[0].node.sponsoringPage.foyerOnePdf,
    foyerTwo: res.data.pages.edges[0].node.sponsoringPage.foyerTwoPdf,
  }

  const bg = res.data.pages.edges[0].node.sponsoringPage.sponsoringHeaderBackgroundImage

  return (
    <SponsoringPage 
      gallery={gallery} 
      foyerGallery={foyerGallery} 
      sponsoringContent={sponsoringContent} 
      foyerContent={foyerContent} 
      bg={bg} 
      files={files}
      />
  )
}

export default sponsoring


export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 584}) {
          edges {
            node {
              sponsoringPage {
                sponsoringImageGallery {
                  imageOne {
                    altText
                    sourceUrl
                  }
                  imageTwo {
                    altText
                    sourceUrl
                  }
                  imageThree {
                    altText
                    sourceUrl
                  }
                  imageFour {
                    altText
                    sourceUrl
                  }
                }
                sponsoringContentEn {
                  title
                  text
                  cta {
                    title
                    url
                  }
                }
                sponsoringContentDe {
                  title
                  text
                  cta {
                    title
                    url
                  }
                }
                sponsoringHeaderBackgroundImage {
                  altText
                  sourceUrl
                }
                foyerContentDe {
                  title
                  text
                  cta {
                    title
                    url
                  }
                }
                foyerContentEn {
                  text
                  title
                  cta {
                    title
                    url
                  }
                }
                foyerImageGallery {
                  imgOne {
                    altText
                    sourceUrl
                  }
                  imgTwo {
                    altText
                    sourceUrl
                  }
                  imgThree {
                    altText
                    sourceUrl
                  }
                }
                sponsoringpackagespdf
                foyerOnePdf
                foyerTwoPdf
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