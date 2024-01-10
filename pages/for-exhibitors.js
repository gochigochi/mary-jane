import ForExhibitorsPage from '../components/forExhibitorsPage/ForExhibitorsPage'
import { GetLanguageContext } from '../context/LanguageContext'

const ForExhibitors = ({ res }) => {

  const { language } = GetLanguageContext()
  
  
  const content = language === 'en' ? res.data.pages.edges[0].node.forExhibitorsPage.forExhibitorsContentEn : res.data.pages.edges[0].node.forExhibitorsPage.forExhibitorsContentDe

  console.log(res)

  return (
    <ForExhibitorsPage content={content} />
  )
}

export default ForExhibitors


export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 834}) {
          edges {
            node {
              forExhibitorsPage {
                forExhibitorsContentEn {
                  features {
                    one {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    two {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    three {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    four {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    five {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    six {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  generalInfo {
                    text
                    title
                    subtitle
                    image {
                      altText
                      sourceUrl
                    }
                    ctaTwo {
                      text
                      url
                    }
                    ctaOne {
                      text
                      url
                    }
                  }
                  headerBg {
                    altText
                    sourceUrl
                  }
                  location {
                    subtitle
                    text
                    title
                    cta {
                      text
                      url
                    }
                    images {
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
                  onboarding {
                    subtitle
                    title
                    steps {
                      one
                      two
                      three
                      four
                      five
                    }
                  }
                }
                forExhibitorsContentDe {
                  features {
                    one {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    two {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    three {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    four {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    five {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    six {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  generalInfo {
                    text
                    title
                    subtitle
                    image {
                      altText
                      sourceUrl
                    }
                    ctaTwo {
                      text
                      url
                    }
                    ctaOne {
                      text
                      url
                    }
                  }
                  headerBg {
                    altText
                    sourceUrl
                  }
                  location {
                    subtitle
                    text
                    title
                    cta {
                      text
                      url
                    }
                    images {
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
                  onboarding {
                    subtitle
                    title
                    steps {
                      one
                      two
                      three
                      four
                      five
                    }
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