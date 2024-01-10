import Head from 'next/head'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { GetLanguageContext } from '../context/LanguageContext'
import Hero from '../components/home/Hero/Hero'
import Exhibition from '../components/home/Exhibition/Exhibition'
import ForExhibitors from '../components/home/ForExhibitors/ForExhibitors'
import MediaReviews from '../components/home/MediaReviews/MediaReviews'
// import ExhibitorsSection from '../components/home/ExhibitorsSection/ExhibitorsSection'
import Rest from '../components/home/Rest/Rest'
import SponsorsSection from '../components/home/SponsorsSection/SponsorsSection'
import MediaSponsorsSection from '../components/home/MediaSponsorsSection/MediaSponsorsSection'
import Speakers from '../components/home/Speakers/Speakers'
import ReviewSection from '../components/home/ReviewsSection/ReviewSection'

export default function Home({ res }) {

  const { language } = GetLanguageContext()
  const [showThirdPartyWidgets, setShowThirdPartyWidgets] = useState(false)
  const [shouldShowExhibitors, setShouldShowExhibitors] = useState(false)

  const DynamicExhibitorsSection = dynamic(() => import('../components/home/ExhibitorsSection/ExhibitorsSection'), {
    ssr: false,
    loading: () => <></>
  })

  const DynamicImageGallery = dynamic(() => import('../components/home/ImageGallery/ImageGallery'), {
    ssr: false,
    loading: () => <></>
  })

  const DynamicTicketsSection = dynamic(() => import('../components/ticketsSection/TicketsSection'), {
    ssr: false,
    loading: () => <></>
  })

  const DynamicLocation = dynamic(() => import('../components/home/Location/Location'), {
    ssr: false,
    loading: () => <></>
  })

  return (
    <div>
      <Head>
        <title>Mary Jane Berlin - Cannabis Expo Germany | Festival | Conference</title>
        <meta name="description" content="Mary Jane Berlin - Cannabis Expo Germany | Festival | Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={res.data.pages.edges[0].node.hero} language={language} />
      <motion.div onViewportEnter={() => setShouldShowExhibitors(true)} />
      <Exhibition data={res.data.pages.edges[0].node.exhibition} language={language} />
      <ForExhibitors data={res.data.pages.edges[0].node.forExhibitors} language={language} />
      <MediaReviews data={res.data.mediaReviews.edges} content={res.data.pages.edges[0].node.mediaReviews} language={language} />
      {
        shouldShowExhibitors ? <DynamicExhibitorsSection data={res.data.exhibitors.edges} content={res.data.pages.edges[0].node.exhibitors} language={language} /> : null
      }
      <Rest />
      <SponsorsSection data={res.data.sponsors.edges} content={res.data.pages.edges[0].node.sponsorsSection} language={language} />
      <motion.div onViewportEnter={() => setShowThirdPartyWidgets(true)} />
      <MediaSponsorsSection data={res.data.mediaSponsors.edges} content={res.data.pages.edges[0].node.mediaSponsorsSection} language={language} />
      <Speakers data={res.data.speakers.edges} content={res.data.pages.edges[0].node.speakersSection} language={language} />
      <ReviewSection data={res.data.reviews.edges} content={res.data.pages.edges[0].node.peopleReviewsSection} />
      {
        showThirdPartyWidgets ? <DynamicImageGallery media={res.data.homeImagesGallery.edges} content={res.data.pages.edges[0].node.imageGalleryCallToAction} language={language} /> : null
      }
      {
        showThirdPartyWidgets ? <DynamicTicketsSection /> : null
      }
      {
        showThirdPartyWidgets ? <DynamicLocation language={language} /> : null
      }
    </div>
  )
}


