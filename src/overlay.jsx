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
	const snap = useSnapshot(state)

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
						key={color}
						className={snap.color === color ? 'active' : ''}
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
					className={state.clearcoat ? 'active' : ''}
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
						key={envmap}
						className={snap.envmap === envmap ? 'active' : ''}
						onClick={() => {
							state.envmap = envmap
						}}
					>
						{envmap}
					</button>
				))}
			</div>
			{/* <HexColorPicker
				className='picker'
				color={snap.stitching}
				onChange={(color) => (state.stitching = color)}
			/> */}
			<div>
				<button
					className={state.bellSticker ? 'active' : ''}
					onClick={() => {
						state.bellSticker = !state.bellSticker
					}}
				>
					Bell Sticker
				</button>

				<button
					className={state.redBullSticker ? 'active' : ''}
					onClick={() => {
						state.redBullSticker = !state.redBullSticker
					}}
				>
					RedBull Stickers
				</button>
			</div>
		</div>
	)
}
