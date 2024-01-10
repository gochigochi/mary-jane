import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const Section = styled.section`
    background: rgba(228, 228, 228, 0.4);
    width: 100%;
    padding: 11rem 0 7rem 0;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;

    @media all and (max-width: 500px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        line-height: 1;
    }
`

export const Subtitle = styled.p`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;

    @media all and (max-width: 500px) {
        font-size: 1rem;
        line-height: 1;
    }
`

export const ButtonsContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 19rem;
`

export const ButtonContainer = styled(Link)`
`