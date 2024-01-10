import { 
    Section,
    Inner,
    Grid,
    Card,
    ImageContainer,
    Img,
    CardText,
} from "./Elements"


const Cards = ({ content }) => {

    const cards = Object.keys(content).map(key => {
        return { ...content[key] }
    })

    return (
        <Section>
            <Inner>
                <Grid>
                    {
                        cards.map(card => {
                            return(
                                <Card key={card.text}>
                                    <ImageContainer>
                                        <Img src={card.image.sourceUrl} alt={card.image.altText} fill />
                                    </ImageContainer>
                                    <CardText>{card.text}</CardText>
                                </Card>
                            )
                        })
                    }
                </Grid>
            </Inner>
        </Section>
    )
}

export default Cards