export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 2}) {
          edges {
            node {
              hero {
                subtitleEn
                dateEn
                monthEn
                yearEn
                subtitleDe
                dateDe
                monthDe
                yearDe
                counterDaysDe
                counterDaysEn
                counterHoursEn
                counterMinutesEn
                ctaEn
                counterHoursDe
                counterMinutesDe
                counterSecondsDe
                counterSecondsEn
                ctaDe
                ctaUrl
              }
              exhibition {
                titleEnHomeExhibitor
                textEnHomeExhibitor
                ctaEnHomeExhibitor
                ctaUrlEnHomeExhibitor
                titleDeHomeExhibitor
                textDeHomeExhibitor
                ctaDeHomeExhibitor
                ctaUrlDeHomeExhibitor
                imageGalleryHomeExhibitor {
                  exhibitorGallery1 {
                    sourceUrl
                    altText
                  }
                  exhibitorGallery2 {
                    sourceUrl
                    altText
                  }
                  exhibitorGallery3 {
                    altText
                    sourceUrl
                  }
                  exhibitorGallery4 {
                    sourceUrl
                    altText
                  }
                  exhibitorGallery5 {
                    sourceUrl
                    altText
                  }
                }
              }
              forExhibitors {
                titleForExhibitorsEn
                forExhibitorsTextEn
                forExhibitorsCtaEn
                forExhibitorsCtaUrlEn
                forExhibitorsFeaturesEn {
                  internationalExhibitorsEn {
                    icon {
                      altText
                      sourceUrl
                    }
                    num
                    text
                  }
                  productsEn {
                    icon {
                      altText
                      sourceUrl
                    }
                    num
                    text
                  }
                  visitorsEn {
                    icon {
                      altText
                      sourceUrl
                    }
                    num
                    text
                  }
                }
                titleForExhibitorsDe
                forExhibitorsTextDe
                forExhibitorsCtaDe
                forExhibitorsCtaUrlDe
                forExhibitorsFeaturesDe {
                  internationalExhibitorsDe {
                    icon {
                      altText
                      sourceUrl
                    }
                    num
                    text
                  }
                  productsDe {
                    icon {
                      altText
                      sourceUrl
                    }
                    num
                    text
                  }
                  visitorsDe {
                    icon {
                      altText
                      sourceUrl
                    }
                    num
                    text
                  }
                }
              }
              mediaReviews {
                mediaReviewsTitleDe
                mediaReviewsTitleEn
              }
              exhibitors {
                exhibitorsTitleEn
                exhibitorsTitleDe
                exhibitorsCtaTwoMobileDe {
                  text
                  url
                }
                exhibitorsCtaOneDe {
                  url
                  text
                }
                exhibitorsCtaOneEn {
                  text
                  url
                }
                exhibitorsCtaTwoDe {
                  text
                  url
                }
                exhibitorsCtaTwoEn {
                  text
                  url
                }
                exhibitorsCtaTwoMobileEn {
                  text
                  url
                }
              }
              sponsorsSection {
                sponsorsTitleEn
                sponsorsCtaEn {
                  title
                  url
                }
                sponsorsTitleDe
                sponsorsCtaDe {
                  title
                  url
                }
              }
              mediaSponsorsSection {
                mediaSponsorsContentEn {
                  title
                  button {
                    text
                    url
                  }
                }
                mediaSponsorsContentDe {
                  title
                  button {
                    text
                    url
                  }
                }
              }
              speakersSection {
                speakersContentEn {
                  title
                  cta {
                    text
                    url
                  }
                }
                speakersContentDe {
                  title
                  cta {
                    url
                    text
                  }
                }
              }
              peopleReviewsSection {
                reviewsTitle
              }
              imageGalleryCallToAction {
                galleryCtaButtonEn {
                  text
                  url
                }
                galleryCtaTextEn
                galleryCtaTextDe
                galleryCtaButtonDe {
                  text
                  url
                }
              }
            }
          }
        }

        mediaReviews {
          edges {
            node {
              url
              logo {
                sourceUrl
              }
            }
          }
        }

        exhibitors(first: 50) {
          edges {
            node {
              logo {
                altText
                sourceUrl
                title
              }
              website
              uri
              isWhiteLogo
            }
          }
        }

        sponsors {
          edges {
            node {
              title
              logo {
                altText
                sourceUrl
              }
              website
              uri
            }
          }
        }

        mediaSponsors {
          edges {
            node {
              logo {
                altText
                sourceUrl
              }
              website
            }
          }
        }

        speakers(first: 1000) {
          edges {
            node {
              name
              surname
              profession
              hideOnLandingPage
              image {
                altText
                sourceUrl
              }
            }
          }
        }

        homeImagesGallery {
          edges {
            node {
              media {
                altText
                sourceUrl
              }
              uri
              url
              video
              videoUrl
            }
          }
        }

        reviews {
          edges {
            node {
              name
              text
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