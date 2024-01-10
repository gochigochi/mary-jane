import styled from 'styled-components'
import Image from 'next/image'

export const Card = styled.div`
    background-color: #ffffff;
    border-radius: 5px;
    width: 13rem;
    height: 17rem;
    padding: .3rem .3rem 1.5rem .3rem;
    position: absolute;
    box-shadow: var(--light-shadow);
    top: ${({x}) => x ? x : "0" };
    left: ${({y}) => y ? y : "0" };
    rotate: ${({rt}) => rt ? rt : "0" }deg;
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`

export const Img = styled(Image)`
    object-fit: cover;
`
