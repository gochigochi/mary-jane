import styled from "styled-components"
import Image from "next/image"

export const Container = styled.div`

`

export const Text = styled.p`

`

export const BgIcon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`

export const IconContainer = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
`

export const Icon = styled(Image)`
    object-fit: cover;
    opacity: .3;
`