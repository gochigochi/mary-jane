import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Section = styled.section`
    padding: 5rem 0 2rem 0;

    @media all and (max-width: 500px) {
        padding: 5rem 0 0 0;
    }
`

export const BgGreen = styled.div`
    width: 30rem;
    height: 30rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(147, 194, 68, 0.40) 0%, rgba(147, 194, 68, 0) 100%);
    position: absolute;
    top: 1rem;
    left: 1rem;
`

export const BgPink = styled.div`
    width: 30rem;
    height: 30rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(226, 123, 175, 0.40) 0%, rgba(226, 123, 175, 0) 100%);
    position: absolute;
    top: 10rem;
    left: 28rem;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
    display: flex;

    @media all and (max-width: 980px) {
        flex-direction: column;    
    }

    @media all and (min-width: 1400px) {
        padding-left: 4rem;
    }

`

export const Content = styled(motion.div)`
    width: 65%;
    max-width: 41rem;
    position: relative;
    z-index: 10;

    @media all and (max-width: 980px) {
        width: 100%;   
    }
`

export const Title = styled.h2`
    font-size: 3.5rem;
    line-height: 1.2;

    @media all and (min-width: 1400px) {
        font-size: 4rem;
    }

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const Text = styled.p`
    margin: 2rem 0;
    font-size: .8rem;

    @media all and (min-width: 1400px) {
        font-size: .9rem;
    }
`

export const ButtonContainer = styled.div`
    @media all and (max-width: 550px) {
        margin: 0 auto;   
        display: flex;
        justify-content: center;
    }
`

export const Images = styled(motion.div)`
    width: 50%;
    margin-left: 2.5rem;
    position: relative;
    display: flex;
    align-items: center;

    /* &:hover .small-arrows {
        opacity: 1;
        top: 40%;
    } */

    @media all and (max-width: 980px) {
        width: 100%;
        margin: 4rem auto;
    }
    
    @media all and (min-width: 1400px) {
        top: 2rem;
        left: 4rem;
    }
`

export const InstaCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    position: relative;
    border-radius: 5px;
    box-shadow: var(--light-shadow);
    padding: .3rem .3rem 1.5rem .3rem;
    border: 1px solid #ededed;
`

export const InstaImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 95%;
    margin: 0 auto;
    background-color: #ededed;
`

export const InstaImg = styled(Image)`
    object-fit: cover;
`
export const IconContainer = styled.div`
    width: 2rem;
    margin: 1rem auto 0 auto;
    position: relative;

    @media all and (min-width: 450px) {
        display: none;
    }
`

export const Icon = styled(motion.div)`
    width: 2rem;
    height: 2rem;
    position: relative;
    transform: ${({rotate}) => rotate ? 'rotateZ(60deg)' : 'rotateZ(0)'};
    transition: all .2s ease-in-out;
`

export const Img = styled(Image)`
    object-fit: contain;
`

export const IconTxt = styled.p`
    font-size: .6rem;
`

export const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    display: flex;
    justify-content: space-between;
    z-index: 50;
    transition: all .3s ease-in-out;

    @media all and (max-width: 650px) {
        display: none;
    }
`

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: #ffffff;
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: ${({right}) => right ? 'rotate(180deg)' : null};
    
    svg {
        width: 1.2rem;
        height: 1.2rem;
        fill: var(--pink);
    }
`