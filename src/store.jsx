import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: ['blue', 'red', 'green'],
	clearcoat: true,
	envmap: 'studio',
	stiching: '#ffffff',
})

export { state }
