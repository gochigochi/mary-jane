import { containerMotion, elementMotion } from './Motion'
import {
    Section,
    Inner,
    Box,
    IconContainer,
    Icon,
    Text,
} from "./Elements"


const FeaturesSection = () => {

    const temp = [
        {
            src: '/icons/temp/g1.png',
            alt: '',
            text: '<span><span class="features-bold">UMSATZ STEIGERN</span> durch persönlichen Kunden- und Lieferantenkontakt mit der Brand</span>',
        },
        {
            src: '/icons/temp/g2.png',
            alt: '',
            text: '<span><span class="features-bold">GEZIELTES MARKETING</span> vor und während der Messe anhand deiner Bedürfnisse & Wünsche mit Sponsoringpaketen</span>',
        },
        {
            src: '/icons/temp/g3.png',
            alt: '',
            text: '<span><span class="features-bold">NETZWERK ERWEITERN</span> durch Kontakte vom Hersteller bis hin zum Endkunden konzentriert an einem Ort</span>',
        },
        {
            src: '/icons/temp/g4.png',
            alt: '',
            text: '<span><span class="features-bold">KUNDENBEDÜRFNISSE & TRENDS VORHERSEHEN</span> durch den direkten Austausch und ehrliches Feedback von über 30.000 potentiellen Kundend</span>',
        },
        {
            src: '/icons/temp/g5.png',
            alt: '',
            text: '<span><span class="features-bold">SUPPORT ERHALTEN</span> von der Anmeldung bis zur Abreise durch ein professionelles Organisationsteam, um deinen Messeauftritt perfekt zu gestalten</span>',
        },
        {
            src: '/icons/temp/g6.png',
            alt: '',
            text: '<span><span class="features-bold">ZENTRALE LAGE</span> in Deutschlands Hauptstadt Berlin mit guter Anbindung an den Flughafen, Bahnhöfen und Autobahnen</span>',
        },
    ]


    return (
        <Section>
            <Inner>
                {
                    temp.map(item => {
                        return (
                            <Box 
                            key={item.src} 
                            variants={elementMotion}
                            initial="initial"
                            whileInView="animate"
                            exit="exit"
                            viewport={{once: true}}
                            margin="700px"
                            >
                                <IconContainer>
                                    <Icon src={item.src} alt={item.alt} fill />
                                </IconContainer>
                                <Text dangerouslySetInnerHTML={{ __html: item.text }} />
                            </Box>
                        )
                    })
                }
            </Inner>
        </Section>
    )
}

export default FeaturesSection