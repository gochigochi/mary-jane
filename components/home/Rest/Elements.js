import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 5rem 0 2rem 0;
    height: 30rem;
    position: relative;
`

export const Bg = styled(Image)`
    object-fit: cover;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, rgba(217, 217, 217, 0) 60.46%, #F7F7F7 81.16%);
    z-index: 10;
`