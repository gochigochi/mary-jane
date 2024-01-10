import styled from 'styled-components'

export const Card = styled.div`
    background-color: var(--light-green);
    padding: 1rem 1rem;
    border-radius: 7px;
    min-height: 12rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto 1rem auto;

    &::before {
        content: '';
        position: absolute;
        top: 1rem;
        left: 50%;
        height: 1px;
        width: 90%;
        transform: translateX(-50%);
        background-color: var(--gray-blue);
    }
`

export const Text = styled.p`
    width: 80%;
    color: var(--gray-blue);
    text-align: center;
    margin-bottom: 1rem;
`

export const DetailTitle = styled.h4`
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    margin: .5rem;
`

export const DetailText = styled.div`
    p {
        color: var(--gray-blue);
        text-align: center;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
`

export const Detail = styled.p`
    font-size: .8rem;
    color: var(--gray-blue);
    margin: 1rem;
    display: flex;
`

export const Icon = styled.span`
    display: flex;
    align-items: center;
    margin-right: .3rem;

    svg {
        width: 1rem;
        height: 1rem;
        fill: var(--gray-blue);
    }
`