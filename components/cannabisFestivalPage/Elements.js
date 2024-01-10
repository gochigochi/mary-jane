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

export const Content = styled.div`
    width: 100%;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 1rem auto 2rem auto;
    display: flex;
    padding: 3rem 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    flex-direction: column;

    @media all and (max-width: 450px) {
        padding: 1rem;
        width: 100%;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        background-color: transparent;
    }
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: .5rem;
    line-height: 1.2;

    @media all and (max-width: 450px) {
        text-align: left;
    }
`

export const PosterContainer = styled.div`
    position: relative;
    margin: 1rem auto 2rem auto;
    width: 35rem;
    height: 50rem;

    @media all and (max-width: 700px) {
        width: 22rem;
        height: 30rem;
    }
`

export const Poster = styled(Image)`
top: 0;
    object-fit: contain;
`

export const ButtonContainer = styled(Link)`
    margin: 0 auto 4rem auto;
`