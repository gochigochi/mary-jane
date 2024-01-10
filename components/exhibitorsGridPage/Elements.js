import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeadSection = styled.div`
    height: 12rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.79) 0%, rgba(0, 0, 0, 0.29) 50%, rgba(255, 255, 255, 0.22) 75%, #F7F7F7 100%);
    }
`

export const HeadBg = styled(Image)`
    object-fit: cover;
`

export const Content = styled.div`
    width: 100%;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 3rem auto;
    min-height: 100vh;
`

export const InnerHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: .5rem;

    @media all and (max-width: 890px) {
        /* padding-bottom: 2.5rem; */
    }
`

export const Title = styled.h1`
    position: relative;
    top: 15px;

    @media all and (max-width: 890px) {
        top: 9px;
    }

    @media all and (max-width: 580px) {
        opacity: ${({ hidden }) => hidden ? '0' : '1'};
    }

    @media all and (max-width: 400px) {
        font-size: 1.8rem;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;

    @media all and (max-width: 890px) {
        display: none;
    }
`

export const Search = styled.input`
    background-color: var(--soft-gray);
    border-radius: 20px;
    width: 15rem;
    height: 2.5rem;
    padding: 0 1rem;

    &::placeholder {
        color: #979797;
    }
`

export const Categories = styled.div`
    background-color: var(--soft-gray);
    border-radius: 20px;
    width: 15rem;
    height: 2.5rem;
    padding: 0 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #979797;
    cursor: pointer;
    position: relative;
    font-size: .8rem;
`

export const ChevronContainer = styled.div`
    position: absolute;
    right: .7rem;
    top: 57%;
    transform: translateY(-50%);
    pointer-events: none;
    
    svg {
        rotate: ${({ open }) => open && 'x 180deg'};
        transition: rotate .5s;
        width: 1.5rem;
        height: 1.5rem;
    }
`

export const Grid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 30px;
`

export const GridItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoContainer = styled(Link)`
    position: relative;
    width: 12rem;
    height: 12rem;
    background-color: ${({ iswhitelogo }) => iswhitelogo ? '#aad771' : '#fff'};
    box-shadow: var(--light-shadow);
    border-radius: 500px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled(Image)`
    object-fit: contain;
    opacity: ${({ isLoading }) => isLoading ? '0' : '1'};
    transition: opacity .2s ease-in-out;
    width: 80% !important;
    height: 80% !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
`

export const PlaceHolderLogo = styled(Image)`
    object-fit: contain;
    opacity: ${({ isLoading }) => isLoading ? '0' : '1'};
    transition: opacity .2s ease-in-out;
    width: 70% !important;
    height: 70% !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
    opacity: .1;
`

export const PlaceHolderText = styled.p`
    position: relative;
    opacity: ${({ isLoading }) => isLoading ? '0' : '1'};
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`

// CATEGORIES
export const CategoriesContainer = styled.div`
    position: absolute;
    top: 45px;
    max-height: ${({ open }) => open ? '100rem' : '0rem'};
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: var(--soft-shadow);
    border-radius: 12px;
    z-index: 100;
    transition: all .2s ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const Categorie = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    text-align: left;

    &:hover {
        background-color: var(--soft-gray);
    }
`

export const MobileInputs = styled.div`
    display: none;
    position: relative;
    padding-right: 2.5rem;
    height: 2.5rem;
    
    @media all and (max-width: 890px) {
        display: flex;
        width: ${({ opened }) => opened ? '100%' : 'fit-content'};
    }
`

export const MobileCat = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--soft-gray);
    border-radius: 500px;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;
    opacity: ${({ hidden }) => hidden ? '0' : '1'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 1.3rem;
        height: 1.3rem;
        pointer-events: none;
    }
`

export const MobileSearch = styled.input`
    background-color: var(--soft-gray);
    border-radius: 20px;
    width: ${({ opened }) => opened ? '100%' : '2.5rem'};
    height: 2.5rem;
    padding: 0 1rem;
    transition: width .3s ease-in-out;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
`

export const SearchIcon = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    opacity: ${({ opened }) => opened ? '0' : '1'};
    pointer-events: none;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`

export const CatPopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const MobileCategoriesContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: var(--soft-shadow);
    border-radius: 12px;
    z-index: 100;
    transition: all .2s ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`
