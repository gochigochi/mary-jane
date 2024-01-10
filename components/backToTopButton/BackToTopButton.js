import { useScroll } from 'framer-motion'
import { Button, ImgContainer, Img } from './Elements'

const BackToTopButton = () => {

    const { scrollYProgress } = useScroll()

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <Button onClick={goToTop} scrolled={scrollYProgress > 0.2}>
            <ImgContainer>
                <Img
                    src="/icons/arrow-up-black.png"
                    alt="back to top button"
                    fill
                    priority
                />
            </ImgContainer>
        </Button>
    )
}

export default BackToTopButton