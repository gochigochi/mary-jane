import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const IllustrationsSectionContainer = styled.div`
    height: 30rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    position: relative;

    @media all and (max-width: 550px) {
        height: 40rem;
    }
`

export const IllustrationsContainer = styled.div`
    position: relative;
`

export const IllustrationInner = styled.div`
    position: absolute;
    width: 22rem;
    height: ${({ height }) => height ? height : "20rem"};
    left: ${({ left }) => left && left};
    top: ${({ top }) => top && top};

    @media all and (max-width: 690px) {
        left: ${({ leftMidMobile }) => leftMidMobile && leftMidMobile};
        top: ${({ topMidMobile }) => topMidMobile && topMidMobile};
    }

    @media all and (max-width: 550px) {
        left: ${({ leftMobile }) => leftMobile && leftMobile};
        top: ${({ topMobile }) => topMobile && topMobile};
    }
`

export const Illustration = styled(Image)`
    object-fit: contain;
`

export const Button = styled(Link)`
    /* background-color: #ffffff; */
    /* color: var(--pink); */
    /* border: 1px solid var(--pink); */
    background-color: var(--light-green);
    color: #ffffff;
    font-size: 1.5rem;
    padding: .4rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    left: ${({left}) => left && left};
    top: ${({top}) => top && top};
    box-shadow: var(--soft-shadow);
    z-index: 110;
    
    transition: opacity .2s ease-in-out;

    &:hover {
        opacity: .5;
    }
`

export const BigLogoContainer = styled.div`
    position: absolute;
    right: -16rem;
    bottom: -19rem;
    width: 40rem;
    height: 36rem;
    z-index: 10;
    opacity: .4;
`

export const BigLogo = styled(Image)`
    object-fit: cover;
`