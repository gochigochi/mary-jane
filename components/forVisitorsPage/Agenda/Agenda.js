import { 
    Inner,
    LeftContainer,
    Subtitle,
    Title,
    TitleContainer,
    Content,
    Box,
    BoxTitle,
    BoxSubtitle,
    Detail,
} from "./Elements"


const Agenda = ({ content }) => {

    const openingItems = Object.keys(content.opening.items).map(key => {
        return { ...content.opening.items[key]}
    })

    const afterPartyItems = Object.keys(content.afterParty.items).map(key => {
        return { ...content.afterParty.items[key]}
    })

    return (
        <Inner>
            <TitleContainer>
                <Title>{content.title}</Title>
                <Subtitle>{content.subtitle}</Subtitle>
            </TitleContainer>
            <Content>
                <Box>
                    <BoxTitle>{content.opening.title}</BoxTitle>
                    <BoxSubtitle>{content.opening.subtitle}</BoxSubtitle>
                    {
                        openingItems.map(item => {
                            return(
                                <Detail key={item.title}>
                                    <span>{item.title}</span>
                                    {item.text}
                                </Detail>
                            )
                        })
                    }
                </Box>
                <Box>
                    <BoxTitle>{content.afterParty.title}</BoxTitle>
                    {
                        afterPartyItems.map(item => {
                            return(
                                <Detail key={item.title}>
                                    <span>{item.title}</span>
                                    {item.text !== null && item.text}
                                </Detail>
                            )
                        })
                    }
                </Box>
            </Content>
        </Inner>
    )
}

export default Agenda