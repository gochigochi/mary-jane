import {
    HeadSection,
    HeadBg,
    Inner,
    Content,
    Title,
    SubTitle,
    Item,
    Dot,
    Text,
    Note,
    Contact,
    ContactTitle,
    ContactText,
} from './Elements'

const MediaPage = ({ content }) => {

    const listsArray = Object.keys(content.lists).map(key => {
        return { ...content.lists[key] }
    })

    const contactDetails = Object.keys(content.contact.details).map(key => content.contact.details[key])

    return (
        <>
            <HeadSection>
                <HeadBg src="/temp/contact-media-header-image.png" alt="" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <Title>{content.title}</Title>
                    <Text dangerouslySetInnerHTML={{ __html: content.text }} />
                    {
                        listsArray.map(item => {

                            const itemsArray = Object.keys(item.list).map(key => item.list[key])

                            return (
                                <div key={item.title}>
                                    <SubTitle>{item.title}</SubTitle>
                                    {
                                        itemsArray.map(item => {
                                            return (
                                                <Item key={item}>
                                                    <Dot />
                                                    <Text dangerouslySetInnerHTML={{ __html: item }} />
                                                </Item>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <Note dangerouslySetInnerHTML={{ __html: content.note }} />
                    <Contact>
                        <ContactTitle>{content.contact.title}</ContactTitle>
                        {
                            contactDetails.map(detail => <ContactText>{detail}</ContactText>)
                        }
                    </Contact>
                </Inner>
            </Content>
        </>
    )
}

export default MediaPage