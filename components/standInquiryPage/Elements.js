import styled from 'styled-components'
import Image from 'next/image'

export const HeadSection = styled.div`
    height: 12rem;
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

export const Content = styled.div`
    width: 100%;
`


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

export const HeroTitle = styled.h1`
    position: absolute;
    bottom: 1rem;
    left: var(--desktop-section-padding);
    font-size: 7rem;
    font-weight: 500;
    color: #ffffff;
`

export const Inner = styled.div`
    width: 80%;
    max-width: var(--section-max-width);
    margin: 2rem auto 0 auto;
    display: flex;
    position: relative;
    min-height: 25rem;

    @media all and (max-width: 540px) {
        width: 95%;
    }
`