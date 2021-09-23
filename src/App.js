import './App.css';
import Spoiler from './components/Spoiler'
import Counter from './components/Counter'
import Animals from './components/Animals'

const animalData = [
	{ id: 1, name: 'Racoon' },
	{ id: 2, name: 'Squirrel' },
	{ id: 3, name: 'Cat' },
	{ id: 4, name: 'Dog' },
]

const App = () => (
	<div className="App">
		<h1> Hello world </h1>
		<Animals list={animalData} />
		<p> CLick to reveal the secrets! </p>
		<Spoiler secret={'Snape'} pub={'The villain is:'} />
		<Spoiler secret={'Harry'} pub={'The villain is:'} />
		<Counter />
	</div>
);

export default App;
