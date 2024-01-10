import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = styled(motion.button)`
    background-color: var(--pink);
    font-size: 1rem;
    padding: .7rem 2rem;
    color: #ffffff;
    border-radius: 50px;
    cursor: pointer;
    transition: opacity .5s ease-in-out;

    &:hover {
        opacity: .8;
    }
`

const SecondaryButton = ({ children }) => {
    return (
        <Button
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", bounce: .5 }}
        >{children}</Button>
    )
}

export default SecondaryButton