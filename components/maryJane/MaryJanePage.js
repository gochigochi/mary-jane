import { GetLanguageContext } from '../../context/LanguageContext'
import Hero from './Hero/Hero'
import Cards from './Cards/Cards'
import Card from './Card/Card'
import { Container } from './Elements'
import FooterCta from './FooterCta/FooterCta'
import Journey from './Journey/Journey'

const MaryJanePage = ({ res }) => {

    const { language } = GetLanguageContext()
    const content = language === 'en' ? res.data.pages.edges[0].node.maryJane.maryJaneContentEn : res.data.pages.edges[0].node.maryJane.maryJaneContentDe

    return (
        <Container>
            <Hero content={content.hero} />
            <Cards  content={content.cards}/>
            <Card content={content.card} />
            <Journey content={content.journey} title={content.journeyTitle} />
            <FooterCta content={content.footerCta} />
        </Container>
    )
}

export default MaryJanePage