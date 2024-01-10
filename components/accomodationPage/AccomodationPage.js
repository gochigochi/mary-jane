import { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperButtons from '../swiperButtons/SwiperButtons'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import AccomodationCard from './AccomodationCard'
import {
    HeadSection,
    HeadBg,
    Section,
    Inner,
    MainTitle,
    ButtonsContainer,
} from './Elements'

const AccomodationPage = ({ data, language, bg }) => {

    const [hotels, setHotels] = useState([])

    useEffect(() => {
        setHotels(data)
    }, [])

    const swiperRef = useRef()

    return (
        <>
            <HeadSection>
                <HeadBg src={bg.sourceUrl} alt="" fill />
            </HeadSection>
            <Section>
                <Inner>
                    <MainTitle>{ language === 'en' ? 'Accomodation' : 'Unterkünfte'}</MainTitle>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                            750: {
                                slidesPerView: 2,
                            },
                            400: {
                                slidesPerView: 1,
                            },
                        }}
                        spaceBetween={30}
                        grid={{
                            rows: 1,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="accomodationSwyper"
                    >
                        {
                            hotels.length !== 0 ?
                                hotels.map(item => {
                                    return (
                                        <SwiperSlide key={item.node.name}>
                                            <AccomodationCard content={item.node} />
                                        </SwiperSlide>
                                    )
                                }) : null
                        }
                    </Swiper>
                    <ButtonsContainer>
                        <SwiperButtons swiperRef={swiperRef} />
                    </ButtonsContainer>
                </Inner>
            </Section>
        </>
    )
}

export default AccomodationPage