export const containerMotion = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: .3,
        }
    },
    exit: {}
}

export const elementsMotion = {
    initial: {
        opacity: 0,
        // y: 20,
    },
    animate: {
       opacity: 1,
    //    y: 0,
       transition: {
            duration: 1,
        }
    },
    exit: {}
}

export const titleMotion = {
    initial: {
        opacity: 0,
        // x: -20,
    },
    animate: {
       opacity: 1,
    //    x: 0,
       transition: {
            duration: 1,
        }
    },
    exit: {}
}