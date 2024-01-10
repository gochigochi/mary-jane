import ConferencesPage from "../components/conferencesPage/ConferencesPage"
import { GetLanguageContext } from '../context/LanguageContext'

const Conferences = (props) => {

  const { language } = GetLanguageContext()
  const content = language === 'en' ? props.res.data.pages.edges[0].node.conferences.contentEn :  props.res.data.pages.edges[0].node.conferences.contentDe
  const data = props.res.data.conferences.edges

  return (
    <ConferencesPage data={data} content={content} lng={language}/>
  )
}

export default Conferences

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        conferences(first: 1000) {
          edges {
            node {
              conferenceDate
              conferenceSpeakers {
                edges {
                  node {
                    surname
                    profession
                    professionEn
                    name
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
              conferenceTitle
              conferenceTitleEn
              description
              descriptionEn
              topic
              time
            }
          }
        }
        pages(where: {id: 2160}) {
          edges {
            node {
              conferences {
                contentEn {
                  title
                  bgimg {
                    altText
                    sourceUrl
                  }
                  topic
                  topics {
                    one {
                      label
                      value
                    }
                    two {
                      label
                      value
                    }
                    three {
                      label
                      value
                    }
                    four {
                      label
                      value
                    }
                  }
                }
                contentDe {
                  title
                  bgimg {
                    altText
                    sourceUrl
                  }
                  topic
                  topics {
                    one {
                      label
                      value
                    }
                    two {
                      label
                      value
                    }
                    three {
                      label
                      value
                    }
                    four {
                      label
                      value
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
