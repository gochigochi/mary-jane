import VideoBack from '../../videoBg/VideoBg'
import PrimaryButton from '../../buttons/PrimaryButton'
import Counter from '../../counter/Counter'
import {
    containerMotion,
    elementsMotion,
    titleMotion,
} from './Motions'
import {
    HeroSection,
    Inner,
    Content,
    Title,
    Date,
    Month,
    Year,
    SubTitle,
    CounterContainer,
    ButtonContainer,
} from './Elements'

const Hero = ({ data, language }) => {

    const content = language === 'en' ?
        {
            subtitle: data.subtitleEn || '',
            date: data.dateEn || '',
            month: data.monthEn || '',
            year: data.yearEn || '',
            counter: {
                days: data.counterDaysEn || '',
                hours: data.counterHoursEn || '',
                minutes: data.counterMinutesEn || '',
                seconds: data.counterSecondsEn || '',
            },
            cta: data.ctaEn || '',
            ctaUrl: data.ctaUrl || '',
        } :
        {
            subtitle: data.subtitleDe || '',
            date: data.dateDe || '',
            month: data.monthDe || '',
            year: data.yearDe || '',
            counter: {
                days: data.counterDaysDe || '',
                hours: data.counterHoursDe || '',
                minutes: data.counterMinutesDe || '',
                seconds: data.counterSecondsDe || '',
            },
            cta: data.ctaDe || '',
            ctaUrl: data.ctaUrl || '',
        }

    return (
        <HeroSection>
            <VideoBack />
            <Inner>
                <Content
                    variants={containerMotion}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                >
                    <SubTitle
                        dangerouslySetInnerHTML={{ __html: content.subtitle }}
                        variants={elementsMotion}
                    />
                    <Title variants={elementsMotion}>
                        <Date language={language} dangerouslySetInnerHTML={{ __html: content.date }} />
                        <Month language={language} dangerouslySetInnerHTML={{ __html: content.month }} />
                        <Year language={language} dangerouslySetInnerHTML={{ __html: content.year }} />
                    </Title>
                    <CounterContainer variants={elementsMotion}>
                        <Counter content={content.counter} />
                    </CounterContainer>
                    <ButtonContainer variants={elementsMotion}>
                        <PrimaryButton>
                            <a
                                href={content.ctaUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {content.cta}
                            </a>
                        </PrimaryButton>
                    </ButtonContainer>
                </Content>
            </Inner>
        </HeroSection>
    )
}

export default Hero