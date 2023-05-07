import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from './store'
import * as THREE from 'three'

export default function OuterShell(props) {
	const snap = useSnapshot(state)
	const { nodes } = useGLTF('/outer-shell.glb')

	const redAlbedo = useTexture(
		'/tex/outer-shell/helmet-outer-shell-albedo-red.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)

	const blueAlbedo = useTexture(
		'/tex/outer-shell/helmet-outer-shell-albedo-blue.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)

	const greenAlbedo = useTexture(
		'/tex/outer-shell/helmet-outer-shell-albedo-green.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)

	const albedo =
		snap.color === 'red'
			? redAlbedo
			: snap.color === 'blue'
			? blueAlbedo
			: greenAlbedo

	const normal = useTexture(
		'/tex/outer-shell/helmet-outer-shell-normal.png',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)
	const metalness = useTexture(
		'/tex/outer-shell/helmet-outer-shell-metalness.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)
	const roughness = useTexture(
		'/tex/outer-shell/helmet-outer-shell-roughness.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes['Outer-Shell'].geometry}>
				<meshPhysicalMaterial
					map={albedo}
					normalMap={normal}
					metalnessMap={metalness}
					roughnessMap={roughness}
					roughness={1.5}
					clearcoat={snap.clearcoat ? 1 : 0}
				/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/outer-shell.glb')
