import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectFade, Pagination } from 'swiper'
import SwiperButtons from './SwiperButtons/SwiperButtons'
import {
    HeadSection,
    HeadBg,
    Section,
    Inner,
    InnerSection,
    FurnitureLeft,
    ImageContainer,
    Img,
    FurnitureRight,
    Title,
    Subtitle,
    SmallText,
    DetailsContainer,
    Address,
    DetailsList,
    DetailItem,
    Footer,
} from './Elements'

const FurnitureRentalPage = ({ gallery, content, hostContent, hostGallery, bg }) => {

    const swiperRef = useRef()
    const swiperAltRef = useRef()
    const list = Object.keys(content.details).map(key => {
        return content.details[key]
    })
    const hostList = Object.keys(hostContent.details).map(key => {
        return hostContent.details[key]
    })

    return (
        <>
            <HeadSection>
                <HeadBg src={bg.sourceUrl} alt="" fill />
            </HeadSection>
            <Section>
                <Inner>
                    <InnerSection>
                        <FurnitureLeft>
                            <Swiper
                                ref={swiperRef}
                                spaceBetween={30}
                                effect={"fade"}
                                loop={true}
                                pagination={{ clickable: true }}
                                modules={[EffectFade, Pagination]}
                                className="furnitureSwiper"
                            >
                                {
                                    gallery.map(slide => {
                                        return (
                                            <SwiperSlide key={slide.sourceUrl}>
                                                <ImageContainer>
                                                    <Img src={slide.sourceUrl} alt={slide.altText} fill />
                                                </ImageContainer>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <SwiperButtons swiperRef={swiperRef} />
                        </FurnitureLeft>
                        <FurnitureRight>
                            <Title>{content.title}</Title>
                            <Subtitle>{content.subtitle}</Subtitle>
                            <SmallText>{content.shortText}</SmallText>
                            <DetailsContainer dashed={true}>
                                <Address dangerouslySetInnerHTML={{ __html: content.address }} />
                                <DetailsList>
                                    {
                                        list.map(item => <DetailItem>{item}</DetailItem>)
                                    }
                                </DetailsList>
                            </DetailsContainer>
                        </FurnitureRight>
                    </InnerSection>
                    <InnerSection reverse={true}>
                        <FurnitureLeft>
                            <Swiper
                                ref={swiperAltRef}
                                spaceBetween={30}
                                effect={"fade"}
                                loop={true}
                                pagination={{ clickable: true }}
                                modules={[EffectFade, Pagination]}
                                className="furnitureSwiper"
                            >
                                {
                                    hostGallery.map(slide => {
                                        return (
                                            <SwiperSlide key={slide.sourceUrl}>
                                                <ImageContainer>
                                                    <Img src={slide.sourceUrl} alt={slide.altText} fill />
                                                </ImageContainer>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <SwiperButtons swiperRef={swiperAltRef} />
                        </FurnitureLeft>
                        <FurnitureRight>
                            <Title>{hostContent.title}</Title>
                            <SmallText>{hostContent.shortText}</SmallText>
                            <DetailsContainer>
                                <Address dangerouslySetInnerHTML={{ __html: hostContent.address }} />
                                <DetailsList>
                                    {
                                        hostList.map(item => <DetailItem>{item}</DetailItem>)
                                    }
                                </DetailsList>
                            </DetailsContainer>
                        </FurnitureRight>
                    </InnerSection>
                </Inner>
            </Section>
        </>
    )
}

export default FurnitureRentalPage