import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 1rem 0;
`

export const Inner = styled.div`
    width: 90%;
    position: relative;
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HoverableArea = styled.div`
    width: 100%;
`

export const DesktopSwiper = styled.div``

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--black);
    margin-bottom: 1.5rem;
    line-height: 1.1;
` 

export const Frame = styled.div`
    border-radius: 5px;
    background-color: #ffffff;
    height: 30rem;
    padding: .5rem .5rem 4rem .5rem;
    box-shadow: var(--light-shadow);
    position: relative;
    max-width: 25rem;
    margin: 0 auto;
`

export const AnchorOverlay = styled.a`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    cursor: pointer;
`

export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const VideoContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

export const Video = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const ButtonsContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 65%;

    @media all and (max-width: 450px) {
        display: none;
    }
`

export const CtaContainer = styled.div`
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
`

export const CtaTitle = styled.h2`
    margin: 2rem 0;
    text-align: center;
    color: var(--black);
    `

export const CtaSubTitle = styled.h4`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    font-weight: 400;
`

export const ButtonContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
`

