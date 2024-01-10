import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination } from "swiper";
import Review from './Review'
import {
    Section,
    Inner,
    SectionTitle,
    ButtonsContainer,
} from './Elements'
import SwiperButtons from './SwiperButtons/SwiperButtons'

const MediaReviews = ({ data, content, language }) => {

    const swiperRef = useRef()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        setReviews(data)
    }, [])

    return (
        <Section>
            {
                reviews.length !== 0 ?
                <Inner>
                    <SectionTitle>{language === 'en' ? content.mediaReviewsTitleEn : content.mediaReviewsTitleDe}</SectionTitle>
                    <Swiper
                        ref={swiperRef}
                        className="mediaReviewSwyper"
                        slidesPerView={1}
                        breakpoints={{
                            900: {
                                slidesPerView: 3,
                            },
                            550: {
                                slidesPerView: 2,
                            },
                            400: {
                                slidesPerView: 1,
                            },
                        }}
                        grid={{
                            rows: 1,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        loop={true}
                    >
                        {
                            reviews.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Review content={item.node} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <ButtonsContainer>
                        <SwiperButtons swiperRef={swiperRef} />
                    </ButtonsContainer>
                </Inner> : null
            }
        </Section>
    )
}

export default MediaReviews