import styled from "styled-components"

export const SwiperButtonsContainer = styled.div`
    position: absolute;
    width: 110%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;

    @media all and (max-width: 450px) {
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
    width: 2rem;
    height: 2rem;
    box-shadow: var(--soft-shadow);

    svg {

        width: 1rem;
        height: 1rem;

        path {
            fill: var(--pink)
        }
    }
`