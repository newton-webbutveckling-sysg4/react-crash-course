import { useState } from 'react'

const Spoiler = ({ secret, pub }) => {
	const [isVisible, setIsVisible] = useState(false)
	const revealText = (event) => setIsVisible(true)

	return (
		<div>
			<button onClick={revealText}> Reveal </button>
			{pub}
			{isVisible ? (<span> {secret} </span>) : null}
		</div>
	)
}

export default Spoiler
