import { useState, useEffect } from 'react'
import {
    HeadSection,
    HeadBg,
    Content,
    Inner,
    Title,
    InnerHeader,
    Tab,
    Date,
    TopicSelector,
    TopicContainer,
    ChevronContainer,
    MobileCat,
    CatPopupContainer,
    MobileCategoriesContainer,
    InnerBody,
    BodySection,
    Hour,
    TopicElement,
    ConfContent,
    ConfTitle,
    Tag,
    Description,
    SpeakersTitle,
    SpeakerContainer,
    SpeakerImgContainer,
    SpeakerDetails,
    SpeakerName,
    SpeakerProf,
    SpeakerImg,
    TagsContainer,
} from './Elements'

const ConferencesPage = ({ data, content, lng }) => {

    const [date, setDate] = useState("23")
    const [topic, setTopic] = useState("all")
    const [currentConferences, setCurrentConferences] = useState([])
    const [openTopics, setOpenTopics] = useState(false)
    const [mobileCatOpen, setMobileCatOpen] = useState(false)
    const topics = Object.keys(content.topics).map(key => {
        return { ...content.topics[key] }
    })

    const observeClicks = (e) => !e.target.id.includes("cat") && setOpenTopics(false)

    const handleMobileClick = (value) => {
        setMobileCatOpen(false)
        setTopic(value)
    }

    const getTimeInMinutes = (time) => {
        const minuteStart = time.indexOf(":")
        const hoursPart = time.slice(0, minuteStart)
        const minutesPart = time.slice(minuteStart + 1)
        const hourInMinutes = (hoursPart * 60) + parseInt(minutesPart)
        return hourInMinutes
    }

    const orderConferences = () => {
        return data.sort((a, b) => getTimeInMinutes(a.node.time) - getTimeInMinutes(b.node.time))
    }

    const getTopic = (topic) => topics.filter(tpc => tpc.value === topic && tpc.label)

    useEffect(() => {

        window.addEventListener('click', observeClicks)

        return () => window.removeEventListener('click', observeClicks)
    }, [])

    useEffect(() => {

        const filteredData = orderConferences().filter(conference => {
            const conferenceDate = conference.node.conferenceDate.slice(conference.node.conferenceDate.length - 2, conference.node.conferenceDate.length)
            return conferenceDate === date
        })

        setTopic("all")
        setCurrentConferences(filteredData)
    }, [date])

    useEffect(() => {
        const filteredData = orderConferences().filter(conference => {
            const conferenceDate = conference.node.conferenceDate.slice(conference.node.conferenceDate.length - 2, conference.node.conferenceDate.length)
            const sameTopic = conference.node.topic.some(conferenceTopic => conferenceTopic === topic)

            if (topic === "all") {
                return conferenceDate === date
            }

            return conferenceDate === date && sameTopic
        })

        setCurrentConferences(filteredData)
    }, [topic])

    const handleClick = (e) => {
        setDate(e.target.id)
    }

    return (
        <>
            <HeadSection>
                <HeadBg src={content.bgimg.sourceUrl} alt="" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <Title>{content.title}</Title>
                    <InnerHeader>
                        <Tab id="23" onClick={handleClick} active={date === "23"}><Date>23.06</Date></Tab>
                        <Tab id="24" onClick={handleClick} active={date === "24"}><Date>24.06</Date></Tab>
                        <Tab id="25" onClick={handleClick} active={date === "25"}><Date>25.06</Date></Tab>
                        <Tab>
                            <TopicSelector
                                id="cat"
                                onClick={() => setOpenTopics(!openTopics)}
                            >
                                {content.topic}
                                <ChevronContainer open={openTopics}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                        <g id="Arrow / Chevron_Down">
                                            <path id="Vector" d="M19 9L12 16L5 9" stroke="#aeaeae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                </ChevronContainer>
                                <TopicContainer open={openTopics}>
                                    {
                                        topics.map(topic => {
                                            return (
                                                <TopicElement
                                                    key={topic.value}
                                                    onClick={() => setTopic(topic.value)}
                                                >
                                                    {topic.label}
                                                </TopicElement>
                                            )
                                        })
                                    }
                                </TopicContainer>
                            </TopicSelector>
                            <MobileCat onClick={() => setMobileCatOpen(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                    <g id="Iconly/Curved/Category">
                                        <g id="Category">
                                            <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M21.0003 6.6738C21.0003 8.7024 19.3551 10.3476 17.3265 10.3476C15.2979 10.3476 13.6536 8.7024 13.6536 6.6738C13.6536 4.6452 15.2979 3 17.3265 3C19.3551 3 21.0003 4.6452 21.0003 6.6738Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Stroke 5" fill-rule="evenodd" clip-rule="evenodd" d="M21.0003 17.2619C21.0003 19.2905 19.3551 20.9348 17.3265 20.9348C15.2979 20.9348 13.6536 19.2905 13.6536 17.2619C13.6536 15.2333 15.2979 13.5881 17.3265 13.5881C19.3551 13.5881 21.0003 15.2333 21.0003 17.2619Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Stroke 7" fill-rule="evenodd" clip-rule="evenodd" d="M10.3467 17.2619C10.3467 19.2905 8.7024 20.9348 6.6729 20.9348C4.6452 20.9348 3 19.2905 3 17.2619C3 15.2333 4.6452 13.5881 6.6729 13.5881C8.7024 13.5881 10.3467 15.2333 10.3467 17.2619Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                            </MobileCat>
                            {
                                mobileCatOpen ?
                                <CatPopupContainer>
                                    <MobileCategoriesContainer open={openTopics}>
                                        {
                                            topics.map(topic => {
                                                return (
                                                    <TopicElement onClick={() => handleMobileClick(topic.value)} className="cat-btn" >{topic.label}</TopicElement>
                                                )
                                            })
                                        }
                                    </MobileCategoriesContainer>
                                </CatPopupContainer> : null
                            }
                        </Tab>
                    </InnerHeader>
                    <InnerBody>
                        {
                            currentConferences.map(conference => {

                                const title = lng === "de" || !conference.node.conferenceTitleEn ? conference.node.conferenceTitle : conference.node.conferenceTitleEn
                                const description = lng === "de" || !conference.node.descriptionEn ? conference.node.description : conference.node.descriptionEn

                                return (
                                    <BodySection key={title}>
                                        <Hour>{conference.node.time}</Hour>
                                        <ConfContent>
                                            <ConfTitle>{title}</ConfTitle>
                                            <TagsContainer>
                                                {
                                                    conference.node.topic.map(topic => <Tag key={topic}>{getTopic(topic).map(tpc => <span key={tpc.label}>{tpc.label}</span>)}</Tag>)
                                                }
                                            </TagsContainer>
                                            {
                                                description.length !== 0 &&
                                                <Description>{description}</Description>
                                            }
                                            <SpeakersTitle>Speakers</SpeakersTitle>
                                            {
                                                conference.node.conferenceSpeakers.edges.map(speaker => {

                                                    const prof = (lng === "en" ? speaker.node.professionEn : speaker.node.profession) || speaker.node.profession

                                                    return (
                                                        <SpeakerContainer>
                                                            <SpeakerImgContainer>
                                                                <SpeakerImg src={speaker.node.image.sourceUrl} alt={speaker.node.image.altText} fill />
                                                            </SpeakerImgContainer>
                                                            <SpeakerDetails>
                                                                <SpeakerName>{speaker.node?.name} {speaker.node.surname}</SpeakerName>
                                                                <SpeakerProf>{prof}</SpeakerProf>
                                                            </SpeakerDetails>
                                                        </SpeakerContainer>
                                                    )
                                                })
                                            }
                                        </ConfContent>
                                    </BodySection>
                                )
                            })
                        }
                    </InnerBody>
                </Inner>
            </Content>
        </>
    )
}

export default ConferencesPage