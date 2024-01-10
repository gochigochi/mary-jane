import SmallCta from '../buttons/SmallCta'
import {
    HeadSection,
    HeadBg,
    Content,
    Inner,
    Title,
    PosterContainer,
    Poster,
    ButtonContainer,
} from './Elements'

const CannabisFestivalPage = ({ data, language }) => {

    console.log(data)

    const content = language === 'en' ?
        {
            titleOne: data.titleOneEn || '',
            titleTwo: data.titleTwoEn || '',
            cta: data.ctaFestivalEn || '',
        } :
        {
            titleOne: data.titleOneDe || '',
            titleTwo: data.titleTwoDe || '',
            cta: data.ctaFestivalDe || '',
        }

    return (
        <>
            <HeadSection>
                <HeadBg src="/temp/contact-media-header-image.png" alt="" fill />
            </HeadSection>
            <Content>
                <Inner>
                    {
                        data.reverse().map(poster => {

                            const title = language === "en" ? poster.node.titleEn : poster.node.titleDe || ''
                            const cta = poster.node.callToActionUrl.length !== 0 ? language === "en" ? poster.node.callToActionTextEn : poster.node.callToActionTextDe : null

                            return (
                                <>
                                    <Title>{title}</Title>
                                    <PosterContainer>
                                        <Poster src={poster.node.posterImage.sourceUrl} alt={poster.node.posterImage.altText} fill />
                                    </PosterContainer>
                                    {
                                        cta !== null ?
                                            <ButtonContainer href={poster.node.callToActionUrl} target="_blank" rel="noopener noreferrer">
                                                <SmallCta>{cta}</SmallCta>
                                            </ButtonContainer> : null
                                    }
                                </>
                            )
                        })
                    }
                </Inner>
            </Content>
        </>
    )
}

export default CannabisFestivalPage