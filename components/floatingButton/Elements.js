import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Button = styled(motion.a)`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 4rem;
    height: 4rem;
    border-radius: 500px;
    background-color: ${({isvisitor}) => isvisitor ? 'var(--light-green)' : 'var(--gray-blue)'};
    z-index: 100;
    display: none;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    padding: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px solid #fff;

    @media all and (min-width: 1025px) {
        display: none;
    }
`

export const ImgContainer = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    display: ${({visible}) => visible ? 'block' : 'none'};
`

export const Img = styled(Image)`
    object-fit: contain;
`

export const Text = styled.p`
    font-size: ${({isvisitor}) => isvisitor ? '.6rem' : '.7rem'};
    color: #fff;
    font-weight: 200;
    text-align: center
`