import Features from '../../features/Features'
import TertiaryButton from '../../buttons/TertiaryButton'
import {
    Section,
    Inner,
    BgGreen,
    BgPink,
    FeaturesContainer,
    Content,
    Title,
    Text,
    ButtonContainer,
} from './Elements'
import Link from 'next/link'

const ForExhibitors = ({ data, language }) => {

    const content = language === 'en' ?
    {
        title: data.titleForExhibitorsEn || '',
        text: data.forExhibitorsTextEn || '',
        cta: data.forExhibitorsCtaEn || '',
        ctaUrl: data.forExhibitorsCtaUrlEn || '',
    } : 
    {
        title: data.titleForExhibitorsDe || '',
        text: data.forExhibitorsTextDe || '',
        cta: data.forExhibitorsCtaDe || '',
        ctaUrl: data.forExhibitorsCtaUrlDe || '',
    }

    return (
        <Section>
            <Inner>
                <BgGreen />
                <BgPink />
                <FeaturesContainer
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
                    viewport={{ once: true }}
                    margin="500px"
                >
                    <Features data={language === 'en' ? data.forExhibitorsFeaturesEn : data.forExhibitorsFeaturesDe} />
                </FeaturesContainer>
                <Content
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ once: true }}
                    margin="700px"
                >
                    <Title>{content.title}</Title>
                    <Text>{content.text}</Text>
                    <ButtonContainer>
                        <TertiaryButton><Link href={content.ctaUrl}>{content.cta}</Link></TertiaryButton>
                    </ButtonContainer>
                </Content>
            </Inner>
        </Section>
    )
}

export default ForExhibitors