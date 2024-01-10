import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import {
    Nav,
    Links,
    LinkContainer,
    MegaMenu,
    MenuLinkContainer,
} from './Elements'
import { GetLanguageContext } from '../../../context/LanguageContext'

const MainNav = ({ scrolled, links }) => {

    const { language } = GetLanguageContext()
    const [megaMenuOpen, setMegaMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('')

    const handleMouseEnter = (id) => {
        setMegaMenuOpen(true)
        setActiveLink(id)
    }

    const handleMouseLeave = () => {
        setMegaMenuOpen(false)
        setActiveLink('')
    }

    const megaMenuMotion = {
        initial: {
            opacity: 0,
            y: 2,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .05,
            }
        },
        exit: {
            y: 2,
            opacity: 0,
        }
    }

    return (
        <Nav scrolled={scrolled}>
            <Links>
                {
                    links.map(link => {
                        return (
                            <LinkContainer
                                key={link.title}
                                scrolled={scrolled}
                                active={activeLink === link.title}
                                onMouseEnter={() => handleMouseEnter(link.title)}
                                onMouseLeave={() => handleMouseLeave()}
                            >
                                <Link href={link.url}>
                                    {link.title}
                                </Link>
                                {
                                    link.dropdown ?
                                        <>
                                            {
                                                link.title === activeLink && megaMenuOpen ?
                                                    <AnimatePresence>
                                                        <MegaMenu
                                                            scrolled={scrolled}
                                                            variants={megaMenuMotion}
                                                            initial="initial"
                                                            animate="animate"
                                                            exit="exit"
                                                        >
                                                            {
                                                                link.dropdown.map(link => {
                                                                    return (
                                                                        <MenuLinkContainer key={link.title}>
                                                                            {
                                                                                link.title === "Tickets" || link.title === "Cannabis Cup"?
                                                                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                                                    {link.title}
                                                                                </a> :
                                                                                <Link href={link.url}>
                                                                                    {link.title}
                                                                                </Link>
                                                                            }
                                                                        </MenuLinkContainer>
                                                                    )
                                                                }
                                                                )
                                                            }
                                                        </MegaMenu>
                                                    </AnimatePresence> : null
                                            }
                                        </> : null
                                }
                            </LinkContainer>
                        )
                    })
                }
            </Links>
        </Nav>
    )
}

export default MainNav