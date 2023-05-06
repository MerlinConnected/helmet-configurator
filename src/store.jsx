import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: ['blue', 'red', 'green'],
	clearcoat: true,
})

export { state }
