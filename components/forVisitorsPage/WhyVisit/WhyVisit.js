import SmallCta from "../../buttons/SmallCta"
import {
    Inner,
    Section,
    Title,
    Grid,
    ButtonContainer,
    ButtonsContainer,
    Card,
    BgImgContainer,
    Img,
    CardText,
    ImgOverlay,
} from "./Elements"


const WhyVisit = ({ content }) => {

    const cards = Object.keys(content.cards).map(key => {
        return { ...content.cards[key] }
    })

    return (
        <Section>
            <Inner>
                <Title>{content.title}</Title>
                <Grid>
                    {
                        cards.map(card => {
                            return(
                                <Card key={card.backgroundImage.sourceUrl}>
                                    <BgImgContainer>
                                        <Img src={card.backgroundImage.sourceUrl} alt={card.backgroundImage.altText} fill />
                                        <ImgOverlay />
                                        <CardText>{card.text}</CardText>
                                    </BgImgContainer>
                                </Card>
                            )
                        })
                    }
                </Grid>
            </Inner>
            <ButtonsContainer>
                <ButtonContainer href={content.cta.url}>
                    <SmallCta>{content.cta.text}</SmallCta>
                </ButtonContainer>
            </ButtonsContainer>
        </Section>
    )
}

export default WhyVisit