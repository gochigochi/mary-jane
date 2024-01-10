import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { GetLanguageContext } from '../../../context/LanguageContext'
import Link from 'next/link'
import MainNav from './MainNav'
import SecondaryNav from './SecondaryNav'
// import MobileNav from './MobileNav/MobileNav'
import Hamburguer from './MobileNav/Hamburguer'
import {
  Container,
  Inner,
  Left,
  Right,
  LogoContainer,
  Logo,
} from './Elements'

const NavBar = () => {

  const router = useRouter()
  const pathname = router.pathname
  const [opened, setOpened] = useState(false)
  const [scrollPos, setScrollPos] = useState(false)
  const { language } = GetLanguageContext()

  const DynamicMobileMenu = dynamic(() => import('./MobileNav/MobileNav'), {
    ssr: false,
    loading: () => <></>
  })

  const enLinks = [
    {
      title: 'Sponsoring',
      url: '/sponsoring',
    },
    {
      title: 'Exhibitors 2023',
      url: 'exhibitors',
    },
    {
      title: 'For exhibitors',
      url: '/for-exhibitors',
      dropdown: [
        {
          title: 'General info',
          url: '/for-exhibitors',
        },
        {
          title: 'Exhibitors guide',
          url: '/guides',
        },
        {
          title: 'Stand inquiry',
          url: '/stand-inquiry',
        },
        {
          title: 'Furniture rental & Hostesses',
          url: 'furniture-rental-hostesses',
        },
        {
          title: 'Accomodation',
          url: '/accomodation',
        },
        {
          title: 'Cannabis Cup',
          url: 'https://www.jackherercup.de/'
        }
      ]
    },
    {
      title: 'For visitors',
      url: '/for-visitors',
      dropdown: [
        {
          title: 'General info',
          url: '/for-visitors',
        },
        {
          title: 'Cannabis festival',
          url: '/cannabis-festival',
        },
        {
          title: 'Cannabis conferences',
          url: '/conferences',
        },
        {
          title: 'Tickets',
          url: 'https://maryjaneberlin.ticket.io/y7wu2yng/',
        },
      ]
    },
    {
      title: 'About us',
      url: '/mary-jane',
    },
    {
      title: 'Contact',
      url: '/contact',
      dropdown: [
        {
          title: 'Contact us',
          url: '/contact',
        },
        {
          title: 'Media',
          url: '/media',
        },
      ]
    },
  ]

  const deLinks = [
    {
      title: 'Sponsoring',
      url: '/sponsoring',
    },
    {
      title: 'Austeller 2023',
      url: '/exhibitors',
    },
    {
      title: 'Für Aussteller',
      url: '/for-exhibitors',
      dropdown: [
        {
          title: 'Allgemeine Info',
          url: '/for-exhibitors',
        },
        {
          title: 'Aussteller Guide',
          url: '/guides',
        },
        {
          title: 'Standanfrage',
          url: '/stand-inquiry',
        },
        {
          title: 'Mietmöbel & Hostessen',
          url: '/furniture-rental-hostesses',
        },
        {
          title: 'Unterkunft',
          url: '/accomodation',
        },
        {
          title: 'Cannabis Cup',
          url: 'https://www.jackherercup.de/'
        }
      ]
    },
    {
      title: 'Für Besucher',
      url: '/for-visitors',
      dropdown: [
        {
          title: 'Allgemeine Info',
          url: '/for-visitors',
        },
        {
          title: 'Cannabis Festival',
          url: '/cannabis-festival',
        },
        {
          title: 'Cannabis Konferenz',
          url: '/conferences',
        },
        {
          title: 'Tickets',
          url: 'https://maryjaneberlin.ticket.io/y7wu2yng/',
        },
      ]
    },
    {
      title: 'Über uns',
      url: '/mary-jane',
    },
    {
      title: 'Kontakt',
      url: '/contact',
      dropdown: [
        {
          title: 'Kontakt',
          url: '/contact',
        },
        {
          title: 'Media',
          url: '/media',
        },
      ]
    },
  ]

  useEffect(() => {
    setOpened(false)
  }, [pathname])


  const links = language === "en" ? enLinks : deLinks

  const toTop = () => scrollTo(top)
  const handleScroll = () => setScrollPos(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navState = () => {
    if (scrollPos > 0.1) return true
    return false
  }

  return (
    <Container scrolled={navState()}>
      <Inner>
        <Left>
          {
            pathname === '/' ?
              <LogoContainer onClick={toTop} scrolled={navState()}>
                {
                  navState() ?
                    <Logo src="/logos/logo-light-green.png" alt='brand logo' priority fill sizes="25vw"/> :
                    <Logo src="/logos/logo-white.png" alt='logo' priority fill sizes="25vw"/>
                }
              </LogoContainer> :
              <Link href='/'>
                <LogoContainer scrolled={navState()}>
                  {
                    navState() ?
                      <Logo src="/logos/logo-light-green.png" alt='brand logo' priority fill sizes="25vw"/> :
                      <Logo src="/logos/logo-white.png" alt='logo' priority fill sizes="25vw"/>
                  }
                </LogoContainer>
              </Link>
          }
          <MainNav scrolled={navState()} links={links} />
        </Left>
        <Right>
          <SecondaryNav scrolled={navState()} />
          <Hamburguer
            opened={opened}
            setOpened={setOpened}
            scrolled={navState()}
          />
        </Right>
        {
          opened ?
            <DynamicMobileMenu
              links={links}
              scrolled={scrollPos > 0.1}
              opened={opened}
              setOpened={setOpened}
            /> : null
        }
        
      </Inner>
    </Container>
  )
}

export default NavBar