import { BdSection, Title } from '../Elements'
import { 
    Inner,
    Grid, 
    Item,
    Icon, 
    IconContainer, 
    Text,
} from './Elements'

const ProductsGrid = () => {

    return (
        <BdSection>
            {/* <Inner>
                <Title>{content.visitorsPage.products.title}</Title>
                <Grid>
                    {
                        content.visitorsPage.products.products.map(item => {
                            return(
                                <Item key={item.url}>
                                    <IconContainer>
                                        <Icon src={item.url} fill/>
                                    </IconContainer>
                                    <Text>{item.name}</Text>
                                </Item>
                            )
                        })
                    }
                </Grid>
            </Inner> */}
        </BdSection>
    )
}

export default ProductsGrid