import styled from 'styled-components'
import Image from 'next/image'

export const HeroSection = styled.div`
    height: 22rem;
    width: 100%;
    position: relative;
`

export const HeroImage = styled(Image)`
    object-fit: cover;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

export const HeroTitle = styled.h1`
    position: absolute;
    bottom: 0;
    left: var(--desktop-section-padding);
    font-size: 7rem;
    font-weight: 500;
    color: #ffffff;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    min-height: var(--section-min-height);
    display: flex;
    flex-direction: column;
    /* padding: 0 var(--desktop-section-padding); */
    width: 65%;
    margin: 5rem auto 6rem auto;
    padding: 3rem;
    box-shadow: var(--soft-shadow);
    border-radius: 5px;

    @media all and (max-width: 1080px) {
        width: 70%;
        margin: 0 auto 2rem auto;
    }

    @media all and (max-width: 768px) {
        width: 85%;
        margin: 0 auto;
        padding: 2rem;
    }

    @media all and (max-width: 450px) {
        width: 95%;
        margin: 0 auto;
        padding: 1rem;
    }

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const Item = styled.div``

export const Qheader = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-blue);
    padding: .5rem;
`

export const Q = styled.h3`

`

export const Dot = styled.div`
    width: .5rem;
    height: .5rem;
    border-radius: 500px;
    background-color: ${({active}) => active ? 'var(--light-green)' : 'var(--pink)'};
`

export const AContainer = styled.div`
    margin: 1rem;
    overflow: hidden;
    max-height: ${({active}) => active ? '100rem' : '0'};
    transition: max-height .5s cubic-bezier( 1, 0, 0, 1 );
`

export const A = styled.p`
    margin-bottom: .5rem;
`