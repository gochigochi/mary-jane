import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectFade, Pagination } from 'swiper'
import SmallCta from '../buttons/SmallCta'
import SmallCtaPink from '../buttons/SmallCtaPink'
import SwiperButtons from './SwiperButtons/SwiperButtons'
import {
    HeadBg,
    HeadSection,
    Body,
    Inner,
    SectionHeader,
    Title,
    Subtitle,
    MainContent,
    HeaderButtonContainer,
    InnerSection,
    LeftContainer,
    Text,
    ButtonsContainer,
    ButtonContainer,
    RightContainer,
    Img,
    Grid,
    GridItem,
    GridIconContainer,
    GridIcon,
    GridText,
    LocationSection,
    LocationInner,
    LocationLeftContainer,
    LocationTitle,
    LocationSubtitle,
    LocationText,
    LocationButtonContainer,
    LocationRightContainer,
    BgPink,
    BgGreen,
    GalleryImage,
    ImageContainer,
    OnboardingTitle,
    OnboardingSubtitle,
    StepsContainer,
    StepContainer,
    StepNum,
    StepText,
    Line,
} from './Elements'

const ForExhibitorsPage = ({ content }) => {

    const swiperRef = useRef()
    const count = useRef(0)
    const features = Object.keys(content.features).map(key => {
        return { ...content.features[key] }
    })
    const imgGallery = Object.keys(content.location.images).map(key => {
        return { ...content.location.images[key] }
    })
    const steps = Object.keys(content.onboarding.steps).map(key => {
        return { ...content.onboarding.steps[key] }
    })

    return (
        <>
            <HeadSection>
                <HeadBg src={content.headerBg.sourceUrl} alt="" fill />
            </HeadSection>
            <Body>
                <Inner>
                    <SectionHeader>
                        <Title>{content.generalInfo.title}</Title>
                        <Subtitle>{content.generalInfo.subtitle}</Subtitle>
                    </SectionHeader>
                    <InnerSection>
                        <MainContent>
                            <LeftContainer>
                                <Text dangerouslySetInnerHTML={{ __html: content.generalInfo.text }} />
                            </LeftContainer>
                            <RightContainer>
                                <Img src={content.generalInfo.image.sourceUrl} alt={content.generalInfo.image.altText} fill />
                            </RightContainer>
                        </MainContent>
                            <ButtonsContainer>
                                <ButtonContainer href={content.generalInfo.ctaOne.url} target="_blank" rel="noopener noreferrer" >
                                    <SmallCta>{content.generalInfo.ctaOne.text}</SmallCta>
                                </ButtonContainer>
                                <ButtonContainer href={content.generalInfo.ctaTwo.url}>
                                    <SmallCtaPink>{content.generalInfo.ctaTwo.text}</SmallCtaPink>
                                </ButtonContainer>
                            </ButtonsContainer>
                    </InnerSection>
                    {/* FEATURES */}
                    <Grid>
                        {
                            features.map(feature => {
                                return (
                                    <GridItem key={feature.text}>
                                        <GridIconContainer>
                                            <GridIcon src={feature.icon.sourceUrl} alt={feature.icon.altText} fill />
                                        </GridIconContainer>
                                        <GridText dangerouslySetInnerHTML={{ __html: feature.text }} />
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                </Inner>
                {/* LOCATION */}
                <LocationSection>
                    <LocationInner>
                        <BgPink />
                        <BgGreen />
                        <LocationLeftContainer>
                            <LocationTitle>{content.location.title}</LocationTitle>
                            <LocationSubtitle>{content.location.subtitle}</LocationSubtitle>
                            <LocationText>{content.location.text}</LocationText>
                            <LocationButtonContainer href={content.location.cta.url} target="_blank" rel="noopener noreferrer">
                                <SmallCta>{content.location.cta.text}</SmallCta>
                            </LocationButtonContainer>
                        </LocationLeftContainer>
                        <LocationRightContainer>
                            <Swiper
                                ref={swiperRef}
                                spaceBetween={30}
                                effect={"fade"}
                                loop={true}
                                pagination={{ clickable: true }}
                                modules={[EffectFade, Pagination]}
                                className="sponsoringSwiper"
                            >
                                {
                                    imgGallery.map(slide => {
                                        return (
                                            <SwiperSlide key={slide.sourceUrl}>
                                                <ImageContainer>
                                                    <GalleryImage src={slide.sourceUrl} alt={slide.altText} fill />
                                                </ImageContainer>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <SwiperButtons swiperRef={swiperRef} />
                        </LocationRightContainer>
                    </LocationInner>
                </LocationSection>
                {/* How TO */}
                <Inner>
                    <OnboardingTitle>{content.onboarding.title}</OnboardingTitle>
                    <OnboardingSubtitle>{content.onboarding.subtitle}</OnboardingSubtitle>
                    <StepsContainer>
                        <Line />
                        <StepContainer>
                            <StepNum>1</StepNum>
                            <StepText dangerouslySetInnerHTML={{__html: content.onboarding.steps.one}}  />
                        </StepContainer>
                        <StepContainer>
                            <StepNum>2</StepNum>
                            <StepText dangerouslySetInnerHTML={{__html: content.onboarding.steps.two}}  />
                        </StepContainer>
                        <StepContainer>
                            <StepNum>3</StepNum>
                            <StepText dangerouslySetInnerHTML={{__html: content.onboarding.steps.three}}  />
                        </StepContainer>
                        <StepContainer>
                            <StepNum>4</StepNum>
                            <StepText dangerouslySetInnerHTML={{__html: content.onboarding.steps.four}}  />
                        </StepContainer>
                        <StepContainer>
                            <StepNum>5</StepNum>
                            <StepText dangerouslySetInnerHTML={{__html: content.onboarding.steps.five}}  />
                        </StepContainer>
                    </StepsContainer>
                </Inner>
            </Body>
        </>
    )
}

export default ForExhibitorsPage