import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

export const Section = styled.div`
    padding: 1rem 0 2rem 0;
    width: 100%;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 1rem;
    margin-bottom: 2rem;

    @media all and (max-width: 525px) {
        width: 100%;
    }
`

export const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`

export const ButtonsContainer = styled.div`
    @media all and (max-width: 525px) {
        display: none;
    }
`

// CARDS
export const CardContainer = styled.div`
    position: relative;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.65) 100%);
    border-radius: 12px;
    min-height: 33rem;
    transition: transform .3s ease-in-out;
    overflow: hidden;
    box-shadow: var(--soft-shadow);
    
    @media all and (min-width: 1100px) {
        transform: ${({ active }) => active ? 'scale(1)' : 'scale(.8)'};
        opacity: ${({ active }) => active ? '1' : '.5'};
    }

    @media all and (max-width: 750px) {
        max-width: 25rem;
        margin: 0 auto;
    }

`

export const ImgContainer = styled.div`
    width: 100%;
    height: 15rem;
    position: relative;
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const Content = styled.div`
    padding: 1rem 2rem;
`

export const Title = styled.h2`
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
`

export const Item = styled.div`
    margin-bottom: 1.2rem;
    display: flex;
`

export const Icon = styled.div`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
`

export const I = styled(Image)`
    object-fit: contain;
`

export const Text = styled.p`
    font-size: .9rem;

    a {
        color: var(--green);
    }
`

export const Deco = styled.div`
    width: 50%;
    height: .2rem;
    background-color: var(--green);
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%)
`