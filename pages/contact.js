import ContactPage from '../components/contactPage/ContactPage'
import { GetLanguageContext } from '../context/LanguageContext'

const Contact = ({ res }) => {

  const { language } = GetLanguageContext()

  return (
    <ContactPage data={res.data.pages.edges[0].node.contact} language={language}/>
  )
}

export default Contact

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 165}) {
          edges {
            node {
              contact {
                contactTitleDe
                contactTitleEn
                contentEn {
                  addressItem {
                    title
                    items {
                      itemZero {
                        icon {
                          altText
                          sourceUrl
                        }
                        text
                      }
                      itemOne {
                        icon {
                          altText
                          sourceUrl
                        }
                        text
                      }
                      itemTwo {
                        icon {
                          altText
                          sourceUrl
                        }
                        text
                      }
                      itemThree {
                        icon {
                          altText
                          sourceUrl
                        }
                        text
                      }
                      itemFour {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                    }
                  }
                  marketingItem {
                    title
                    items {
                      itemOne {
                        icon {
                          altText
                          sourceUrl
                        }
                        text
                      }
                    }
                  }
                  conferenceItem {
                    title
                    items {
                      itemOne {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemTwo {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                    }
                  }
                  pressItem {
                    title
                    items {
                      itemOne {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemTwo {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                    }
                  }
                }
                contentDe {
                  addressItem {
                    title
                    items {
                      itemZero {
                        icon {
                          altText
                          sourceUrl
                        }
                        text
                      }
                      itemOne {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemTwo {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemThree {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemFour {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemSix {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                    }
                  }
                  conferenceItem {
                    items {
                      itemOne {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemTwo {
                        icon {
                          altText
                          sourceUrl
                        }
                        text
                      }
                    }
                    title
                  }
                  marketingItem {
                    title
                    items {
                      itemOne {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                    }
                  }
                  pressItem {
                    title
                    items {
                      itemOne {
                        icon {
                          altText
                          sourceUrl
                        }
                        text
                      }
                      itemTwo {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                    }
                  }
                  addressAltItem {
                    title
                    items {
                      itemOne {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemTwo {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
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