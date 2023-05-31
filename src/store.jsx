import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: 'purple',
	size: 'M',
	clearcoat: true,
	envmap: 'city',
	stitching: '#595959',
	bellSticker: false,
	redBullSticker: false,
})

export { state }
