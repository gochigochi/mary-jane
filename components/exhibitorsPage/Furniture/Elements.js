import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
`

export const Left = styled.div`
    width: 50%;
    position: relative;
`

export const Right = styled.div`
    width: 50%;
    padding: 3rem 0 3rem 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const Subtitle = styled.h3`
    text-align: left;
    margin-bottom: 1.5rem;
`

export const Details = styled.div`

    p {
        margin-bottom: 1.1rem;
    }
`

export const FilesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0 2.5rem 0;    
`

export const FileContainer = styled.div`
    width: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--gray-blue);
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: var(--soft-shadow);
`

export const FileName = styled.div`
    font-size: .8rem;
    text-align: center;
    color: #ffffff;
`

export const FileIcon = styled.a`
    cursor: pointer;

    svg {
        width: 3rem;
        fill: #ffffff;
    }
`