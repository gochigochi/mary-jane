import React from 'react'
import Link from 'next/link'
import LanguageDropdown from '../../languageDropdown/LanguageDropdown'
import {
    Nav,
    TicketsBtn,
    StandBtn,
    DropdownContainer,
} from './Elements'

const SecondaryNav = ({ scrolled }) => {

    return (
        <Nav scrolled={scrolled}>
            <Link href="https://maryjaneberlin.ticket.io/y7wu2yng/" target="_blank" rel="noopener noreferrer">
                <TicketsBtn
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 1 }}
                    transition={{ type: "spring", bounce: .5 }}
                >
                    Get tickets
                </TicketsBtn>
            </Link>
            <Link href="/stand-inquiry">
                <StandBtn
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 1 }}
                    transition={{ type: "spring", bounce: .5 }}
                >
                    Stand inquiry
                </StandBtn>
            </Link>
            <DropdownContainer>
                <LanguageDropdown />
            </DropdownContainer>
        </Nav>
    )
}

export default SecondaryNav