import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: 'purple',
	size: 'M',
	clearcoat: true,
	envmap: '/env/potsdamer_platz_1k.hdr',
	stitching: '#595959',
	bellSticker: false,
	redBullSticker: false
})

export { state }
