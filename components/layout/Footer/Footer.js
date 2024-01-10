import SocialSection from './SocialSection/SocialSection'
import { GetLanguageContext } from '../../../context/LanguageContext'
import {
  Section,
  Inner,
  Left,
  LeftLeft,
  LeftRight,
  Right,
  RightLeft,
  RightRight,
  Title,
  Text,
  LogoContainer,
  Logo,
  ScrubbleContainer,
  ScrubbleImg,
  Links,
  FooterLink,
} from './Elements'
import NewsletterForm from './NewsletterForm/NewsletterForm'

const Footer = () => {

  const { language } = GetLanguageContext()

  const enContent = {
    information: {
      title: 'Information according to § 5 TMG',
      // text: 'Mary Jane Berlin GmbH<br></br> Bernauer Str. 50<br></br> 10435 Berlin <br></br>Germany',
      text: 'Rocket Canna GmbH<br></br> Attilastr. 18 <br></br> 10435 Schönefeld <br></br>Germany',
    },
    contact: {
      title: 'Contact',
      text: 'Phone: +49 175 – 88 666 47<br></br> Fax: +49 30 – 221 85334<br></br>E-Mail: info@maryjane-berlin.com',
    },
    register: {
      title: 'Commercial Register',
      text: 'Registered in the Commercial Register. <br></br>Register Court: Amtsgericht<br></br>Cottbus<br></br>Registration Number: HRB 180488 B <br></br>VAT Identification Number: <br></br>DE348537356',
    },
    links: [
      {
        title: 'FAQ',
        url: '/visitors',
      },
      {
        title: 'Terms & Conditions',
        url: '/',
      },
      {
        title: 'Privacy policy',
        url: '/',
      },
      {
        title: 'Press',
        url: '/media',
      },
      {
        title: 'Blog',
        url: '/',
      },
    ]
  }

  const deContent = {
    information: {
      title: 'Information according to § 5 TMG',
      // text: 'Mary Jane Berlin GmbH<br></br> Bernauer Str. 50<br></br> 10435 Berlin <br></br>Germany',
      text: 'Rocket Canna GmbH<br></br> Attilastr. 18 <br></br> 10435 Schönefeld <br></br>Germany',
    },
    contact: {
      title: 'Contact',
      text: 'Phone: +49 175 – 88 666 47<br></br> Fax: +49 30 – 221 85334<br></br>E-Mail: info@maryjane-berlin.com',
    },
    register: {
      title: 'Commercial Register',
      text: 'Registered in the Commercial Register. <br></br>Register Court: Amtsgericht<br></br>Cottbus<br></br>Registration Number: HRB 180488 B <br></br>VAT Identification Number: <br></br>DE348537356',
    },
    links: [
      {
        title: 'FAQ',
        url: '/',
      },
      {
        title: 'Terms & Conditions',
        url: '/',
      },
      {
        title: 'Privacy policy',
        url: '/',
      },
      {
        title: 'Press',
        url: '/',
      },
      {
        title: 'Blog',
        url: '/',
      },
    ]
  }

  const content = language === 'en' ? enContent : deContent


  return (
    <>
      <SocialSection />
      <NewsletterForm />
      <Section>
          <Inner>
            <Left>
              <LeftLeft>
                <Title dangerouslySetInnerHTML={{ __html: content.information.title }} />
                <Text dangerouslySetInnerHTML={{ __html: content.information.text }} />
                <Title dangerouslySetInnerHTML={{ __html: content.contact.title }} />
                <Text dangerouslySetInnerHTML={{ __html: content.contact.text }} />
              </LeftLeft>
              <LeftRight>
                <Title dangerouslySetInnerHTML={{ __html: content.register.title }} />
                <Text dangerouslySetInnerHTML={{ __html: content.register.text }} />
              </LeftRight>
            </Left>
            <Right>
              <RightLeft>
                <Links>
                  {
                    content.links.map((link, index) => {
                      return(
                        <FooterLink key={index} href={link.url}>
                          {link.title}
                        </FooterLink>
                      )
                    })
                  }
                </Links>
              </RightLeft>
              <RightRight>
                <LogoContainer>
                  <Logo 
                    src="/logos/logo-white.png" 
                    alt="Mary Jane Logo" 
                    fill 
                    sizes="(max-width: 550px) 50vw, 25vw"
                  />
                </LogoContainer>
                <ScrubbleContainer>
                  <ScrubbleImg  
                    src="/logos/scrubble.png"
                    alt="Letters like scrubble saying cannabis"
                    fill
                    sizes="50vw"
                  />
                </ScrubbleContainer>
              </RightRight>
            </Right>
          </Inner>
      </Section>
    </>
  )
}

export default Footer