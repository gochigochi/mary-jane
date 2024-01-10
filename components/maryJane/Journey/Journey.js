import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Pagination} from "swiper"
import SwiperButtons from './SwiperButtons/SwiperButtons'
import Card from './Card'
import {
    Inner,
    Title,
    SwiperContainer,
} from './Elements'

const Journey = ({ content, title }) => {

    const swiperRef = useRef()

    const cards = Object.keys(content).map(key => {
        return { ...content[key] }
    })

    return (
        <Inner>
            <Title>Follow our Journey</Title>
            <SwiperContainer>
                <Swiper
                    ref={swiperRef}
                    breakpoints={{
                        850: {
                            slidesPerView: 3,
                        },
                        600: {
                            slidesPerView: 14/8,
                        }
                    }}
                    slidesPerView={9/8}
                    spaceBetween={10}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="journeySwyper"
                >
                    {
                        cards.map(card => {
                            return (
                                <SwiperSlide key={card.image.sourceUrl}>
                                    <Card content={card} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </SwiperContainer>
            <SwiperButtons swiperRef={swiperRef} />
        </Inner>
    )
}

export default Journey