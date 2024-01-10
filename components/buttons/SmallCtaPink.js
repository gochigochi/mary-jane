import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = styled(motion.button)`
    background-color: var(--pink);
    font-size: .8rem;
    padding: .7rem 2rem;
    color: #ffffff;
    border-radius: 50px;
    cursor: pointer;

    transition: background-color .5s ease-in-out;

    &:hover {
        background-color: var(--pink-hover);
    }
`

const SmallCtaAlt = ({ children }) => {
  return (
    <Button
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", bounce: .5 }}
    >{children}</Button>
  )
}

export default SmallCtaAlt