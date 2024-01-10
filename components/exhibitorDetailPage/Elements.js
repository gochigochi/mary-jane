import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeadSection = styled.div`
    height: 5rem;
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

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 3rem auto 6rem auto;
    padding: 3rem;
    box-shadow: var(--soft-shadow);
    border-radius: 5px;
    display: grid;

        grid-template-columns: 1fr;
        grid-gap: 2rem;
        padding: 3rem 1.5rem;
`

export const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Right = styled.div``

export const LogoContainer = styled.div`
    position: relative;
    height: 12rem;
    width: 12rem;
    padding: 1rem;
    border-radius: 500px;
    background-color: ${({ isWhiteLogo }) => isWhiteLogo ? '#aad771' : '#fff'};
    overflow: hidden;
`

export const Logo = styled(Image)`
    object-fit: contain;
    width: 90% !important;
    height: 90% !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%,-50%);
`

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`

export const Title = styled.h3`
    margin-bottom: 1rem;
`

export const Text = styled.p`

`

export const Website = styled(Link)`
    font-style: italic;
`