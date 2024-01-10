import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectFade, Pagination, Autoplay } from 'swiper'
import PrimaryButton from '../buttons/PrimaryButton'
import SwiperButtons from './SwiperButtons/SwiperButtons'
import {
  HeadSection,
  HeadBg,
  Body,
  Inner,
  LeftContent,
  Title,
  TitleAlt,
  Text,
  ButtonContainer,
  RightContent,
  ImageContainer,
  Img,
  ButtonsContainer,
} from './Elements'

const SponsoringPage = ({ gallery, sponsoringContent, foyerContent, foyerGallery, bg, files }) => {

  const swiperRef = useRef()
  const swiperAltRef = useRef()

  return (
    <>
      <HeadSection>
        <HeadBg src={bg.sourceUrl} alt={bg.altText} fill />
      </HeadSection>
      <Body>
        <Inner>
          <LeftContent>
            <Title>{sponsoringContent.title}</Title>
            <Text>{sponsoringContent.text}</Text>
            <ButtonContainer href={files.packages} target="_blank" rel="noopener noreferrer" download>
              <PrimaryButton>{sponsoringContent.cta.title}</PrimaryButton>
            </ButtonContainer>
          </LeftContent>
          <RightContent>
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              autoplay={{delay: 1500}}
              pagination={{ clickable: true }}
              modules={[EffectFade, Pagination, Autoplay]}
              className="sponsoringSwiper"
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
          </RightContent>
        </Inner>
        <Inner>
          <LeftContent>
            <TitleAlt>{foyerContent.title}</TitleAlt>
            <Text>{foyerContent.text}</Text>
            <ButtonsContainer>
              <ButtonContainer href={files.foyerOne} target="_blank" rel="noopener noreferrer" download>
                <PrimaryButton>Foyer 1</PrimaryButton>
              </ButtonContainer>
              <ButtonContainer href={files.foyerTwo} target="_blank" rel="noopener noreferrer" download>
                <PrimaryButton>Foyer 2</PrimaryButton>
              </ButtonContainer>
            </ButtonsContainer>
          </LeftContent>
          <RightContent>
            <Swiper
              ref={swiperAltRef}
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              pagination={{ clickable: true }}
              modules={[EffectFade, Pagination]}
              className="foyerSponsoringSwiper"
            >
              {
                foyerGallery.map(slide => {
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
          </RightContent>
        </Inner>
      </Body>
    </>
  )
}

export default SponsoringPage