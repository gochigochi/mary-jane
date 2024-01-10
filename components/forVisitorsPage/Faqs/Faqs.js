import { useState } from "react"
import {
    Inner,
    Item,
    Qheader,
    Q,
    Dot,
    AContainer,
    A,
    Title,
} from './Elements'

const Faqs = ({ content }) => {

    const [active, setActive] = useState("")
    const handleActive = (id) => {
        active === id ? setActive(0) : setActive(id)
    }

    const questions = Object.keys(content.questions).map(key => {
        return { ...content.questions[key], id: content.questions[key].question}
    })

    return (
        <Inner>
            <Title>{content.title}</Title>
            {
                questions.map(item => {
                    return(
                        <Item key={item.id}>
                            <Qheader onClick={() => handleActive(item.id)}>
                                <Q>{item.question}</Q>
                                <Dot active={item.id === active} />
                            </Qheader>
                            <AContainer active={item.id === active}>
                                <A dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </AContainer>
                        </Item>
                    )
                })
            }
        </Inner>
    )
}

export default Faqs