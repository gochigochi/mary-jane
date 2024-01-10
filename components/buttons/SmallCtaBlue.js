import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = styled(motion.button)`
    background-color: var(--light-blue);
    font-size: .8rem;
    padding: .5rem 1.5rem;
    color: #315E5C;
    border-radius: 50px;
    cursor: pointer;

    transition: background-color .5s ease-in-out;

    &:hover {
        background-color: var(--light-blue-hover);
        color: #fff;
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