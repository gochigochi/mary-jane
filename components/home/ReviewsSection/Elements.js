import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 0 0 1rem 0;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    width: var(--section-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    text-align: center;
    margin: 0 auto 1.5rem auto;

    @media all and (max-width: 680px) {
        line-height: 1;
    }
` 

export const RevWidget = styled.div`
    display: flex;
    justify-content: space-between;
    width: 16.5rem;
    margin: 0 auto .5rem auto;
`

export const GContainer = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
`

export const Num = styled.p`
    font-size: 1rem;
    margin-right: .7rem;
    font-weight: bold;
    position: relative;
    top: 3px;
`

export const GImg = styled(Image)`
    object-fit: cover;
    height: 2rem;
    width: auto;
`

export const StarsContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    bottom: 3px;
`

export const Star = styled.svg`
    width: 1.5rem;
    height: 1.5rem;

    path {
        fill: gold;
    }
`

export const ButtonsContainer = styled.div`
    @media all and (max-width: 450px) {
        display: none;
    }
`

// REVIEW
export const ReviewContainer = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 1rem 2rem;
    min-height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform .3s ease-in-out;

    @media all and (min-width: 950px) {
        transform: ${({active}) => active ? 'scale(1.1)' : 'scale(.9)'};
    }
`

export const QuotesIcon = styled.svg`
    width: 2rem;
    height: 2rem;
    
    path { 
        fill: var(--pink);
    }
`

export const Name = styled.h5`
    font-weight: 700;
    font-size: .8rem;
    text-align: right;
    margin-top: 1rem;
`

export const Text = styled.p`
    font-size: 10px !important;
`