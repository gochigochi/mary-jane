import { GetLanguageContext } from '../../context/LanguageContext'
import {
  HeadSection,
  HeadBg,
  Inner,
  Left,
  Right,
  LogoContainer,
  Logo,
  Content,
  Title,
  Text,
  Website,
} from './Elements'

const ExhibitorDetailPage = ({ data, img }) => {

  const { language } = GetLanguageContext()

  console.log(data)

  return (
    <>
      <HeadSection>
        <HeadBg src={img.sourceUrl} alt={img.altText} fill />
      </HeadSection>
      <Inner>
        <Left>
          <LogoContainer>
            <Logo src={data.logo.sourceUrl} alt={data.logo.altText} fill />
          </LogoContainer>
        </Left>
        <Right>
          <Content>
            <Title>{data.title}</Title>
            {/* <Text>{language === 'en' ? data.countryEn : data.countryDe}</Text> */}
            <Website 
              href={`https://${data.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.website}
            </Website>
          </Content>
        </Right>
      </Inner>
    </>
  )
}

export default ExhibitorDetailPage