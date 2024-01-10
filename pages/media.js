import { useEffect, useState } from 'react'
import MediaPage from "../components/mediaPage/MediaPage"
import { GetLanguageContext } from "../context/LanguageContext"

const Media = ({ res }) => {

  const { language } = GetLanguageContext()
  const content = language === 'en' ? res.data.pages.edges[0].node.me.contentEn : res.data.pages.edges[0].node.me.contentDe

  return (
    <MediaPage content={content}/>
  )
}

export default Media

export async function getServerSideProps(context) {

    const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query NewQuery {
          pages(where: {id: 384}) {
            edges {
              node {
                me {
                  contentEn {
                    contact {
                      title
                      details {
                        name
                        position
                        mail
                      }
                    }
                    lists {
                      accreditationList {
                        title
                        list {
                          itemOne
                          itemTwo
                          itemThree
                          itemFour
                          itemFive
                          itemSix
                        }
                      }
                      informationList {
                        title
                        list {
                          itemOne
                          itemTwo
                          itemThree
                          itemFour
                          itemFive
                          itemSix
                          itemSeven
                        }
                      }
                    }
                    title
                    text
                    note
                  }
                  contentDe {
                    contact {
                      title
                      details {
                        name
                        position
                        mail
                      }
                    }
                    lists {
                      accreditationList {
                        title
                        list {
                          itemOne
                          itemTwo
                          itemThree
                          itemFour
                          itemFive
                          itemSix
                        }
                      }
                      informationList {
                        title
                        list {
                          itemOne
                          itemTwo
                          itemThree
                          itemFour
                          itemFive
                          itemSix
                          itemSeven
                        }
                      }
                    }
                    title
                    text
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