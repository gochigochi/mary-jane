import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Section = styled.section`
    margin-bottom: 3rem;
    padding: 5rem 0 1rem 0;
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

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    align-self: flex-start;
    margin: 0 auto 4rem auto;

    @media all and (max-width: 550px) {
        text-align: center;   
    }

    @media all and (max-width: 450px) {
        padding-bottom: 1rem;
        line-height: 1.2;
        width: 90%;
        margin-bottom: 2rem;
    }
`

export const ButtonsContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);

    @media all and (max-width: 450px) {
        display: none;
    }
`

// REVIEW
export const ReviewContainer = styled(Link)`
    position: relative;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.65) 100%);
    border-radius: 12px;
    padding: 2rem;
    height: 6.5rem;
    display: flex;
    flex-direction: column;
    transition: transform .3s ease-in-out;
    justify-content: center;

    @media all and (min-width: 900px) {
        transform: ${({active}) => active ? 'scale(1.1)' : 'scale(.9)'};
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: auto;
    height: 3rem;
    pointer-events: none;
`

export const Logo = styled(Image)`
    pointer-events: none;
    object-fit: contain;
`