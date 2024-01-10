import Count from './Count'
import {
    Items,
    ItemContainer,
    IconContainer,
    CountContainer,
    Icon,
    Text,
} from './Elements'

const Features = ({ data }) => {

    const dataArray = Object.keys(data).map(key => {
        return { ...data[key] }
    })

    return (
        <Items>
            {
                dataArray.map(item => {
                    return (
                        <ItemContainer key={item.icon.sourceUrl}>
                            <IconContainer>
                                <Icon
                                    src={item.icon.sourceUrl}
                                    alt={item.icon.altText}
                                    fill
                                    sizes="25vw"
                                />
                            </IconContainer>
                            <CountContainer>
                                <Count>
                                    {item.num}
                                </Count>
                                <span>+</span>
                            </CountContainer>
                            <Text dangerouslySetInnerHTML={{ __html: item.text }} />
                        </ItemContainer>
                    )
                })
            }
        </Items>
    )
}

export default Features