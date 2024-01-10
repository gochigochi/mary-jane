import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 7rem 0;

    @media all and (max-width: 700px) {
        padding: 4rem 0;
    }
`

export const Container = styled.div`
    width: 100%;
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: .5fr 2fr;
    box-shadow: var(--soft-shadow);
    border-radius: 12px;

    @media all and (max-width: 700px) {
        grid-template-columns: 1fr;
        padding: 0 0 2rem 0;
        overflow: hidden;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    width: 15rem;
    height: 15rem;
    margin-right: 1rem;
    border-radius: 500px;
    overflow: hidden;
    right: 3rem;
    top: 50%;
    transform: translateY(-50%);

    @media all and (max-width: 700px) {
        width: 100%;
        margin-right: 0;
        border-radius: 0;
        right: 0;
        top: 0;
        transform: translateY(0);

    }
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 1.5rem;
`

export const CardTitle = styled.h2`
    margin-bottom: 1rem;

    @media all and (max-width: 1000px) {
        line-height: 1;
    }

    @media all and (max-width: 550px) {
        text-align: center;
    }

    @media all and (max-width: 450px) {
        font-size: 2rem;
    }
`

export const CardText = styled.p`
    font-size: .9rem;
    display: flex;
    align-items: center;
    width: 90%;

    @media all and (max-width: 550px) {
        text-align: center;
        margin: 0 auto;
    }
`