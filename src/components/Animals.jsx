
const Animals = ({ list }) => {

	const jsxList = list.map(animal => (
		<div key={animal.id}> {animal.name} </div>
	))

	return (
		<div className="animal-list">
		{jsxList}
		</div>
	)
}

export default Animals
