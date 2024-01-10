import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 5rem 0 0 0;

    @media all and (max-width: 500px) {
        padding: 3rem 0 0 0;
    }
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    width: var(--section-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const Head = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto 1.5rem auto;
`

export const ButtonsContainer = styled.div`
    display: flex;

    @media all and (max-width: 550px) {
        justify-content: center;
    }
`


export const ButtonContainer = styled.div`
    position: relative;
    bottom: 1rem;
    margin-left: 1rem;

    &:first-child {
        margin-left: 0;
    }

    @media all and (max-width: 450px) {
        bottom: 0;

        &:nth-child(2) {
            display: none;
        }
    }
`

export const AltButtonContainer = styled.div`
    position: relative;
    margin-left: 1rem;
    display: none;
    color: #fff;
    
    button {
        /* font-size: 1.5rem; */
    }

    @media all and (max-width: 450px) {
        display: block;
        margin-left: .3rem;
    }
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    margin-bottom: 3.5rem;
    text-align: center;

    @media all and (max-width: 850px) {
        margin-bottom: 2.5rem;
    }

    @media all and (max-width: 450px) {
        margin-bottom: 1.5rem;
    }
` 

export const LogoContainer = styled.div`
    position: relative;
    height: 9rem;
    width: 9rem;
    padding: 1rem;
    border-radius: 500px;
    background-color: ${({ iswhitelogo }) => iswhitelogo ? '#aad771' : '#fff'};
    overflow: hidden;
`

export const Logo = styled(Image)`
    object-fit: contain;
    width: 90% !important;
    height: 90% !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
`

export const SwiperButtonsContainer = styled.div`
    position: absolute;
    width: 90%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Arrow = styled.button`
    position: relative;
    transform: ${({right}) => right && 'rotate(180deg)'};
    transition: all .2s ease-in-out;
    opacity: 0;
    bottom: .3rem;
    background-color: var(--pink);
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;

    svg {

        width: 2rem;
        height: 2rem;

        path {
            fill: #ffffff;
        }
    }
`