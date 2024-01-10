import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const Section = styled.section`
    background: rgba(228, 228, 228, 0.4);
    padding: 7rem 0;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
`

export const Title = styled.h2`
    width: 100%;
    font-size: 2rem;
    text-align: center;

    @media all and (max-width: 650px) {
        width: 75%;
        line-height: 1;
        margin: 0 auto;
    }

    @media all and (max-width: 450px) {
        width: 100%;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    width: fit-content;
    margin: 4rem auto;

    @media all and (max-width: 760px) {
        grid-template-columns: 1fr;
        margin: 3rem auto;
    }
`

export const Card = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: var(--soft-shadow);
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    height: 18rem;
    max-width: 20rem;
    margin: 0 auto;
`

export const BgImgContainer = styled.div`
    width: 100%;
    height: 18rem;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled(Image)`
    object-fit: cover;
    box-shadow: var(--soft-shadow);
`

export const ImgOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
`

export const CardText = styled.p`
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    padding: 2rem;

    @media all and (max-width: 950px) {
        font-size: 1.2rem;
    }

    @media all and (max-width: 760px) {
        font-size: 1.4rem;
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`

export const ButtonContainer = styled(Link)``