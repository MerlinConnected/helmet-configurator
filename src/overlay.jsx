import { useSnapshot } from 'valtio'
import { state } from './store'

export default function Overlay() {
	const snap = useSnapshot(state)
	return snap.intro ? <Intro /> : <Customizer />
}

function Intro() {
	return (
		<div className='intro-container'>
			<h1>Bell Helmet</h1>
			<button
				onClick={() => {
					state.intro = false
				}}
			>
				Configure !
			</button>
		</div>
	)
}

function Customizer() {
	return (
		<div className='customizer-container'>
			<h1>Customizer</h1>
			<button
				onClick={() => {
					state.color = 'red'
					console.log(state.color)
				}}
			>
				Red !
			</button>
			<button
				onClick={() => {
					state.color = 'blue'
					console.log(state.color)
				}}
			>
				Blue !
			</button>
		</div>
	)
}
