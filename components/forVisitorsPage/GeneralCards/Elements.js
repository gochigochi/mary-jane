import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const Section = styled.section`
    background: rgba(228, 228, 228, 0.4);
    padding: 3rem 0;
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

    @media all and (max-width: 1000px) {
        width: 70%;
        margin: 0 auto;
        line-height: 1;
    }
    
    @media all and (max-width: 800px) {
        width: 90%;
    }

    @media all and (max-width: 600px) {
        width: 100%;
        text-align: left;
    }

    @media all and (max-width: 550px) {
        text-align: center;
        width: 90%;
    }
`

export const Grid = styled.div`
    margin: 4rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    width: fit-content;
    margin: 4rem auto;

    @media all and (max-width: 1125px) {
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 600px) {
        grid-template-columns: 1fr;
        margin: 2rem auto 4rem auto;
    }
`

export const Card = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: var(--soft-shadow);
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    max-width: 20rem;
    margin: 0 auto;
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 12rem;
    position: relative;
    overflow: hidden;
`

export const Img = styled(Image)`
    object-fit: cover;
    box-shadow: var(--soft-shadow);
`

export const CardTitle = styled.p`
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
    position: absolute;
    bottom: -1.7rem;
    left: -10px;
    width: 150%;
`

export const Text = styled.p`
    padding: 1.5rem 1rem;
    font-size: .8rem;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    @media all and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ButtonContainer = styled(Link)`
    margin: 0 .5rem;

    @media all and (max-width: 600px) {
        margin: .7rem 0;
    }
`