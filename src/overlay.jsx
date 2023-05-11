import { useSnapshot } from 'valtio'
import { state } from './store'
import { HexColorPicker } from 'react-colorful'

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
					Configure 🡢
				</button>
			</div>
		</div>
	)
}

function Customizer() {
	const envmaps = ['sunset', 'warehouse', 'forest', 'studio', 'city', 'park']
	const colors = ['red', 'blue', 'green']
	return (
		<div className='container'>
			<div>
				<h1>Customizer</h1>
				<button
					onClick={() => {
						state.intro = true
					}}
				>
					Back 🡠
				</button>
			</div>
			<div>
				{colors.map((color) => (
					<button
						onClick={() => {
							state.color = color
						}}
					>
						{color}
					</button>
				))}
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
			<div>
				{envmaps.map((envmap) => (
					<button
						onClick={() => {
							state.envmap = envmap
						}}
					>
						{envmap}
					</button>
				))}
			</div>
			<HexColorPicker className='picker' />
		</div>
	)
}
