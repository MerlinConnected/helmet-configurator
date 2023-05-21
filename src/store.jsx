import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: 'red',
	clearcoat: true,
	envmap: 'studio',
	stitching: '#595959',
	bellSticker: false,
	redBullSticker: false,
})

export { state }
