import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: ['blue', 'red', 'green'],
	clearcoat: true,
	envmap: 'studio',
	stitching: '#ffffff',
})

export { state }
