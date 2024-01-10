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

    @media all and (max-width: 600px) {
        padding: 3rem 1rem;
    }
`

export const Title = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: .5rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const SubTitle = styled.h3`
    font-weight: bold;
    margin: 1rem 0 1.5rem 0;
    line-height: 1.3;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const Item = styled.div`
    display: flex;
    margin-bottom: 1.8rem;
`

export const Dot = styled.div`
    margin-right: 1.5rem;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        background-color: var(--clear-gray);
        width: .7rem;
        height: .7rem;
        border-radius: 5px;
        top: 5px;
        left: 0;
    }
`

export const Text = styled.p`
    line-height: 1.4;
    position: relative;

    a {
        text-decoration: underline;
        color: darkblue;
    }
`

export const Note = styled.p`
    font-style: italic;
    line-height: 1.4;
    position: relative;
    margin-bottom: 2rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const Contact = styled.div``

export const ContactTitle = styled.h3`
    margin-bottom: 1rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const ContactText = styled.p`
    line-height: 1.4;
    position: relative;
    margin: .3rem 0;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`