import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const HeroSection = styled.section`
    height: 100vh;
    position: relative;
    max-height: 45rem;

    @media all and (max-width: 700px) {
        max-height: 100vh;
    }
`

export const HeroBg = styled(Image)`
    object-fit: cover;
`

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
`

export const FooterOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: rgba(250, 250, 250, 0.4);
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: flex-end;
`

export const Content = styled.div`
    position: relative;
    bottom: 8rem;
    width: 40rem; 

    @media all and (max-width: 550px) {
        bottom: 6rem;
    }
`

export const Subtitle = styled.h3`
    color: var(--green);
    margin-bottom: 1rem;
    font-size: 2.5rem;

    @media all and (max-width: 550px) {
        /* font-size: 1.5rem; */
        display: none;
        text-align: center;
    }
`

export const Copy = styled.h1`
    font-size: 5rem;
    color: var(--light-blue);
    line-height: 1;
    margin-bottom: 1rem;

    @media all and (max-width: 550px) {
        font-size: 3rem;
        text-align: center;
    }
`

export const Text = styled.p`
    color: var(--light-blue);
    font-size: .9rem;
    position: relative;
    left: 5px;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`