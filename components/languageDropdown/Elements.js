import styled from 'styled-components'

export const DropdownContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    @media all and (max-width: 960px) {
        margin-top: 1rem;
        margin-right: .8rem;
    }
`

export const Button = styled.button`
    position: relative;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

export const DropdownBox = styled.div`
    visibility: ${({opened}) => opened ? 'visible' : 'hidden'};
    position: absolute;
    top: 3.3rem;

    @media all and (max-width: 960px) {
        top: 5px;
        right: 3.7rem;
    }
`

export const DropdownItem = styled.div`

`

export const FlagContainer = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 500px;
    overflow: hidden;
`

export const Flag = styled.img`
    width: 180%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
`

export const Arrow = styled.div`
    position: absolute;
    right: -3px;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #555;
    rotate: ${({opened}) => opened && 'x 180deg'};
    transition: rotate .5s;

    @media all and (max-width: 1025px) {
        rotate: ${({opened}) => opened && 'z 90deg'};   
        border-top: 4px solid #fff;
    }

    @media all and (max-width: 960px) {
        right: -17px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid #fff;
    }
`