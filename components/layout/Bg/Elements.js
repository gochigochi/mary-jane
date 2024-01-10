import styled from 'styled-components'

const size = '30rem'

export const BgContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`

export const BgInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    opacity: ${(opacity) => opacity}; 
`

export const Green = styled.div`
    width: ${size};
    height: ${size};
    background: radial-gradient(50% 50% at 50% 50%, rgba(147, 194, 68, 0.40) 0%, rgba(147, 194, 68, 0) 100%);
    position: absolute;
    top: 1rem;
    left: 1rem;
`

export const Pink = styled.div`
    width: ${size};
    height: ${size};
    background: radial-gradient(50% 50% at 50% 50%, rgba(226, 123, 175, 0.40) 0%, rgba(226, 123, 175, 0) 100%);
    position: absolute;
    top: 10rem;
    left: 28rem;
`