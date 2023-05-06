export default function Overlay() {
	return <Intro />
}

function Intro() {
	return (
		<div className='intro-container'>
			<h1>Bell Helmet</h1>
			<button>Configure !</button>
		</div>
	)
}

function Customizer() {
	return (
		<div className='customizer-container'>
			<h1>Customizer</h1>
		</div>
	)
}
