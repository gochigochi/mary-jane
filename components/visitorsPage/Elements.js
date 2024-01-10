import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.div`
    min-height: 22rem;
    width: 100%;
    position: relative;
    background-color: ${({ bg }) => bg ? bg : "#ffffff"};
`

export const BdSection = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-color: ${({ bg }) => bg ? bg : "#ffffff"};
`

export const HeroImage = styled(Image)`
    object-fit: cover;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

export const HeroContent = styled.div`
    position: absolute;
    height: 100%;
    max-width: calc(var(--section-max-width) - 25rem);
    width: 70%;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    z-index: 10;
`

export const HeroTitle = styled.h1`
    position: relative;
    top: 28rem;
    transform: translateY(-130%);
    bottom: 0;
    left: 0;
    font-size: 3rem;
    font-weight: 500;
    color: #ffffff;
`

export const Inner = styled.div`
    width: 70%;
    max-width: calc(var(--section-max-width) - 25rem);
    margin: 0 auto;
    display: flex;
    position: relative;
    min-height: 25rem;

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const Title = styled.h3`
    font-size: 2rem;
    margin: 2rem auto 1rem auto;
    max-width: 35rem;
    line-height: 1.4;
    color: ${({ color }) => color && color};
`
