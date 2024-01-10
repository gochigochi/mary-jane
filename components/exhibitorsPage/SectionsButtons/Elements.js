import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'

export const Section = styled.div`
    min-height: 22rem;
    width: 100%;
    position: relative;
    background-color: ${({ bgColor }) => bgColor ? bgColor : "#ffffff"};
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto 5rem auto;
    display: flex;
    flex-direction: column;
    padding: 0 var(--desktop-section-padding);
    position: relative;
    z-index: 110;

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const Title = styled.h2`
    text-align: center;
    position: relative;
    margin-bottom: 3rem;

    &:after {
        content: '';
        height: 1px;
        width: 20%;
        background-color: var(--gray-blue);
        position: absolute;
        transform: translateX(-50%);
        bottom: -1.5rem;
        left: 50%;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;

    @media all and (max-width: 1050px) {
        width: 100%;
    }
`

export const Button = styled(Link)`
    background-color: var(--gray-blue);
    font-size: 1rem;
    width: 12rem;
    height: 4rem;
    margin: 1rem .5rem;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity .2s ease-in-out;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        opacity: .5;
    }
`

export const IconContainer = styled.div`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 1rem;
`

export const Icon = styled(Image)`
    object-fit: contain;
`