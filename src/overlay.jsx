import { useSnapshot } from 'valtio'
import { state } from './store'

export default function Overlay() {
	const snap = useSnapshot(state)
	return snap.intro ? <Intro /> : <Customizer />
}

function Intro() {
	return (
		<div className='container'>
			<div>
				<h1>Bell Helmet</h1>
				<button
					onClick={() => {
						state.intro = false
					}}
				>
					Configure !
				</button>
			</div>
		</div>
	)
}

function Customizer() {
	return (
		<div className='container'>
			<div>
				<h1>Customizer</h1>
				<button
					onClick={() => {
						state.intro = true
					}}
				>
					Back
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						state.color = 'red'
						// console.log(state.color)
					}}
				>
					Red !
				</button>
				<button
					onClick={() => {
						state.color = 'blue'
						// console.log(state.color)
					}}
				>
					Blue !
				</button>
				<button
					onClick={() => {
						state.color = 'green'
						// console.log(state.color)
					}}
				>
					Green !
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						state.clearcoat = !state.clearcoat
					}}
				>
					Clearcoat (toggle) !
				</button>
			</div>
		</div>
	)
}
