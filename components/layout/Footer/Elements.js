import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Section = styled.section`
    /* min-height: var(--section-min-height); */
    background-color: var(--black);
    padding: 1rem 0 2rem 0;
    position: relative;
    z-index: 1;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    padding: 0 var(--desktop-section-padding);
    flex-wrap: wrap;

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const Title = styled.p`
    font-weight: bold;
    font-size: .6rem;
    margin: 2.5rem 0 1rem 0;
    color: #ffffff;
`

export const Text = styled.div`
    font-size: .6rem;
    color: #ffffff;

    p {
        margin-bottom: .5rem;
        color: #ffffff;
    }
`

export const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;

    @media all and (max-width: 850px) {
        width: 100%;
    }

    @media all and (max-width: 540px) {
        flex-direction: column;
    }
`

export const LeftLeft = styled.div`
    width: 50%;

    @media all and (max-width: 540px) {
        width: 100%;
    }
`

export const LeftRight = styled.div`
    width: 50%;
    margin-left: 4%;

    @media all and (max-width: 540px) {
        width: 100%;
        margin-left: 0;
    }
`

export const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;

        
    @media all and (max-width: 850px) {
        width: 100%;
    }

    @media all and (max-width: 540px) {
        flex-direction: column;
    }
`

export const RightLeft = styled.div`
    width: 50%;
    margin-left: 4%;

    @media all and (max-width: 850px) {
        margin-left: 0;
    }
`

export const RightRight = styled.div`
    width: 50%;
    margin-left: 4%;
    position: relative;

    @media all and (max-width: 850px) {
        bottom: 7rem;
    }

    @media all and (max-width: 540px) {
        bottom: 0;
        margin-left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: 8rem;
    height: 8rem;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const ScrubbleContainer = styled.div`
    width: 18rem;
    height: 14rem;
    position: absolute;
    top: 9rem;
    left: -1rem;

    @media all and (max-width: 850px) {
        width: 18rem;
        top: 4rem;
        left: 4rem;
    }

    @media all and (max-width: 540px) {
        display: none;
    }
`

export const ScrubbleImg = styled(Image)`
    object-fit: contain;
`

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0 1rem 0;
`

export const FooterLink = styled(Link)`
    font-size: .6rem;
    font-weight: bold;
    margin-bottom: .5rem;
    color: #ffffff;
`