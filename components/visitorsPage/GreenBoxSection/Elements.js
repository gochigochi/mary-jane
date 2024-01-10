import styled from "styled-components"
import Image from "next/image"

export const Left = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Right = styled.div`
    position: relative;
    width: 50%;
`

export const GreenBox = styled.div`
    width: 22rem;
    border-radius: 5px;
    padding: 2rem;
    background-color: var(--middle-green);
`

export const GreenBoxText = styled.p`
    color: #ffffff;
    font-size: .9rem;
`

export const HandContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 8rem;
`

export const HandInner = styled.div`
    width: 7rem;
    height: 7rem;
    position: relative;
`

export const Hand = styled(Image)`
    object-fit: contain;
`