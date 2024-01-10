import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Inner = styled.div`
    width: var(--section-width);
    max-width: var(--section-max-width);
    min-height: var(--section-min-height);
    display: flex;
    flex-direction: column;
    /* padding: 0 var(--desktop-section-padding); */
    margin: 5rem auto 6rem auto;
    padding: 3rem;
    box-shadow: var(--soft-shadow);
    border-radius: 5px;

    @media all and (max-width: 768px) {
        /* width: 85%; */
        /* margin: 0 auto; */
        padding: 2rem;
    }

    @media all and (max-width: 450px) {
        padding: 2rem 1rem;
    }
`

export const Title = styled.h2`
    text-align: left;
    margin-bottom: 2rem;

    @media all and (max-width: 550px) {
        text-align: center;
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
    line-height: 1.2;
`

export const Dot = styled.div`
    min-width: .5rem;
    min-height: .5rem;
    border-radius: 500px;
    background-color: ${({active}) => active ? 'var(--light-green)' : 'var(--gray)'};
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