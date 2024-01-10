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

export const Content = styled.div`
    width: 100%;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 1rem auto 2rem auto;
    display: flex;
    padding: 3rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    flex-direction: column;

    @media all and (max-width: 450px) {
        padding: 2rem 1.2rem;
    }
`

export const Title = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: 1rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const SubTitle = styled.h3`
    font-weight: bold;
    margin: 1.5rem 0;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const Item = styled.div`
    display: flex;
    margin-bottom: 1.8rem;

    @media all and (max-width: 550px) {
        margin: 0 auto 1.8rem auto;
    }
`

export const Icon = styled.div`
    position: relative;
    min-width: 2rem;
    height: 2rem;
    margin-right: .8rem;
`

export const I = styled(Image)`
    object-fit: contain;
`

export const Text = styled.p`
    line-height: 1.4;
    align-self: center;
    position: relative;

    a {
        text-decoration: underline;
    }
`