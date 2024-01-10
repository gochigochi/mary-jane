import {
    Section,
    Inner,
    Title,
    ButtonsContainer,
    Button,
    IconContainer,
    Icon,
} from './Elements'

const SectionsButtons = () => {

    return (
        <Section>
            <Inner>
                {/* <Title>{content.exhibitorsPage.buttonsSection.title}</Title>
                    <ButtonsContainer>
                        {
                            content.exhibitorsPage.buttonsSection.buttons.map(item => {
                                return(
                                    <Button
                                        href={item.href}
                                    >
                                        <IconContainer>
                                            <Icon 
                                                src={item.src} 
                                                alt={item.title}
                                                fill
                                            />
                                        </IconContainer>
                                        {item.title}
                                    </Button>
                                )
                            })
                        }
                    </ButtonsContainer> */}
            </Inner>
        </Section>
    )
}

export default SectionsButtons