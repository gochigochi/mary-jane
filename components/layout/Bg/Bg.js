import { useScroll, useTransform } from 'framer-motion'
import {
    BgContainer,
    BgInner,
    Green,
    Pink,
} from './Elements'

const Bg = () => {

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 5500], [0, 1])

  return (
    <BgContainer>
        <BgInner opacity={opacity}>
            <Green />
            <Pink />
        </BgInner>
    </BgContainer>
  )
}

export default Bg