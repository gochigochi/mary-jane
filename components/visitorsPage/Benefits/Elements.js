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


export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
`

export const Card = styled.div`
    position: relative;
    background-color: var(--light-green);
    border-radius: 7px;
    padding: 2rem;
    width: 30%;

    &:after {
        content: '';
        width: 80%;
        height: .1rem;
        background-color: #ffffff;
        position: absolute;
        left: 50%;
        top: 1rem;
        transform: translateX(-50%);
    }

    &:before {
        content: '';
        width: 80%;
        height: .1rem;
        background-color: #ffffff;
        position: absolute;
        left: 50%;
        bottom: 1rem;
        transform: translateX(-50%);
    }
`

export const Text = styled.p`
    color: #ffffff;
    font-size: .9rem;
`

export const Icon = styled.div`
    background-color: #ffffff;
    width: 3rem;
    height: 3rem;
    border-radius: 500px;
    margin: 0 auto 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 2rem;
        height: 2rem;
        fill: var(--light-green);
    }
`