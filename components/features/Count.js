import React, { useState, useEffect } from 'react'
import {
  CounterContainer,
} from './Elements'

// For animation
const easeOutQuad = t => t * ( 2 - t );
const frameDuration = 500 / 60;

const Count = ({ children, duration = 4000 }) => {
  
  	const countTo = parseInt( children, 10 );
	const [ count, setCount ] = useState( 0 );
	const [ inView, setInView ] = useState(false)

	useEffect( () => {

		const startCounter = () => {
			let frame = 0;
			const totalFrames = Math.round( duration / frameDuration );
			const counter = setInterval( () => {
				frame++;
				const progress = easeOutQuad( frame / totalFrames );
				setCount( countTo * progress );

				if ( frame === totalFrames ) {
					clearInterval( counter );
				}
			}, frameDuration );
		}

		inView && startCounter()

	}, [inView] );

	const handleView = () => {
		setInView(true)
	}

	return(
		<CounterContainer
		whileInView={handleView}
		viewport={{ once: true }}
		> 
			{ Math.floor( count ).toLocaleString("en-GB") }
		</CounterContainer>
	) 
}

export default Count