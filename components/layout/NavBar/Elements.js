import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    transition: all .5s ease-in-out;
    
    box-shadow: ${({ scrolled }) => scrolled ? '0px 2px 9px 3px rgba(0, 0, 0, 0.2)' : 'none'};
    background-color: ${({ scrolled }) => scrolled ? 'var(--bg-color)' : 'transparent'};
`

export const Inner = styled.div`
    margin: 0 auto;
    width: 98%;
    max-width: calc(var(--section-max-width) + 15rem);
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
`

export const Right = styled.div`
    display: flex;

    @media all and (max-width: 960px) {
        justify-content: center;
        align-items: center;
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: ${({ scrolled }) => scrolled ? '4rem' : '5rem'};
    height: ${({ scrolled }) => scrolled ? '3.5rem' : '4rem'};
    display: flex;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    transition: all .5s ease-in-out;
    z-index: 10;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const Nav = styled.nav`
    display: flex;
    margin-top: ${({ scrolled }) => scrolled ? '0' : '1rem'};
    /* position: relative; */
    transition: all .5s ease-in-out;
    align-items: center;

    @media all and (max-width: 1024px) {
        display: none;
    }
`

export const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    /* margin: 1rem 0; */
`

export const LinkContainer = styled.li`
    margin-left: 2.5rem;
    padding: 1rem 0;
    transition: opacity .2s ease-in-out;
    font-size: .8rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    position: relative;

    a {
        color: ${({ scrolled }) => scrolled ? 'var(--text-color)' : '#ffffff'};
    }

    &:first-child {
        padding-left: 0;
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 1rem;
        left: 0;
        width: 100%;
        height: .1rem;
        background-color: ${({scrolled}) => scrolled ? 'var(--text-color)' : '#fff' };
        transform: ${({active}) => active ? 'scaleX(1)' : 'scaleX(0)'};
        transition: transform .2s ease-in-out;
    }
`

export const MegaMenu = styled(motion.div)`
    position: absolute;
    top: ${({scrolled}) => scrolled ? '3.1rem' : '3.1rem'};
    left: 0;
    z-index: 500;
    transition: all .5s ease-in-out;
    background-color: var(--bg-color);
    justify-content: space-between;
    flex-direction: column;
    width: max-content;
    box-shadow: var(--light-shadow);

    &:before {
        content: '';
        position: absolute;
        top: -48px;
        left: 25px;
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-top: 32px solid transparent;
        border-bottom: 17px solid var(--bg-color);
        z-index: 450;
    }
`


export const MenuLinkContainer = styled.li`
    width: 100%;
    transition: opacity .2s ease-in-out;
    font-size: .8rem;
    display: flex;
    align-items: center;
    
    a {
        width: 100%;
        color: var(--text-color);
        padding: .5rem 1rem;

        &:hover {
            background-color: #ededed;    
        }
    }
`

export const TicketsBtn = styled(motion.div)`
    background-color: var(--green);
    font-size: .7rem;
    width: 7rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-radius: 50px;
    margin: 0 .3rem;
    cursor: pointer;
    transition: background-color .2s ease-in-out;

    &:hover {
        background-color: var(--green-hover);
    }
`

export const StandBtn = styled(motion.div)`
    background-color: var(--pink);
    font-size: .7rem;
    width: 7rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-radius: 50px;
    margin: 0 .3rem;
    cursor: pointer;
    transition: background-color .2s ease-in-out;

    &:hover {
        background-color: var(--pink-hover);
    }
`

export const DropdownContainer = styled.div`
    margin-left: 1rem;
`