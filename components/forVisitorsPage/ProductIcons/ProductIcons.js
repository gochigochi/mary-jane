import {
    Inner,
    Title,
    Grid,
    GridElement,
    IconContainer,
    Icon,
    Text,
    Subtitle,
} from './Elements'

const ProductIcons = ({ content, text }) => {
    
    const productIcons = Object.keys(content).map(key => {
        return { ...content[key]}
    })

    return (
        <Inner>
            <Title>{text.title}</Title>
            <Grid>
                {
                    productIcons.map(product => {
                        return(
                            <GridElement>
                                <IconContainer>
                                    <Icon src={product.icon?.sourceUrl} alt={product.icon?.altText} fill />
                                </IconContainer>
                                <Text>{product.text}</Text>
                            </GridElement>
                        )
                    })
                }
            </Grid>
            {/* <Subtitle>{text.text}</Subtitle> */}
        </Inner>
    )
}

export default ProductIcons