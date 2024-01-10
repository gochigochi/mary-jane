import { useState, useEffect } from "react"
import { GetLanguageContext } from "../../context/LanguageContext"
import {
    Button,
    DropdownBox,
    DropdownContainer,
    DropdownItem,
    FlagContainer,
    Flag,
    Arrow,
} from "./Elements"

const LanguageDropdown = ({ setOpenedMenu }) => {

    const { language, setLanguage } = GetLanguageContext()
    const [active, setActive] = useState(language)
    const [opened, setOpened] = useState(false)
    const languages = [
        {
            src: "/icons/flags/en.webp",
            value: "en",
        },
        {
            src: "/icons/flags/de.png",
            value: "de",
        },
    ]

    useEffect(() => {
        const activeLang = languages.find(lang => lang.value === language)
        setActive(activeLang)
    }, [])

    const handleOpen = () => setOpened(!opened)

    const changeLanguage = (value) => {

        setLanguage(value)

        setOpened(!opened)

        setActive(languages.find(lng => lng.value === value))
    }
    
    return (
        <DropdownContainer opened={opened}>
            <Button onClick={handleOpen}>
                <FlagContainer>
                    <Flag src={active.src} />
                </FlagContainer>
                <Arrow opened={opened} />
            </Button>
            <DropdownBox opened={opened}>
                {
                    languages
                    .filter(lng => lng.value !== active.value)
                    .map(lng => {
                        return(
                            <DropdownItem key={lng.value} onClick={() => setOpenedMenu(false)}>
                                <FlagContainer onClick={() => changeLanguage(lng.value)}>
                                    <Flag src={lng.src} alt={lng.value} fill sizes="15vw"/>
                                </FlagContainer>
                            </DropdownItem>
                        )
                    })
                }
            </DropdownBox>
        </DropdownContainer>
    )
}

export default LanguageDropdown