export const containerMotion = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: .2,
        },
    },
    exit: {}
}

export const elementMotion = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .7,
        }
    },
    exit: {
        opacity: 0,
    }
}