import styled from 'styled-components'

export const SubTitle = styled.h3`
    position: relative;
    font-size: 1.5rem;
    text-align: center;
    margin: 3.5rem auto 2.5rem auto;
    color: var(--gray-blue);

    &:after {
        content: '';
        height: 1px;
        width: 50%;
        background-color: var(--gray-blue);
        position: absolute;
        transform: translateX(-50%);
        bottom: -1.5rem;
        left: 50%;
    }
`

export const TimePlanContainer = styled.div`
    margin: 2rem auto 1rem auto;
`

export const TimePlan = styled.table`

`

export const Body = styled.tbody`
    tr {

    }

    td {
        padding: 0 0rem 3rem 3rem;
        margin-right: 1rem;
        text-align: left;
        line-height: 1;

        p {
            margin-bottom: 1rem;
        }
    }
`