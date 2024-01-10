import React, { useState } from 'react'
import {
    HeroImage,
    HeroSection,
    HeroTitle,
    Overlay,
    Inner,
    Item,
    Qheader,
    Q,
    AContainer,
    A,
    Dot,
} from './Elements'

const PressPage = () => {

    const [active, setActive] = useState(1)
    const handleActive = (id) => {
        active === id ? setActive(0) : setActive(id)
    }

    return ( <> </>
        // <>
        //     {
        //         Object.entries(content).length !== 0 &&
        //         <>
        //             <HeroSection>
        //                 <HeroImage
        //                     src={content.faqPage.heroImg.src}
        //                     alt={content.faqPage.heroImg.alt}
        //                     fill
        //                 />
        //                 <Overlay />
        //                 <HeroTitle>{content.faqPage.title}</HeroTitle>
        //             </HeroSection>
        //             <Inner>
        //                 {
        //                     content.faqPage.items.map(item => {
        //                         return (
        //                             <Item key={item.id}>
        //                                 <Qheader onClick={() => handleActive(item.id)}>
        //                                     <Q>{item.q}</Q>
        //                                     <Dot active={item.id === active}/>
        //                                 </Qheader>
        //                                 <AContainer active={item.id === active}>
        //                                     <A dangerouslySetInnerHTML={{ __html: item.a }} />
        //                                 </AContainer>
        //                             </Item>
        //                         )
        //                     })
        //                 }
        //             </Inner>
        //         </>
        //     }
        // </>
    )
}

export default PressPage