import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Section = styled.section`
    padding: 5rem 0 2rem 0;
`

export const Inner = styled(motion.div)`
    max-width: var(--section-max-width);
    width: var(--section-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
`

export const Box = styled(motion.div)`
    width: 31%;
    height: 10rem;
    background: #FFFFFF;
    border-radius: 12px;
    display: flex;
    padding: 1rem 1.5rem;
    margin: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`

export const IconContainer = styled.div`
    position: relative;
    width: 20%;
    height: 4rem;
    margin-right: 1rem;
`

export const Icon = styled(Image)`
    object-fit: contain;
`

export const Text = styled.p`
    width: 70%;
    font-size: .9rem;
`