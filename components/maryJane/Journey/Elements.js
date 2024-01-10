import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 2rem;
    padding: 2rem 0 0 0;

    @media all and (max-width: 600px) {
        padding: 1rem 0 0 0;
    }
`

export const Title = styled.h2`
    font-size: 3rem;

    @media all and (max-width: 600px) {
        line-height: 1;
        font-size: 2.5rem;
        text-align: center;
    }
`

export const SwiperContainer = styled.div`
    position: relative;
    margin-top: 4rem;
    margin-left: 1rem;

    & > div {
        overflow: visible !important;
    }

    @media all and (min-width: 600px) {
        right: 6rem;
    }

    @media all and (min-width: 800px) {
        right: 7.7rem;
    }

    @media all and (min-width: 850px) {
        right: 15rem;
    }

    @media all and (min-width: 1000px) {
        right: 17.3rem;
    }

    @media all and (min-width: 1100px) {
        right: 19.2rem;
    }

    @media all and (min-width: 1200px) {
        right: 21rem;
    }

    @media all and (min-width: 1300px) {
        right: 22.8rem;
    }

    @media all and (min-width: 1400px) {
        right: 24.1rem;
    }
`

export const CardContainer = styled.article`
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: var(--soft-shadow);
    background-color: #fff;
    ${({active}) => active && 'transform: scale(1.1)'};
    ${({active}) => active && 'right: 20px'};
    opacity: ${({active}) => active ? '1' : '.7'};
    min-height: 32rem;
    transition: transform .3s ease-in-out;

    @media all and (max-width: 450px) {
        min-height: 35rem;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 12rem;
    position: relative;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const Year = styled.p`
    color: #fff;
    font-size: 4.5rem;
    font-weight: bold;
    position: absolute;
    top: 3rem;
    left: 2rem;
`

export const Text = styled.p`
    font-size: 1rem;
    padding: 2rem;

    @media all and (max-width: 550px) {
        font-size: .9rem;
    }
`