import SmallCta from '../../buttons/SmallCta'
import SmallCtaPink from '../../buttons/SmallCtaPink'
import {
    Section,
    Inner,
    Title,
    Grid,
    Card,
    ImgContainer,
    Img,
    CardTitle,
    Text,
    ButtonsContainer,
    ButtonContainer,
} from './Elements'

const GeneralCards = ({ content }) => {

    const cards = Object.keys(content.cards).map(key => {
        return { ...content.cards[key]}
    })

    return (
        <Section>
            <Inner>
                <Title>{content.title}</Title>
                <Grid>
                    {
                        cards.map(card => {
                            return(
                                <Card key={card.text}>
                                    <ImgContainer>
                                        <Img src={card.image.sourceUrl} alt={card.image.altText} fill />
                                        <CardTitle>{card.title}</CardTitle>
                                    </ImgContainer>
                                    <Text>{card.text}</Text>
                                </Card>
                            )
                        })
                    }
                </Grid>
                <ButtonsContainer>
                    <ButtonContainer href={content.cta.url}>
                        <SmallCta>{content.cta.text}</SmallCta>
                    </ButtonContainer>
                    <ButtonContainer href={content.ctaTwo.url}>
                        <SmallCtaPink>{content.ctaTwo.text}</SmallCtaPink>
                    </ButtonContainer>
                </ButtonsContainer>
            </Inner>
        </Section>
    )
}

export default GeneralCards