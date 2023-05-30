import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: 'red',
	size: 'M',
	clearcoat: true,
	envmap: 'city',
	stitching: '#595959',
	bellSticker: false,
	redBullSticker: false,
})

export { state }
