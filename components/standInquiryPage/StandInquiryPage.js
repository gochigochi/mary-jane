import Jotform from 'react-jotform'
import {
    Inner,
    HeadSection,
    HeadBg,
} from './Elements'


const StandInquiryPage = ({ content }) => {

    console.log(content)

    return (
        <>
            <HeadSection>
                <HeadBg src={content.bgImage.sourceUrl} alt="" fill />
            </HeadSection>
            <Inner>
                <Jotform src="https://form.jotform.com/73424744902356" />
            </Inner>
        </>
    )
}

export default StandInquiryPage