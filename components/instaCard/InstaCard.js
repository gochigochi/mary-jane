import React from 'react'
import {
    Card,
    ImgContainer,
    Img,
} from './Elements'

const InstaCard = ({ src, x, y, rt, alt = "mary jane berlin experience" }) => {
  return (
    <Card 
      x={x} 
      y={y} 
      rt={rt}
    >
        <ImgContainer>
            <Img src={src} alt={alt} fill />
        </ImgContainer>
    </Card>
  )
}

export default InstaCard