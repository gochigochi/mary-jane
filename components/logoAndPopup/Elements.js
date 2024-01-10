import styled from 'styled-components'
import Image from 'next/image'

export const LogoContainer = styled.div`
    width: 10rem;
    height: 5rem;
    position: relative;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const PopContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Pop = styled.div`

`

export const PopLogoContainer = styled.div`
    position: relative;
    width: 5rem;
    height: 5rem;
`

export const PopLogo = styled(Image)`
    object-fit: cover;
`