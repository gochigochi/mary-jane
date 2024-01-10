import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 5rem 0;
    /* background-color: var(--bg-gray); */
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
    margin-bottom: 0 auto 1.5rem auto;
`

export const ButtonContainer = styled.div`
    position: relative;
    margin: 0 auto 2rem auto;   
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    margin-bottom: 2rem;
    align-self: flex-start;
    text-align: center;
`

export const LogoContainer = styled.div`
    position: relative;
    margin: 0 auto;
    height: 9rem;
    width: 9rem;
    padding: .5rem;
    border-radius: 500px;
    background-color: #fff;
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
    width: 100%;
    top: 54%;
    transform: translateY(-50%);

    @media all and (max-width: 450px) {
        display: none;
    }
`