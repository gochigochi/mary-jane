import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

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

export const Inner = styled.div`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
`

export const SimpleGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8%;
    margin: 3rem 0;
`

export const DoubleGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin: 3rem 0;

    @media all and (max-width: 860px) {
        grid-template-columns: 1fr;
        margin: 0 0 3rem 0;
    }
`

export const Card = styled.div`
    box-shadow: var(--soft-shadow);
    border-radius: 12px;
    padding: 2rem 1.8rem;
    position: relative;
    overflow: hidden;
`

export const Box = styled.div`
    position: relative;
    top: 1rem;
    padding: 0 8rem 0 0;

    @media all and (max-width: 1200px) {
        padding: 0 2rem 0 0;
    }

    @media all and (max-width: 960px) {
        padding: 0;
    }

    @media all and (max-width: 860px) {
        margin-bottom: 2rem;
    }
`

export const MainTitle = styled.h1`
    margin: 1rem 0;
    font-size: 2.8rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    line-height: 1;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const Text = styled.p`
    font-size: .9rem;

    @media all and (max-width: 550px) {
        text-align: center;
    }
`

export const FeaturedTitleContainer = styled.div`
    background-color: var(--light-blue);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    z-index: 0;
`

export const FeaturedTitle = styled.h2`
    color: #315E5C;
    position: relative;
    z-index: 1;
    font-size: 1.2rem;
    margin-bottom: 1rem;

    @media all and (max-width: 450px) {
        line-height: 1;
        bottom: .2rem;
        font-size: 1rem;
    }
`

export const FeaturedText = styled.p`
    font-size: .8rem;
    margin: 1.5rem 0;
    position: relative;
    top: .4rem;

    @media all and (max-width: 450px) {
        margin: .5rem 0 1.5rem 0;
    }
`

export const ButtonContainer = styled(Link)``

export const SectionHeader = styled.div`
    display: flex;
`

export const SectionIconContainer = styled.div`
    min-width: 4rem;
    min-height: 4rem;
    box-shadow: var(--soft-shadow);
    position: relative;
    border-radius: 500px;
`

export const SectionIcon = styled(Image)`
    object-fit: contain;
    top: 50% !important;
    left: 50% !important;
    height: 65% !important;
    width: 65% !important;
    transform: translate(-50%, -50%);
`

export const RegularTitle = styled.h2`
    line-height: 1;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    /* border-bottom: 1px dashed #1E411D; */

    @media all and (max-width: 650px) {
        border-bottom: none;
    }
`

export const BigSectionFilesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 85%;
    margin: 2rem auto 1rem auto;

    @media all and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

export const SmallSectionFilesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    width: 85%;
    margin: 2rem auto 1rem auto;

    @media all and (max-width: 860px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media all and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

export const FileContainer = styled.a`
    display: flex;
    align-items: center;
`

export const FileIconContainer = styled.div`
    min-width: 2.2rem;
    min-height: 2.2rem;
    position: relative;
    margin-right: 1rem;
`

export const FileIcon = styled(Image)`
    object-fit: contain;
`

export const FileName = styled.p`
    font-size: 1rem;
`

export const Circle = styled.p`
    position: absolute;
    left: -15rem;
    top: 0;
    height: 22rem;
    width: 22rem;
    background-color: var(--green);
    border-radius: 500px;

    @media all and (max-width: 960px) {
        display: none;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10rem;

    p {
        font-size: 1.1rem;
    }

    @media all and (max-width: 1120px) {
        padding-left: 7rem;
    }

    @media all and (max-width: 960px) {
        padding-left: 0;
    }

    @media all and (max-width: 860px) {
        align-items: center;
        margin-bottom: 2rem;
    }
`

export const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Dot = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: var(--green);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    border-radius: 500px;
    position: relative;
    padding: 1rem;
    left: 7rem;

    @media all and (max-width: 860px) {
        left: 0;
    }
`

export const DotIcon = styled(Image)`
    object-fit: contain;
    width: 75% !important;
    height: 75% !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
`

export const LogoContainer = styled.div`
    position: relative;
    width: 14rem;
    height: 11rem;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

