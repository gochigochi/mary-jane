import styled from 'styled-components'

export const Hoverable = styled.div`
    width: 100%;
    height: 100%;   
    display: flex;
    flex-direction: column;

    &:hover .arrow {
        opacity: 1;
        bottom: 0;
    }
`

export const HotelCard = styled.div`
    background-color: var(--soft-gray);
    padding: 1rem 2rem;
    border-radius: 7px;
    min-height: 12rem;
    position: relative;
`

export const DetailsContainer = styled.div`
    font-size: .8rem;
    color: var(--gray-blue);


    .title {
        font-weight: bold;
        padding-bottom: .2rem;
        margin-bottom: .4rem;
        border-bottom: 1px solid var(--gray-blue);
    }

    .note {
        font-size: .7rem;
    }
`

export const WebIconContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 1rem;
`

export const WebIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .4rem;
    
    svg {
        width: 1rem;
        height: 1rem;
        fill: var(--light-green);
        position: relative;
        top: 3px;
    }
`

export const WebUrl = styled.a`
    font-size: .8rem;
    font-weight: bold;
    color: var(--light-green);
    margin-top: .5rem;
`

export const ButtonsContainer = styled.div`
    @media all and (max-width: 450px) {
        display: none;
    }
`