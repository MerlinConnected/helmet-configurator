import { useSnapshot } from 'valtio'
import { state } from './store'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'

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
					className='btn btn_primary'
					onClick={() => {
						state.intro = false
					}}
				>
					Customize
				</button>
			</div>
		</div>
	)
}

function Customizer() {
	const envmaps = ['sunset', 'warehouse', 'forest', 'studio', 'city', 'park']
	const colors = ['red', 'blue', 'green']
	const snap = useSnapshot(state)

	const [redBullSticker, setRedBullSticker] = useState(false)
	const [bellSticker, setBellSticker] = useState(false)
	const [clearcoat, setClearcoat] = useState(false)

	return (
		<div className='container'>
			<div>
				<button
					className='btn btn_return'
					onClick={() => {
						state.intro = true
					}}
				>
					Back to home
				</button>
				<h2>CONFIGURE YOUR RACE STAR DLX FLEX</h2>
				<p>
					Designed for the everyday commuter who likes to chase checkers on the
					weekend, the Race Star DLX Flex packs premium head protection with a
					modern aesthetic that simply makes you look fast.
				</p>
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
					className={clearcoat ? 'active' : ''}
					onClick={() => {
						setClearcoat(!clearcoat)
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
					className={bellSticker ? 'active' : ''}
					onClick={() => {
						setBellSticker(!bellSticker)
						state.bellSticker = !state.bellSticker
					}}
				>
					Bell Sticker
				</button>

				<button
					className={redBullSticker ? 'active' : ''}
					onClick={() => {
						setRedBullSticker(!redBullSticker)
						state.redBullSticker = !state.redBullSticker
					}}
				>
					RedBull Stickers
				</button>
			</div>
		</div>
	)
}
