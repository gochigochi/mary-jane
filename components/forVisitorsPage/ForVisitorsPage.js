import GeneralInfo from './GeneralInfo/GeneralInfo'
import GeneralCards from './GeneralCards/GeneralCards'
import ProductIcons from './ProductIcons/ProductIcons'
import WhyVisit from './WhyVisit/WhyVisit'
import Agenda from './Agenda/Agenda'
import EntranceFee from './EntranceFee/EntranceFee'
import Location from './Location/Location'
import Faqs from './Faqs/Faqs'
import {
    HeadSection,
    HeadBg,
} from './Elements'

const ForVisitorsPage = ({ content }) => {

    return (
        <>
            <HeadSection>
                <HeadBg src={content.headerbg.sourceUrl} alt="" fill />
            </HeadSection>
            <GeneralInfo content={content.generalInfo} />
            <GeneralCards content={content.generalCards} />
            <ProductIcons content={content.productIcons} text={content.productIconsText}/>
            <WhyVisit content={content.whyVisit} />
            <Agenda content={content.agenda} />
            <EntranceFee content={content.agenda.entranceFee} />
            <Location />
            <Faqs content={content.faq} />
        </>
    )
}

export default ForVisitorsPage