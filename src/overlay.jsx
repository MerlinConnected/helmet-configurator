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
	const [isClearcoatActive, setClearcoatActive] = useState(false)
	const [isBellStickerActive, setBellStickerActive] = useState(false)
	const [isRedBullStickerActive, setRedBullStickerActive] = useState(false)

	const handleColorClick = (color) => {
		setActiveColor(color)
	}

	const handleClearcoatClick = () => {
		setClearcoatActive(!isClearcoatActive)
	}

	const handleBellStickerClick = () => {
		setBellStickerActive(!isBellStickerActive)
	}

	const handleRedBullStickerClick = () => {
		setRedBullStickerActive(!isRedBullStickerActive)
	}

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
					className={isClearcoatActive ? 'active' : null}
					onClick={() => {
						state.clearcoat = !state.clearcoat
						handleClearcoatClick()
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
					className={isBellStickerActive ? 'active' : null}
					onClick={() => {
						state.bellSticker = !state.bellSticker
						handleBellStickerClick()
					}}
				>
					Bell Sticker
				</button>
				<button
					className={isRedBullStickerActive ? 'active' : null}
					onClick={() => {
						state.redBullSticker = !state.redBullSticker
						handleRedBullStickerClick()
					}}
				>
					RedBull Stickers
				</button>
			</div>
		</div>
	)
}
