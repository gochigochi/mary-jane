import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination } from "swiper";
import SwiperButtons from './SwiperButtons/SwiperButtons'
import SmallCtaAlt from '../../buttons/SmallCtaAlt'
import {
    Section,
    Inner,
    SectionTitle,
    Head,
    ButtonContainer,
    SwiperInner,
    LogoContainer,
    Logo,
    NameContainer,
    Name,
    Surname,
    Prof,
} from './Elements'

const Speakers = ({ data, content, language }) => {

    const swiperRef = useRef()
    const [isInView, setInView] = useState(false)
    const [speakers, setSpeakers] = useState([])
    const text = language === 'en' ? content.speakersContentEn : content.speakersContentDe

    useEffect(() => {
        setSpeakers(data)
    }, [])

    return (
        <Section whileInView={() => setInView(true)}>
            <Inner isinview={isInView}>
                <Head>
                    <SectionTitle>{text.title}</SectionTitle>
                    <ButtonContainer href={text.cta.url}>
                        <SmallCtaAlt>{text.cta.text}</SmallCtaAlt>
                    </ButtonContainer>
                </Head>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    breakpoints={{
                        950: {
                            slidesPerView: 4,
                        },
                        680: {
                            slidesPerView: 3,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                    }}
                    grid={{
                        rows: 1,
                    }}
                    spaceBetween={30}
                    autoplay={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="speakersSwyper"
                >
                    {
                        speakers.length !== 0 ?
                            speakers.map((speaker, index) => {
                                return (
                                    <>
                                        {
                                            speaker.node.hideOnLandingPage !== true &&
                                                <SwiperSlide key={index}>
                                                    <SwiperInner>
                                                        <LogoContainer>
                                                            <Logo
                                                                src={speaker.node.image.sourceUrl}
                                                                alt="speaker"
                                                                fill
                                                                sizes="(max-width: 550px) 50vw, 25vw"
                                                                priority
                                                            />
                                                        </LogoContainer>
                                                        <NameContainer isinview={isInView}>
                                                            {speaker.node.name && <Surname>{speaker.node.name}</Surname>}
                                                            <Surname>{speaker.node.surname}</Surname>
                                                            <Prof>{speaker.node?.profession}</Prof>
                                                        </NameContainer>
                                                    </SwiperInner>
                                                </SwiperSlide>
                                        }
                                    </>
                                )
                            }) : null
                    }
                </Swiper>
                <SwiperButtons swiperRef={swiperRef} />
            </Inner>
        </Section>
    )
}

export default Speakers