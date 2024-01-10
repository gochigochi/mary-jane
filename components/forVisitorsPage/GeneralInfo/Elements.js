import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
`

export const SectionHeader = styled.div`
    width: 100%;
    border-bottom: 1px dashed #1E411D;
    margin: 2rem 0;
    position: relative;
    padding-bottom: 1rem;
`

export const Title = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    font-size: 4.5rem;
    
    @media all and (max-width: 525px) {
        font-size: 3rem;
        padding-bottom: .8rem;
        text-align: center;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 4rem 0;

    @media all and (max-width: 890px) {
        grid-template-columns: 1fr;
        margin: 2rem 0;
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media all and (max-width: 1000px) {
        margin-left: 1rem;
    }

    @media all and (max-width: 890px) {
        margin-left: 0;
    }

    @media all and (max-width: 550px) {
        display: flex;
        flex-direction: column;
    }
`

export const Subtitle = styled.p`
    font-size: 2rem;
    width: 25rem;
    font-weight: bold;
    line-height: 1.2;
    
    @media all and (max-width: 550px) {
        width: 100%;   
        text-align: center;
    }
`

export const Text = styled.p`
    line-height: 1.5;
    font-size: .9rem;
    width: 95%;
    margin: 1.5rem 0;

    @media all and (max-width: 550px) {
        text-align: center;
    }
    
    @media all and (max-width: 400px) {
        width: 20rem;   
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const ButtonContainer = styled(Link)`
    @media all and (max-width: 550px) {
        margin: 0 auto;
    }
`

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 890px) {
        display: none;
    }
`

export const ImgContainer = styled.div`
    width: 25rem;
    height: 18rem;
    position: relative;
`

export const Img = styled(Image)`
    object-fit: cover;
    box-shadow: var(--soft-shadow);
`
