import {
    Inner,
    Container,
    ImageContainer,
    Img,
    Content,
    CardTitle,
    CardText,
} from './Elements'

const Card = ({ content }) => {

    return (
        <Inner>
            <Container>
                <ImageContainer>
                    <Img src={content.image.sourceUrl} alt={content.image.altText} fill />
                </ImageContainer>
                <Content>
                    <CardTitle>{content.title}</CardTitle>
                    <CardText>{content.text}</CardText>
                </Content>
            </Container>
        </Inner>
    )
}

export default Card