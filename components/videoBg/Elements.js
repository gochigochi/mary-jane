import styled from 'styled-components'
import Image from 'next/image'

export const VideoBg = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #ffffff;

    @media all and (max-width: 550px) {
        display: none;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ImageBg = styled(Image)`
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #ffffff;

    @media all and (min-width: 550px) {
        display: none;
    }
`