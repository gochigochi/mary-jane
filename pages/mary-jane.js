import MaryJanePage from "../components/maryJane/MaryJanePage"


const MaryJane = ({ res }) => {

    return (
        <MaryJanePage res={res} />
    )
}

export default MaryJane

export async function getServerSideProps(context) {

    const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query NewQuery {
                pages(where: {id: 1182}) {
                    edges {
                        node {
                                maryJane {
                                maryJaneContentEn {
                                    hero {
                                    text
                                    subtitle
                                    copy
                                    backgroundImage {
                                        altText
                                        sourceUrl
                                        }
                                    }
                                    cards {
                                        card1 {
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                        card2 {
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                        card3 {
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                        card4 {
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                    }
                                    card {
                                        title
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                    }
                                    footerCta {
                                        title
                                        subtitle
                                        button1 {
                                            text
                                            url
                                        }
                                        button2 {
                                            text
                                            url
                                        }
                                    }
                                    journeyTitle
                                    journey {
                                        card1 {
                                          year
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                        card2 {
                                          year
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                        card3 {
                                          year
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                        card4 {
                                          year
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                        card5 {
                                          year
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                        card6 {
                                          year
                                          text
                                          image {
                                            altText
                                            sourceUrl
                                          }
                                        }
                                    }
                                }

                                maryJaneContentDe {
                                  hero {
                                  text
                                  subtitle
                                  copy
                                  backgroundImage {
                                      altText
                                      sourceUrl
                                      }
                                  }
                                  cards {
                                      card1 {
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                      card2 {
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                      card3 {
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                      card4 {
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                  }
                                  card {
                                      title
                                      text
                                      image {
                                        altText
                                        sourceUrl
                                      }
                                  }
                                  footerCta {
                                      title
                                      subtitle
                                      button1 {
                                          text
                                          url
                                      }
                                      button2 {
                                          text
                                          url
                                      }
                                  }
                                  journeyTitle
                                  journey {
                                      card1 {
                                        year
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                      card2 {
                                        year
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                      card3 {
                                        year
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                      card4 {
                                        year
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                      card5 {
                                        year
                                        text
                                        image {
                                          altText
                                          sourceUrl
                                        }
                                      }
                                      card6 {
                                        year
                                        text
                                        image {
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