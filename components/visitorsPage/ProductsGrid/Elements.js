import Image from 'next/image'
import styled from 'styled-components'

export const Inner = styled.div`
    width: 70%;
    max-width: calc(var(--section-max-width) - 25rem);
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 25rem;

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const GridContainer = styled.div`

`

export const Grid = styled.div`
    width: 70%;
    margin: 3rem auto 3rem auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    grid-gap: .5rem;
    gap: 3.5rem;
`

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    transition: all .2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`

export const IconContainer = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    margin-bottom: .3rem
`

export const Icon = styled(Image)`
    object-fit: contain;
`

export const Text = styled.p`
    font-size: .8rem;
    color: var(--gray-blue);
    text-align: center;
`