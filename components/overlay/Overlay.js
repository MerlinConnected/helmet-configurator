import { useSnapshot } from 'valtio'
import { state } from '../../utils/store'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'

export default function Overlay() {
	const snap = useSnapshot(state)
	return snap.intro ? <Intro /> : <Customizer />
}

function Intro() {
	return (
		<main>
			<header>
				<div>
					<img src='./images/logo.svg' alt='logo' />
				</div>
			</header>
			<div className='container'>
				<div>
					{/* <h1>Bell Helmet</h1> */}
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
		</main>
	)
}

function Customizer() {
	const envmaps = [
		'/env/venice_sunset_1k.hdr',
		'/env/empty_warehouse_01_1k.hdr',
		'/env/forest_slope_1k.hdr',
		'/env/studio_small_03_1k.hdr',
		'/env/potsdamer_platz_1k.hdr',
		'/env/rooitou_park_1k.hdr'
	]
	const colors = ['grey', 'green', 'red', 'blue', 'brown', 'purple']
	const size = ['XS', 'S', 'SM', 'M', 'L', 'XL']

	const snap = useSnapshot(state)

	const [redBullSticker, setRedBullSticker] = useState(false)
	const [bellSticker, setBellSticker] = useState(false)
	const [clearcoat, setClearcoat] = useState(false)

	function openHideBig(e) {
		const p = e.currentTarget.nextElementSibling
		e.currentTarget.parentNode.classList.toggle('active')
		p.offsetHeight === 0 ? (p.style.maxHeight = `150px`) : (p.style.maxHeight = 0)
	}
	function openHide(e) {
		const p = e.currentTarget.nextElementSibling
		e.currentTarget.parentNode.classList.toggle('active')
		p.offsetHeight === 0 ? (p.style.maxHeight = `50px`) : (p.style.maxHeight = 0)
	}

	return (
		<>
			<main>
				<header>
					<div>
						<img
							src='./images/logo.svg'
							alt='logo'
							onClick={() => {
								state.intro = true
							}}
						/>
					</div>
				</header>
				<div className='container'>
					<div>
						<div className='title-container'>
							<h2>CONFIGURE YOUR RACE STAR DLX FLEX</h2>
							<p>
								Designed for the everyday commuter who likes to chase checkers on the weekend, the Race Star DLX Flex
								packs premium head protection with a modern aesthetic that simply makes you look fast.
							</p>
						</div>
						<div className='grid'>
							<hr />
							<div className='content-container'>
								<div onClick={openHideBig}>
									<div>
										<h3>Finish</h3>
										<p>Tip : Red makes you faster</p>
									</div>
								</div>
								<div className='color-container'>
									{colors.map((color) => (
										<button
											key={color}
											className={snap.color === color ? 'active' : ''}
											onClick={() => {
												state.color = color
											}}
										>
											<img src={`./images/item-${color}.png`} alt={color} />
										</button>
									))}
								</div>
							</div>
							<hr />
							<div className='content-container'>
								<div onClick={openHide}>
									<div>
										<h3>Aspect</h3>
										<p>Chose between mat or shiny</p>
									</div>
								</div>
								<div className='clearcoat-container'>
									<button
										className={clearcoat ? '' : 'active'}
										onClick={() => {
											setClearcoat(false)
											state.clearcoat = true
										}}
									>
										With clearcoat
									</button>
									<button
										className={clearcoat ? 'active' : ''}
										onClick={() => {
											setClearcoat(true)
											state.clearcoat = false
										}}
									>
										Without clearcoat
									</button>
								</div>
							</div>
							<hr />
							<div className='content-container'>
								<div onClick={openHide}>
									<div>
										<h3>Size</h3>
										<p>To fit your noggin like a glove</p>
									</div>
								</div>
								<div className='size-container'>
									{size.map((size) => (
										<button
											key={size}
											className={snap.size === size ? 'active' : ''}
											onClick={() => {
												state.size = size
											}}
										>
											{size}
										</button>
									))}
								</div>
							</div>
							<hr />
							<div className='content-container'>
								<div onClick={openHide}>
									<div>
										<h3>Decals</h3>
										<p>To at least look like you're fast</p>
									</div>
								</div>
								<div className='clearcoat-container'>
									<button
										className={bellSticker ? 'active' : ''}
										onClick={() => {
											setBellSticker(!bellSticker)
											state.bellSticker = !state.bellSticker
										}}
									>
										Bell
									</button>
									<button
										className={redBullSticker ? 'active' : ''}
										onClick={() => {
											setRedBullSticker(!redBullSticker)
											state.redBullSticker = !state.redBullSticker
										}}
									>
										Redbull
									</button>
								</div>
							</div>
							<hr />
							<div className='content-container'>
								<div className='flex'>
									<div>
										<h3>Total :</h3>
										<p>Excluding VAT.</p>
									</div>
									<p>€ 1,299.0</p>
								</div>
								<div className='total-container'>
									<button>Find a dealer</button>
									<button>
										<a href='https://gaetanjestin.com' target='_blank'>
											Add to basket
										</a>
									</button>
								</div>
							</div>
							<hr />
						</div>
					</div>
					<div className='envmap_container'>
						{envmaps.map((envmap) => (
							<button
								key={envmap}
								className={snap.envmap === envmap ? 'active' : ''}
								onClick={() => {
									state.envmap = envmap
								}}
							>
								{envmap === '/env/venice_sunset_1k.hdr' ? 'Venice Sunset' : ''}
								{envmap === '/env/empty_warehouse_01_1k.hdr' ? 'Empty Warehouse' : ''}
								{envmap === '/env/forest_slope_1k.hdr' ? 'Forest Slope' : ''}
								{envmap === '/env/studio_small_03_1k.hdr' ? 'Studio Small' : ''}
								{envmap === '/env/potsdamer_platz_1k.hdr' ? 'Potsdamer Platz' : ''}
								{envmap === '/env/rooitou_park_1k.hdr' ? 'Rooitou Park' : ''}
							</button>
						))}
					</div>
				</div>
				<footer>
					<p>
						© 2023{' '}
						<a href='https://gaetanjestin.com' target='_blank'>
							Gaëtan Jestin
						</a>
						, Not affiliated in any ways with{' '}
						<a href='https://www.bellhelmets.com/' target='_blank'>
							Bell Helmets
						</a>
					</p>
				</footer>
			</main>
		</>
	)
}
