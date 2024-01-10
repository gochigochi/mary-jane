import { BdSection, Inner } from '../Elements'
import InstaCard from '../../instaCard/InstaCard'
import {
    Right,
    Left,
    FeaturesList,
    FeaturesText,
    Item,
    IconContainer,
    Icon,
} from './Elements'

const Features = () => {

    return (
        <BdSection>
            {/* <Inner>
                <Left>
                    <InstaCard
                        src={content.visitorsPage.instaCardOne.src}
                        alt={content.visitorsPage.instaCardOne.src}
                        x="4rem"
                        y="7rem"
                        rt="16"
                    />
                    <InstaCard
                        src={content.visitorsPage.instaCardTwo.src}
                        alt={content.visitorsPage.instaCardTwo.src}
                        x="5rem"
                        y="0rem"
                        rt="-5"
                    />
                </Left>
                <Right>
                    <FeaturesList>
                        {
                            content.visitorsPage.features.map(item => {
                                return (
                                    <Item key={item}>
                                        <IconContainer>
                                            <Icon
                                                src={content.visitorsPage.featuresIcon}
                                                alt="features icon"
                                                fill
                                            />
                                        </IconContainer>
                                        <FeaturesText>
                                            {item}
                                        </FeaturesText>
                                    </Item>
                                )
                            })
                        }
                    </FeaturesList>
                </Right>
            </Inner> */}
        </BdSection>
    )
}

export default Features