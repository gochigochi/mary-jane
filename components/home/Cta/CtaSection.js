import React from 'react'
import styled from 'styled-components'
import { GetContentContext } from '../../context/ContentContext'
import EmailForm from './emailForm/EmailForm'
import HandsSection from './handsSection/HandsSection'

const Section = styled.section`
    width: 100%;
    position: relative;
    margin: 5rem 0 0 0;
`

const Title = styled.h2`
    font-size: 2.5rem;
    text-align: center;
`

const CtaSection = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <Title>{content.newsletterSection.mainTitle}</Title>
                    <HandsSection />
                    <EmailForm />
                </>
            }
        </Section>
    )
}

export default CtaSection