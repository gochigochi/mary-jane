import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    position: relative;
    background-color: var(--black);
    padding-top: 1.5rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.p`
    font-weight: bold;
    font-size: var(--desktop-title-font-size);
    text-align: center;
    font-size: 1.2rem;
    font-weight: regular;
    color: #fff;

    @media all and (max-width: 450px) {
        font-size: 1.1rem;
    }
`

export const Form = styled.form`
    width: 25rem;
    margin: 0 auto;

    @media all and (max-width: 500px) {
        width: 22rem;
    }

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
        height: 2.5rem;
        border: 1px solid var(--soft-lines-color);
        border-radius: 4px;
        padding: 0 .8rem;
        box-shadow: var(--soft-shadow);
        background-color: #fff;

        &&::placeholder {
            color: var(--light-gray);
            font-family: var(--text-font);
            font-size: 1.2rem;
        }
`

export const Button = styled.button`
    width: 20%;
    height: 2.5rem;
    margin-left: .2rem;
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
    right: 7rem;
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