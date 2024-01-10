import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeadSection = styled.div`
    height: 12rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.79) 0%, rgba(0, 0, 0, 0.29) 50%, rgba(255, 255, 255, 0.22) 75%, #F7F7F7 100%);
    }
`

export const HeadBg = styled(Image)`
    object-fit: cover;
`

export const Body = styled.div`
    width: 100%;
`

export const BgGreen = styled.div`
    width: 30rem;
    height: 30rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(147, 194, 68, 0.40) 0%, rgba(147, 194, 68, 0) 100%);
    position: absolute;
    top: -5rem;
    left: 35rem;
`

export const BgPink = styled.div`
    width: 30rem;
    height: 30rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(226, 123, 175, 0.20) 0%, rgba(226, 123, 175, 0) 100%);
    position: absolute;
    top: -13rem;
    left: 6rem;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
`

export const SectionHeader = styled.div`
    width: 100%;
    border-bottom: 1px dashed #1E411D;
    margin: 2rem 0;
    position: relative;
    padding-bottom: 1rem;
`

export const Title = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    font-size: 4.5rem;
    line-height: 1;

    @media all and (max-width: 550px) {
        line-height: 1;
        font-size: 3rem;
        text-align: center;
    }
`

export const Subtitle = styled.p`
    font-size: 1.2rem;
    position: relative;
    left: 5px;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const MainContent = styled.div`
    display: flex;
`

export const HeaderButtonContainer = styled(Link)`
    position: absolute;
    right: 0;
    bottom: 1rem;

    @media all and (max-width: 850px) {
        display: none;
    }
`

export const InnerSection = styled.div`
    display: flex;
    flex-direction: column;
`

export const LeftContainer = styled.div`
    width: 50%;

    @media all and (max-width: 860px) {
        width: 100%;
    }
`

export const Text = styled.p`
    line-height: 1.5;
    font-size: .9rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 1rem;

    @media all and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ButtonContainer = styled(Link)`
    margin-right: 1.2rem;

    @media all and (max-width: 500px) {
        margin: .5rem 0;
    }
`


export const RightContainer = styled.div`
    width: 28rem;
    height: 24rem;
    margin: auto 0 auto 12%;
    position: relative;

    @media all and (max-width: 1000px) {
        height: 37rem;
    }

    @media all and (max-width: 860px) {
        display: none;
    }
`

export const Img = styled(Image)`
    object-fit: cover;
    box-shadow: var(--soft-shadow);
`

// FEATURES

export const FeaturesSection = styled.section`

`

export const Grid = styled.div`
    margin: 7rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 125px;
    grid-gap: 30px;

    @media all and (max-width: 500px) {
        margin: 4rem 0 7rem 0;
    }
`

export const GridItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--soft-shadow);
    border-radius: 15px;
    padding: 1rem;
`

export const GridIconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    position: relative;
    margin-right: 1.5rem;
`

export const GridIcon = styled(Image)`
    object-fit: contain;
`

export const GridText = styled.p`
    font-size: .8rem;
    width: 80%;

    span {
        font-weight: bold;
    }
`

// LOCATION
export const LocationSection = styled.div`
    background: rgba(228, 228, 228, 0.4);
    position: relative;
    padding: 7rem 0;
    margin-bottom: 7rem;

    @media all and (max-width: 950px) {
        padding: 4rem 0;
    }
`

export const LocationInner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
    display: flex;

    @media all and (max-width: 950px) {
        flex-direction: column;
    }
`

export const LocationLeftContainer = styled.div`
    width: 50%;

    @media all and (max-width: 950px) {
        width: 100%;
        margin-bottom: 2rem;
    }

    @media all and (max-width: 550px) {
        display: flex;
        flex-direction: column;
    }
`

export const LocationTitle = styled.h2`
    margin-bottom: 1.5rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const LocationSubtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1.5rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const LocationText = styled.p`
    line-height: 1.5;
    font-size: .9rem;
    margin-bottom: 1.5rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const LocationButtonContainer = styled(Link)`
    @media all and (max-width: 550px) {
        margin: 0 auto;
    }
`

export const LocationRightContainer = styled.div`
    width: 28rem;
    height: 20rem;
    position: relative;
    margin: auto 0 auto 10%;

    @media all and (max-width: 950px) {
        margin: 0 auto;
        width: 25rem;
    }

    @media all and (max-width: 500px) {
        width: 19rem;
        height: 17rem;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;
`

export const GalleryImage = styled(Image)`
    object-fit: cover;
`

// Onboarding
export const OnboardingTitle = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;

    @media all and (max-width: 680px) {
        line-height: 1;
        font-size: 2rem;
    }
`

export const OnboardingSubtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    text-align: center;
`

export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 4rem;
    margin-bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;

    @media all and (max-width: 1050px) {
        width: 65%;
    }

    @media all and (max-width: 680px) {
        width: 90%;
    }

    @media all and (max-width: 450px) {
        margin-top: 1.5rem;
    }
`

export const StepContainer = styled(motion.div)`
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;

    @media all and (max-width: 500px) {
        min-height: 5rem;
    }
`

export const StepNum = styled(motion.div)`
    color: #fff;
    background-color: var(--green);
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
`

export const StepText = styled(motion.p)`
    font-weight: bold;

    a {
        border-bottom: 1px solid var(--green);
    }
`

export const Line = styled(motion.div)`
    position: absolute;
    height: 85%;
    width: .1rem;
    background-color: var(--green);
    top: 15px;
    left: 23px;

    @media all and (max-width: 500px) {
        top: 30px;
    }
`