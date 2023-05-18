import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: ['blue', 'red', 'green'],
	clearcoat: true,
	envmap: 'studio',
	stitching: '#595959',
	bellSticker: true,
	redBullSticker: true,
})

export { state }
