import { useEffect, useState } from 'react'
import Link from 'next/link'
import SmallCta from '../../buttons/SmallCta'
import {
    Section,
    Inner,
    Head,
    ButtonContainer,
    SectionTitle,
    LogosContainer,
    LogoContainer,
    Logo
} from './Elements'

const SponsorsSection = ({ data, content, language }) => {

    const [sponsors, setSponsors] = useState([])
    const text = language === 'en' ?
        {
            title: content.sponsorsTitleEn,
            cta: content.sponsorsCtaEn.title,
            url: content.sponsorsCtaEn.url,
        } :
        {
            title: content.sponsorsTitleDe,
            cta: content.sponsorsCtaDe.title,
            url: content.sponsorsCtaDe.url,
        }

    useEffect(() => {
        setSponsors(data)
    }, [])

    return (
        <Section>
            <Inner>
                <Head>
                    <SectionTitle>{text.title}</SectionTitle>
                    <ButtonContainer>
                        <Link href={text.url}>
                            <SmallCta>{text.cta}</SmallCta>
                        </Link>
                    </ButtonContainer>
                </Head>
                <LogosContainer>
                    {
                        sponsors.length !== 0 ?
                            sponsors.map(sponsor => {
                                return (
                                    <LogoContainer
                                        href={sponsor.node.uri}
                                        key={sponsor.node.title}
                                    >
                                        <Logo
                                            src={sponsor.node.logo.sourceUrl}
                                            alt={sponsor.node.logo.altText}
                                            fill
                                            sizes="25vw"
                                        />
                                    </LogoContainer>
                                )
                            }) : null
                    }
                </LogosContainer>
            </Inner>
        </Section>
    )
}

export default SponsorsSection