import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const Section = styled(motion.section)`
    padding: 5rem 0;

    @media all and (max-width: 600px) {
        padding: 2rem 0 6rem 0;
    }
`

export const Inner = styled(motion.div)`
    max-width: var(--section-max-width);
    width: var(--section-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    opacity: ${({isinview}) => isinview ? '1' : '0'};
    transition: opacity .2s ease-in-out;
`

export const Head = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto 1.5rem auto;   
`

export const ButtonContainer = styled(Link)`
    position: relative;
    margin: 0 auto 1rem auto;
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1;
` 

export const SwiperInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LogoContainer = styled.div`
    position: relative;
    height: 12rem;
    width: 12rem;
    padding: .5rem;
    border-radius: 500px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.44) 100%);
    overflow: hidden;
`

export const Logo = styled(Image)`
    object-fit: cover;
`

export const NameContainer = styled(motion.div)`
    overflow: hidden;
    left: 0;
    bottom: 0;
    max-height: ${({isinview}) => isinview ? '100rem' : '0rem'};
    margin-top: .5rem;
    transition: all 3s ease-in-out .8s;
`

export const Name = styled.p`
    font-size: .9rem;
    margin: 0 auto;
    color: var(--text-color);
    width: fit-content;
    padding: .3rem;
    overflow: hidden;
    line-height: .5;
`

export const Surname = styled.p`
    margin: 0 auto;
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--text-color);
    width: fit-content;
    padding: .3rem;
    overflow: hidden;
    line-height: 1;
`

export const Prof = styled.p`
    margin: 0 auto;
    font-style: italic;
    font-size: .7rem;
    text-align: center;
    color: var(--text-color);
    width: fit-content;
`