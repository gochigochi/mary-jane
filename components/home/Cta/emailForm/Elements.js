import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    height: 25rem;
    width: 100%;
    position: relative;
    box-shadow: var(--soft-shadow);
`

export const BgImg = styled(Image)`
    object-fit: cover;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

export const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
`

export const Inner = styled.div`
    width: 100%;
`

export const Title = styled.p`
    font-size: 1.5rem;
    text-align: center;
    width: 25rem;
    color: var(--gray-blue);

    @media all and (max-width: 560px) {
        font-size: 1.3rem;
    }

    @media all and (max-width: 450px) {
        font-size: 1.1rem;
    }
`

export const Form = styled.form`
    @media all and (max-width: 350px) {
        width: 80%;
        margin: 0 auto;
    }
`

export const InputContainer = styled.div`
    margin: 1rem 0;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media all and (max-width: 450px) {
        margin: 1rem auto;
        width: 90%;
    }
`

export const Input = styled.input`
        width: 75%;
        height: 3rem;
        border: 1px solid var(--soft-lines-color);
        border-radius: 4px;
        padding: 0 .8rem;
        box-shadow: var(--soft-shadow);

        &&::placeholder {
            color: var(--soft-gray);
            font-family: var(--text-font);
            font-size: 1.2rem;
        }
`

export const Button = styled.button`
    width: 20%;
    height: 3rem;
    margin-left: .5rem;
    border: 1px solid var(--soft-lines-color);
    background-color: ${({ dis }) => dis ? "gray" : "var(--light-green)"};
    border-radius: 4px;
    opacity: ${({ dis }) => dis ? ".5" : "1"};
    cursor: ${({ dis }) => dis ? "default" : "pointer"};
    box-shadow: var(--soft-shadow);
`

export const ButtonIcon = styled.svg`
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    top: 2px;

    path {
        fill: #ffffff; 
    }
`

export const Error = styled.p`
    position: absolute;
    bottom: -2rem;
    left: 1rem;
    color: var(--alert);
    font-size: .9rem;
`

export const Msg = styled.p`
    position: absolute;
    bottom: -2rem;
    left: 1rem;
    color: var(--light-green);
    font-size: .9rem;
`