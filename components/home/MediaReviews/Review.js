import { useSwiperSlide } from 'swiper/react'
import {
  ReviewContainer,
  LogoContainer,
  Logo,
} from './Elements'

const Review = ({ content }) => {

  const thisSlide = useSwiperSlide()

  return (
    <ReviewContainer
      href={content.url}
      active={thisSlide.isNext}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogoContainer>
        <Logo src={content.logo.sourceUrl} alt="media review logo" fill sizes="(max-width: 550px) 90vw, (max-width: 860px) 50vw, 35vw"/>
      </LogoContainer>
    </ReviewContainer>
  )
}

export default Review