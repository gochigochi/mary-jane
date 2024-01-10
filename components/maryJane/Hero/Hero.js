import {
    HeroSection,
    HeroBg,
    Overlay,
    FooterOverlay,
    Inner,
    Content,
    Subtitle,
    Copy,
    Text,
} from './Elements'

const Hero = ({ content }) => {

    return (
        <HeroSection>
            <HeroBg src={content.backgroundImage.sourceUrl} alt="" fill />
            <Overlay />
            <FooterOverlay />
            <Inner>
                <Content>
                    <Subtitle>{content.subtitle}</Subtitle>
                    <Copy>{content.copy}</Copy>
                    <Text>{content.text}</Text>
                </Content>
            </Inner>
        </HeroSection>
    )
}

export default Hero