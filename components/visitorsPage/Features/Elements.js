import styled from "styled-components"
import Image from "next/image"

export const Left = styled.div`
    position: relative;
    width: 50%;
`

export const Right = styled.div`
    position: relative;
    left: 1rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FeaturesList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 13rem;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`

export const IconContainer = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1.5rem;
    position: relative;
`

export const Icon = styled(Image)`
    object-fit: contain;
`

export const FeaturesText = styled.p`
    width: 28rem;
    font-family: 'Oswald', sans-serif;
    line-height: 1;
    font-size: 1.3rem;
    color: #435a65;
`
