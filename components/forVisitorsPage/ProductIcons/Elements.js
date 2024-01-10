import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 7rem auto;
    position: relative;
`

export const Title = styled.h2`
    width: 100%;
    font-size: 2rem;
    text-align: center;

    @media all and (max-width: 550px) {
        line-height: 1;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 5rem);
    grid-gap: 2.5rem;
    width: fit-content;
    margin: 5rem auto 4rem auto;

    @media all and (max-width: 1050px) {
        grid-template-columns: repeat(4, 5rem);
    }

    @media all and (max-width: 550px) {
        grid-template-columns: repeat(2, 5rem);
        grid-gap: 3.8rem;
    }
`

export const GridElement = styled.div`
    
`

export const IconContainer = styled.div`
    background-color: #fff;
    width: 80%;
    height: 80%;
    position: relative;
    border-radius: 500px;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    padding: .5rem;
    box-shadow: var(--soft-shadow);
`

export const Icon = styled(Image)`
    object-fit: contain;
    transform: translate(-50%, -50%) !important;
    top: 50% !important;
    left: 50% !important;
`

export const Text = styled.p`
    font-size: .7rem;
    text-align: center;
    margin-top: .2rem;
`

export const Subtitle = styled.p`
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
`