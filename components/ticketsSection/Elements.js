import styled from 'styled-components'

export const Section = styled.section`
    padding: 0 0 5rem 0;
    /* background-color: var(--light-blue); */
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
    margin-bottom: 1.5rem;

    @media all and (max-width: 450px) {
        padding-bottom: 1rem;
        line-height: 1.2;
        width: 90%;
    }
`