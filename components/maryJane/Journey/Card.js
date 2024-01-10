import { useSwiperSlide } from 'swiper/react'
import {
    CardContainer,
    ImageContainer,
    Img,
    Overlay,
    Year,
    Text
} from './Elements'

const Card = ({ content }) => {

    const thisSlide = useSwiperSlide()

    return (
        <CardContainer active={thisSlide.isActive}>
            <ImageContainer>
                <Img src={content.image.sourceUrl} alt={content.image.altText} fill />
                <Overlay />
                <Year>{content.year}</Year>
            </ImageContainer>
            <Text>{content.text}</Text>
        </CardContainer>
    )
}

export default Card