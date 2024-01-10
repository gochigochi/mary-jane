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
    padding-bottom: 4rem;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 1rem auto 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;

    @media all and (max-width: 1150px) {
        padding: 3rem 1.5rem;
    }

    @media all and (max-width: 1050px) {
        flex-direction: column;
        padding: 3rem;
    }

    @media all and (max-width: 650px) {
        padding: 2rem .9rem;
    }
`

export const LeftContent = styled.div`
    width: 50%;

    @media all and (max-width: 1150px) {
        width: 45%;
    }

    @media all and (max-width: 1050px) {
        width: 100%;
    }

    @media all and (max-width: 550px) {
        display: flex;
        flex-direction: column;
    }
`


export const Title = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: 1rem;
    font-size: 2.5rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const TitleAlt = styled.h2`
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: 1rem;
    font-size: 2rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const Text = styled.p`
    line-height: 2;
    margin-bottom: 1.5rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    
    @media all and (max-width: 550px) {
        display: block;
        margin: 0 auto;
    }
`

export const ButtonContainer = styled(Link)`
    
    &:first-child {
        margin-right: 1rem;
    }

    @media all and (max-width: 550px) {
        margin: 0 auto 1rem auto;
    }
`

export const RightContent = styled.div`
    width: 27rem;
    height: 20rem;
    margin-right: 3%;
    position: relative;

    @media all and (max-width: 1050px) {
        margin: 3rem auto 0 auto;
    }

    @media all and (max-width: 650px) {
        width: 24rem;
        margin: 1.5rem auto 0 auto;
    }

    @media all and (max-width: 500px) {
        width: 19rem;
        height: 14rem;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;
`

export const Img = styled(Image)`
    object-fit: cover;
`