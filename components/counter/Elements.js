import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-bottom: 1rem;
`

export const Item = styled.div`
    flex: 1;
    margin: 0 1rem;

    @media all and (max-width: 450px) {
        margin: 0 .7rem;
    }
`

export const Num = styled.div`
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;

    @media all and (max-width: 450px) {
        font-size: 1.6rem;
    }
`

export const Text = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: .8rem;
`