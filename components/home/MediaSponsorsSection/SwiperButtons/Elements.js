import styled from "styled-components"

export const SwiperButtonsContainer = styled.div`
    position: absolute;
    width: 110%;
    display: flex;
    justify-content: space-between;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -15%);
    z-index: 20;
    
    @media all and (max-width: 900px) {
        width: 107%;
    }

    @media all and (max-width: 550px) {
        display: none;
    }
`

export const Arrow = styled.button`
    position: relative;
    transform: ${({right}) => right && 'rotate(180deg)'};
    transition: all .2s ease-in-out;
    bottom: .3rem;
    background-color: #ffffff;
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;

    @media all and (max-width: 900px) {
        width: 2rem;
        height: 2rem;
    }

    svg {

        width: 2rem;
        height: 2rem;
        
        @media all and (max-width: 900px) {
            width: 1rem;
            height: 1rem;
        }

        path {
            fill: var(--pink)
        }
    }
`