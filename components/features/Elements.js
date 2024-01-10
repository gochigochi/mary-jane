import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Items = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    top: 50%;
    transform: translateY(-50%);
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%; 

    @media all and (max-width: 450px) {
        min-width: 0;
    }
`

export const IconContainer = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    position: relative;
    box-shadow: var(--soft-shadow);
    border-radius: 500px;
    padding: 2rem;
`

export const Icon = styled(Image)`
    transform: translate(-2px, 5px);
`

export const CountContainer = styled.div`
    display: flex;

    span {
        font-weight: bold;
        font-size: 2rem;
        display: flex;
        align-items: center;
        color: var(--text-color);

        @media all and (max-width: 500px) {
            font-size: 1.3rem;
        }
    }
`

export const Text = styled.p`
    text-align: center;
    font-size: .9rem;
    line-height: .7;
    color: var(--text-color);

    @media all and (max-width: 500px) {
        font-size: .8rem;
    }
`

export const CounterContainer = styled(motion.div)`
    text-align: center;
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: var(--text-color);

    @media all and (max-width: 500px) {
        font-size: 1.5rem;
    }
`