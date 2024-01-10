import SmallCta from '../../buttons/SmallCta'
import SmallCtaPink from '../../buttons/SmallCtaPink'
import {
    Section,
    Inner,
    Title,
    Subtitle,
    ButtonsContainer,
    ButtonContainer,
} from './Elements'

const FooterCta = ({ content }) => {

    return (
        <Section>
            <Inner>
                <Title>{content.title}</Title>
                <Subtitle>{content.subtitle}</Subtitle>
                <ButtonsContainer>
                    <a href={content.button1.url} target="_blank" rel="noopener noreferrer">
                        <SmallCta>
                            {content.button1.text}
                        </SmallCta>
                    </a>
                    <ButtonContainer href={content.button2.url}>
                        <SmallCtaPink>
                            {content.button2.text}
                        </SmallCtaPink>
                    </ButtonContainer>
                </ButtonsContainer>
            </Inner>
        </Section>
    )
}

export default FooterCta