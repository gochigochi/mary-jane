import {
    Section,
    Inner,
    Content,
    Title,
    IconsContainer,
    IconContainer,
    Icon,
} from './Elements'

const SocialSection = () => {

    const socials = [
        {
            src: '/logos/face.png',
            alt: 'facebook logo',
            url: 'https://www.facebook.com/maryjane.berlin',
        },
        {
            src: '/logos/insta.png',
            alt: 'instagram logo',
            url: 'https://www.instagram.com/mary_jane_berlin/',
        },
        {
            src: '/logos/youtu.png',
            alt: 'youtube logo',
            url: 'https://www.youtube.com/@maryjaneberlin3979',
        },
        {
            src: '/logos/tiktok-logo.png',
            alt: 'tiktok logo',
            url: 'https://www.tiktok.com/@maryjane_berlin?is_from_webapp=1&sender_device=pc',
        },
        {
            src: '/logos/twt-logo.png',
            alt: 'twitter logo',
            url: 'https://twitter.com/hanfmesse',
        },
        {
            src: '/logos/in-logo.png',
            alt: 'linkedin logo',
            url: 'https://www.linkedin.com/company/mary-jane-berlin/',
        },
    ]

    return (
        <Section>
            <Content>
                <Title>Follow us</Title>
                <IconsContainer>
                    {
                        socials.map(item => {
                            return (
                                <IconContainer
                                    key={item.src}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes="15vw"
                                    />
                                </IconContainer>
                            )
                        })
                    }
                </IconsContainer>
            </Content>
        </Section>
    )
}

export default SocialSection