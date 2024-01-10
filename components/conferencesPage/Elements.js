import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
    width: 80%;
    max-width: 1100px;
    margin: 3rem auto;
    min-height: 100vh;

    @media all and (max-width: 1200px) {
        width: 95%;
    }
`

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 2rem;
`

export const InnerHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;

    @media all and (max-width: 800px) {
        grid-template-columns: 22% 22% 22% 1fr;
    }

    @media all and (max-width: 600px) {
        grid-template-columns: 1fr 1fr 1fr 80px;
    }

    @media all and (max-width: 400px) {
        grid-template-columns: 1fr 1fr 1fr 70px;
    }
`

export const Tab = styled.div`
    height: 5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px 12px 0 0;
    background-color: ${({ active }) => active ? '#fff' : 'var(--soft-gray)'};
    cursor: pointer;

    &:last-child {
        background-color: transparent;
        justify-content: flex-end;
        align-items: flex-end;
        cursor: default;
    }

    @media all and (max-width: 800px) {
        height: 4rem;
    }
`

export const Date = styled.p`
    color: var(--green);
    font-size: 2.5rem;
    font-weight: bold;
    pointer-events: none;

    @media all and (max-width: 600px) {
        font-size: 1.7rem;
    }
`

export const TopicSelector = styled.div`
    background-color: var(--soft-gray);
    border-radius: 20px;
    width: 10rem;
    height: 2rem;
    padding: 0 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #979797;
    cursor: pointer;
    position: relative;
    bottom: 15px;
    right: 0;
    font-size: .8rem;

    @media all and (max-width: 600px) {
        display: none;
    }
`

export const TopicContainer = styled.div`
    position: absolute;
    max-height: ${({ open }) => open ? '100rem' : '0rem'};
    width: 100%;
    background-color: #ffffff;
    box-shadow: var(--soft-shadow);
    border-radius: 12px;
    z-index: 100;
    transition: all .2s ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 2.5rem;
`

export const TopicElement = styled.p`
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    text-align: left;
    font-size: .9rem;

    &:hover {
        background-color: var(--soft-gray);
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

export const ChevronContainer = styled.div`
    position: absolute;
    right: .7rem;
    top: 57%;
    transform: translateY(-50%);
    pointer-events: none;
    
    svg {
        rotate: ${({open}) => open && 'x 180deg'};
        transition: rotate .5s;
        width: 1.5rem;
        height: 1.5rem;
    }
`

export const MobileCat = styled.button`
    width: 3rem;
    height: 3rem;
    background-color: var(--soft-gray);
    border-radius: 500px;
    justify-content: center;
    align-items: center;
    margin-right: .5rem;
    opacity: ${({hidden}) => hidden ? '0' : '1'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 8px;
    right: 5px;
    

    svg {
        width: 1.3rem;
        height: 1.3rem;
        pointer-events: none;
    }

    @media all and (min-width: 600px) {
        display: none;
    }
`

export const InnerBody = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 3rem;
    box-shadow: var(--soft-shadow);
    border-radius: 0 12px 12px 12px;

    @media all and (max-width: 1000px) {
        padding: 3rem 1rem;
    }

    @media all and (max-width: 800px) {
        padding: 2rem 1rem;
    }
`

export const BodySection = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1.5rem;
    margin-bottom: 2rem;

    @media all and (max-width: 1000px) {
        grid-template-columns: 30% 70%;
    }

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-gap: .5rem;
    }
`

export const Hour = styled.p`
    color: var(--green);
    font-size: 2rem;
    font-weight: bold;
`

export const ConfContent = styled.div`
    border-bottom: 1px solid var(--soft-gray);
    margin-bottom: 2rem;
    padding-top: .5rem;
    padding-bottom: 1rem;

    @media all and (max-width: 800px) {
        margin-bottom: 0;
    }
`

export const ConfTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    line-height: 1;
    position: relative;
    bottom: 3px;
`

export const TagsContainer = styled.div`
    display: flex;
`

export const Tag = styled.p`
    padding: .3rem 1rem;
    background-color: var(--soft-gray);
    border-radius: 500px;
    text-align: center;
    font-size: .9rem;
    margin-bottom: 1.5rem;
    margin-right: .5rem;
    width: fit-content;
`

export const Description = styled.p`
    font-size: .9rem;
    margin-bottom: 2rem;
`

export const SpeakersTitle = styled.p`
    font-style: italic;
    font-weight: bold;
    color: var(--green);
    margin-bottom: 1rem;
`

export const SpeakerContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`

export const SpeakerImgContainer = styled.div`
    min-width: 3rem;
    height: 3rem;
    position: relative;
    overflow: hidden;
    border-radius: 500px;
    margin-right: 1rem;;
`

export const SpeakerImg = styled(Image)`
    border-radius: 500px;
    object-fit: cover;
`

export const SpeakerDetails = styled.div`
    
`

export const SpeakerName = styled.p`

`

export const SpeakerProf = styled.p`
    font-style: italic;
    color: var(--gray);
`