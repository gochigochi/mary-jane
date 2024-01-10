import { useState } from 'react'
import LanguageDropdown from '../../../languageDropdown/LanguageDropdown'
import LinkComponent from './LinkComponent'
import {
    MenuContainer,
    List,
    DropdownContainer,
} from './Elements'

const MobileNav = ({ links, opened, setOpened }) => {

    const [isActive, setActive] = useState('')

    return (
        <MenuContainer opened={opened}>
            <List>
                {
                    links.map(link => {
                        return (
                            <LinkComponent link={link} setActive={setActive} isActive={isActive}/>
                        )
                    }
                    )
                }              
            </List>
            <DropdownContainer>
                <LanguageDropdown setOpenedMenu={setOpened}/>
            </DropdownContainer>
        </MenuContainer>
    )
}

export default MobileNav