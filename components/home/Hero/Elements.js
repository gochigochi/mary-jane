import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroSection = styled.div`
    height: 100vh;
    max-height: 60rem;
    min-height: 39rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    @media all and (max-width: 500px) {
        height: 100vh;
    }
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 4rem;
    padding-left: 4rem;

    @media all and (max-width: 700px) {
        padding-left: 0;
        justify-content: center;
    }
`

export const Content = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media all and (max-width: 700px) {
        align-items: center;
    }
`

export const Title = styled(motion.div)`
    color: #ffffff;
    margin-bottom: 1rem;
`

export const Date = styled.h2`
    font-size: 7.05rem;

    span {
        line-height: 1;
    }

    @media all and (max-width: 1400px) {
        font-size: 5.5rem;
    }
`

export const Month = styled.h2`
    color: #ffffff;
    font-size: ${({language}) => language === 'en' ? '7.6rem' : '8.6rem'};
    margin-bottom: 1.1rem;

    span {
        line-height: ${({language}) => language === 'en' ? '.3' : '.9'};
    }

    @media all and (min-width: 1400px) {
        font-size: ${({language}) => language === 'en' ? '9.7rem' : '11rem'};
        margin-bottom: 1.5rem;
    }
`

export const Year = styled.h2`
    color: var(--green);
    font-size: 8.1rem;

    @media all and (min-width: 1400px) {
        font-size: 10.4rem;
    }
`

export const SubTitle = styled(motion.h1)`
    color: #ffffff;
    font-size: ${({language}) => language === 'en' ? '1.15rem' : '1.05rem'};
    letter-spacing: .1rem;
    line-height: .8;
    margin-bottom: .5rem;

    @media all and (min-width: 1400px) {
        font-size: ${({language}) => language === 'en' ? '1.5rem' : '1.4rem'};
    }

    @media all and (max-width: 450px) {
        text-align: center;
    }
`

export const CounterContainer = styled(motion.div)`
    border-top: 1px solid #ffffff;
    padding-top: .5rem;
    margin: 0 auto;
    width: 100%;
`

export const ButtonContainer = styled(motion.div)``