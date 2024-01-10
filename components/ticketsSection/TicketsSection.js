import { Section, Inner, SectionTitle } from './Elements'

const TicketsSection = () => {
  return (
    <Section>
        <Inner>
            <SectionTitle></SectionTitle>
            <iframe src="https://maryjaneberlin.ticket.io/" style={{width: "100%", height: "600px", border: "none"}} scrolling="auto" frameBorder="0" allowtransparency="true"></iframe>
            <script async src="https://maryjaneberlin.ticket.io/iframe.js"></script>
        </Inner>
    </Section>
  )
}

export default TicketsSection