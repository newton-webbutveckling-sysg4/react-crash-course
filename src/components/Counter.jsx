import { useState } from 'react'
import './Counter.css'

const Counter = () => {
	const [value, setValue] = useState(1)
	const increase = () => setValue(value + 1)
	const decrease = () => setValue(value - 1)

	return (
		<div className="counter">
			Counter
			<p> Value: { value } </p>
			<button onClick={increase}> +1 </button>
			<button onClick={decrease}> -1 </button>
		</div>
	)
}

export default Counter
