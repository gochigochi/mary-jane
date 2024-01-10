import {
    VideoBg,
    Overlay,
    ImageBg,
} from './Elements'

const VideoBack = () => {

    return (
        <>
            <VideoBg autoPlay loop muted playsInline poster='/video/poster.webp'>
                <source src='/video/bg-video.mp4' type='video/mp4' />
            </VideoBg>
            <ImageBg src="/images/mobile-bg.webp" alt="" size="100vw" fill />
            <Overlay />
        </>
    )
}

export default VideoBack