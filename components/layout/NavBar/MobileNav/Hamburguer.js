import React from 'react'
import { 
    Hamb,
    Span,
} from './Elements'

const Hamburguer = ({ opened, setOpened, scrolled }) => {
  return (
    <Hamb onClick={() => setOpened(!opened)} scrolled={scrolled}>
        <Span opened={opened} scrolled={scrolled}/>
        <Span opened={opened} scrolled={scrolled}/>
        <Span opened={opened} scrolled={scrolled}/>
    </Hamb>
  )
}

export default Hamburguer