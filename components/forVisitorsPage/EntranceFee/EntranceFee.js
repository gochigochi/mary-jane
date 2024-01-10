import {
    Inner,
    Title,
    Grid,
    Card,
    BoxOverTitle,
    BoxTitle,
    BoxSubtitle,
    Price,
    OfferText,
    OfferPrice,
} from './Elements'

const EntranceFee = ({ content }) => {

    const cards = Object.keys(content.items).map(key => {
        return { ...content.items[key] }
    })

    return (
        <Inner>
            <Title>{content.title}</Title>
            <Grid>
                {
                    cards.map(card => {
                        return (
                            <Card
                                href="https://maryjaneberlin.ticket.io/y7wu2yng/?"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BoxOverTitle>{card.subtitle}</BoxOverTitle>
                                <BoxTitle>{card.title}</BoxTitle>
                                <BoxSubtitle>{card.condition}</BoxSubtitle>
                                <Price>{card.price}</Price>
                                <OfferText>{card.offerTitle}</OfferText>
                                <OfferPrice>{card.offerPrice}</OfferPrice>
                            </Card>
                        )
                    })
                }
            </Grid>
        </Inner>
    )
}

export default EntranceFee