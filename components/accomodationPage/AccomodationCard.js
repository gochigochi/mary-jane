import { useSwiperSlide } from 'swiper/react'
import { 
  CardContainer,
  Img,
  ImgContainer,
  Content,
  Title,
  Item,
  Icon,
  I,
  Text,
  Deco,
} from './Elements'

const AccomodationCard = ({ content }) => {

  const thisSlide = useSwiperSlide()

  return (
    <CardContainer active={thisSlide.isNext}>
      <ImgContainer>
        <Img src={content.featuredImage.sourceUrl} alt="hotel image" fill />
      </ImgContainer>
      <Content>
        <Title>{content.name}</Title>
        <Item>
          <Icon><I src="/icons/accomodation/car.png" alt="" fill /></Icon>
          <Text>{content.distanceInMinutes} min drive</Text>
        </Item>
        <Item>
          <Icon><I src="/icons/accomodation/location.png" alt="" fill /></Icon>
          <Text>{content.address}</Text>
        </Item>
        <Item>
          <Icon><I src="/icons/accomodation/phone.png" alt="" fill /></Icon>
          <Text>{content.phone}</Text>
        </Item>
        <Item>
          <Icon><I src="/icons/accomodation/web.png" alt="" fill /></Icon>
          <Text><a href={content.website} target="_blank" rel="noopener noreferrer">Website</a></Text>
        </Item>
        <Deco />
      </Content>
    </CardContainer>
  )
}

export default AccomodationCard