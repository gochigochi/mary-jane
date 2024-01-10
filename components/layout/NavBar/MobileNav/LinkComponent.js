import { useState } from 'react'
import Link from 'next/link'
import {
    LinkContainer,
    FakeLink,
    SubLinkContainer,
} from './Elements'

const LinkComponent = ({ link, isActive, setActive }) => {

    const handleClick = () => {

        if (isActive === link.url) {
            setActive('')
        } else {
            setActive(link.url)
        }
    }

    return (
        <LinkContainer opened={isActive === link.url}>
            {
                link.dropdown !== undefined ?
                    <FakeLink opened={isActive === link.url} onClick={handleClick}>
                        {isActive === link.url ? '-' : '+'} {link.title}
                    </FakeLink> :
                    <Link href={link.url} >
                        {link.title}
                    </Link>
            }
            {
                link.dropdown?.map(subLink => {
                    return (
                        <SubLinkContainer key={subLink.title}>
                            {
                                subLink.title === "Tickets" || subLink.title === "Cannabis Cup"?
                                <a href={subLink.url} target="_blank" rel="noopener noreferrer">
                                    {subLink.title}
                                </a> :
                                <Link href={subLink.url}>{subLink.title}</Link>
                            }
                        </SubLinkContainer>
                    )
                })
            }
        </LinkContainer>
    )
}

export default LinkComponent