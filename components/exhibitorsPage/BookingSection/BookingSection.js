import {
    Section,
    Inner,
    Title,
    ButtonsContainer,
    FileButton,
} from '../Elements'
import {
    SubTitle,
    TimePlanContainer,
    TimePlan,
    Body,
} from './Elements'

const BookingSection = () => {

    return (
        <Section id="booking-section" bgColor="var(--bg-gray)">
            {/* <Inner>
                <Title>{content.bookingInfo.title}</Title>
                <SubTitle>{content.bookingInfo.timeplanSubtitle}</SubTitle>
                <TimePlanContainer>
                    <TimePlan>
                        <Body>
                            {
                                content.bookingInfo.timeplan.map(item => {
                                    return (
                                        <tr dangerouslySetInnerHTML={{ __html: item }} />
                                    )
                                })
                            }
                        </Body>
                    </TimePlan>
                </TimePlanContainer>
                <ButtonsContainer>
                    <FileButton
                        href={content.bookingInfo.buttons[0].href}
                    >
                        {content.bookingInfo.buttons[0].title}
                    </FileButton>
                    <FileButton
                        href={content.bookingInfo.buttons[1].href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {content.bookingInfo.buttons[1].title}
                    </FileButton>
                </ButtonsContainer>
            </Inner> */}
        </Section>
    )
}

export default BookingSection