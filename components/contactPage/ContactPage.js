import {
    HeadSection,
    HeadBg,
    Inner,
    Content,
    Title,
    SubTitle,
    Item,
    Icon,
    I,
    Text,
} from './Elements'

const ContactPage = ({ data, language }) => {

    const title = language === 'en' ? 
    {
        t: data.contactTitleEn || '',

    } :
    {
        t: data.contactTitleDe || '',

    }

    const content = language === 'en' ? data.contentEn : data.contentDe

    const contentArray = Object.keys(content).map(key => {
        return { ...content[key] }
    })

    return (
        <>
            <HeadSection>
                <HeadBg src="/temp/contact-media-header-image.png" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <Title>{title.t}</Title>
                    {
                        contentArray.map(item => {

                            const itemsArray = Object.keys(item.items).map(key => {
                                return { ...item.items[key] }
                            })

                            return(
                                <>
                                    <SubTitle>{item?.title}</SubTitle>
                                    {
                                        itemsArray.map(item => {
                                            return(
                                                <Item>
                                                    {
                                                        item?.icon &&
                                                        <Icon>
                                                            <I src={item?.icon.sourceUrl} alt={item?.icon.altText} fill />
                                                        </Icon>
                                                    }
                                                    <Text dangerouslySetInnerHTML={{ __html: item?.text }} />
                                                </Item>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }
                </Inner>
            </Content>
        </>
    )
}

export default ContactPage