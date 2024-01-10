import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper"
import Link from 'next/link'
// import PrimaryButton from '../../buttons/PrimaryButton'
import TertiaryButton from '../../buttons/TertiaryButton'
import {
    Section,
    Inner,
    BgGreen,
    BgPink,
    Content,
    Title,
    Text,
    ButtonContainer,
    Images,
    InstaCard,
    InstaImgContainer,
    InstaImg,
    IconContainer,
    Icon,
    Img,
    IconTxt,
    ButtonsContainer,
    Button,

} from './Elements'

const Exhibition = ({ data, language }) => {

    const imgs = Object.keys(data.imageGalleryHomeExhibitor).map(key => {
        return { ...data.imageGalleryHomeExhibitor[key]}
    })

    const content = language === 'en' ?
    {
        title: data.titleEnHomeExhibitor || '',
        text: data.textEnHomeExhibitor || '',
        cta: data.ctaEnHomeExhibitor || '',
        ctaUrl: data.ctaUrlEnHomeExhibitor || '',
    } : 
    {
        title: data.titleDeHomeExhibitor || '',
        text: data.textDeHomeExhibitor || '',
        cta: data.ctaDeHomeExhibitor || '',
        ctaUrl: data.ctaUrlDeHomeExhibitor || '',
    }

    const swp = useRef(null)
    const [rotate, setRotate] = useState(false)
    let direction = 'right'

    const callBack = () => {
        if (swp.current !== null) {
            if (direction === 'right') swp.current.swiper.slideNext(500, false)
            if (direction === 'left') swp.current.swiper.slidePrev(500, false)
            if (swp.current.swiper.isEnd) direction = 'left'
            if (swp.current.swiper.isBeginning) direction = 'right'
        }
    }

    const callBackRef = useRef(callBack)

    useEffect(() => {
        const interval = setInterval(callBackRef.current, 4000)

        return () => clearInterval(interval)
    }, [])

    const handleNext = () => {
        swp.current.swiper.slideNext(200, false)
    }

    const handlePrev = () => {
        swp.current.swiper.slidePrev(200, false)
    }

    return (
        <Section>
            <Inner>
                <BgGreen />
                <BgPink />
                <Content
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 1 } }}
                    viewport={{ once: true }}
                    margin="500px"
                >
                    <Title dangerouslySetInnerHTML={{ __html: content.title }} />
                    <Text dangerouslySetInnerHTML={{ __html: content.text }} />
                    <ButtonContainer>
                        <TertiaryButton>
                            <Link href={content.ctaUrl}>{content.cta}</Link>
                        </TertiaryButton>
                    </ButtonContainer>
                </Content>
                <Images
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: .5, duration: 1 } }}
                    onHoverStart={() => setRotate(true)}
                    onHoverEnd={() => setRotate(false)}
                    viewport={{ once: true }}
                    amount="200"
                >
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="instaGallerySwyper"
                        ref={swp}
                    >
                        {
                            imgs.map(img => {
                                return (
                                    <SwiperSlide key={img.sourceUrl}>
                                        <InstaCard>
                                            <InstaImgContainer>
                                                <InstaImg src={img.sourceUrl} alt={img.altText} fill sizes="50vw, (max-width: 550px) 80vw"/>
                                            </InstaImgContainer>
                                        </InstaCard>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <ButtonsContainer className="small-arrows">
                        <Button onClick={handlePrev}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></Button>
                        <Button right={true} onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></Button>
                    </ButtonsContainer>
                </Images>
            </Inner>
        </Section>
    )
}

export default Exhibition