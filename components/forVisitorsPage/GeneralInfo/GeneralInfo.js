import SmallCta from '../../buttons/SmallCta'
import {
  Inner,
  SectionHeader,
  Title,
  Grid,
  LeftContainer,
  RightContainer,
  Subtitle,
  Text,
  // ButtonContainer,
  Img,
  ImgContainer,
} from './Elements'

const GeneralInfo = ({ content }) => {


  return (
    <Inner>
      <SectionHeader>
        <Title>{content.title}</Title>
      </SectionHeader>
      <Grid>
        <LeftContainer>
          <ImgContainer>
            <Img src={content.image.sourceUrl} alt={content.image.altText} fill />
          </ImgContainer>
        </LeftContainer>
        <RightContainer>
          <Subtitle>{content.subtitle}</Subtitle>
          <Text>{content.text}</Text>
          {/* <ButtonContainer href={content.cta.url}>
            <SmallCta>{content.cta.text}</SmallCta>
          </ButtonContainer> */}
        </RightContainer>
      </Grid>
    </Inner>
  )
}

export default GeneralInfo