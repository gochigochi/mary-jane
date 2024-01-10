import styled from 'styled-components'

export const Section = styled.section`
    padding: 4rem 0 8rem 0;

    @media all and (max-width: 550px) {
        padding: 0 0 4rem 0;
    }
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    width: var(--section-width);
    margin: 0 auto;
    display: flex;
    position: relative;
    align-items: center;

    @media all and (max-width: 860px) {
        flex-direction: column-reverse;
    }
`

export const MapContainer = styled.div`
    width: 50%;
    
    @media all and (max-width: 860px) {
        width: 80%;
        margin-top: 3rem;
    }

    @media all and (max-width: 550px) {
        width: 100%;
    }
`

export const Map = styled.div`
    width: 100%;
    height: 28rem;
    border-radius: 12px;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`

export const DetailsContainer = styled.div`
    width: 50%;
    padding-left: 6rem;

    @media all and (max-width: 1024px) {
        padding-left: 2.5rem;
    }

    @media all and (max-width: 860px) {
        width: 90%;
    }

    @media all and (max-width: 550px) {
        width: 100%;
        padding-left: 0;
    }
`

export const Title = styled.h3`
    font-size: 1.8rem;
    margin-bottom: .8rem;
`

export const SubTitle = styled.h6`
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: .7rem;
    line-height: 1.7;
`

export const Item = styled.div`
    margin-bottom: .5rem;
`

export const Text = styled.p`
    font-size: .9rem;
    margin-bottom: .1rem;

    span {
        font-weight: bold;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 1rem;
`