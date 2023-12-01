import React, { useRef } from 'react'
import * as THREE from 'three'

import { useGLTF, useTexture, Decal } from '@react-three/drei'
import { useSnapshot } from 'valtio'

import { state } from '../../utils/store'

import { BellSticker, RedBullSticker } from './Sticker'

export default function OuterShell(props) {
	const snap = useSnapshot(state)
	const { nodes } = useGLTF('/outer-shell.glb')

	const redAlbedo = useTexture('/tex/outer-shell/helmet-outer-shell-albedo-red.webp', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	const blueAlbedo = useTexture('/tex/outer-shell/helmet-outer-shell-albedo-blue.webp', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	const greenAlbedo = useTexture('/tex/outer-shell/helmet-outer-shell-albedo-green.webp', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	const purpleAlbedo = useTexture('/tex/outer-shell/helmet-outer-shell-albedo-purple.jpg', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	const greyAlbedo = useTexture('/tex/outer-shell/helmet-outer-shell-albedo-grey.jpg', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	const brownAlbedo = useTexture('/tex/outer-shell/helmet-outer-shell-albedo-brown.jpg', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	const albedo =
		snap.color === 'red'
			? redAlbedo
			: snap.color === 'blue'
			? blueAlbedo
			: snap.color === 'green'
			? greenAlbedo
			: snap.color === 'purple'
			? purpleAlbedo
			: snap.color === 'grey'
			? greyAlbedo
			: snap.color === 'brown'
			? brownAlbedo
			: redAlbedo

	const normal = useTexture('/tex/outer-shell/helmet-outer-shell-normal.webp', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	const metalness = useTexture('/tex/outer-shell/helmet-outer-shell-metalness.jpg', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	const roughness = useTexture('/tex/outer-shell/helmet-outer-shell-roughness.webp', (texture) => {
		texture.flipY = false
		texture.colorSpace = THREE.SRGBColorSpace
	})

	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Outer_Shell.geometry}>
				<meshPhysicalMaterial
					map={albedo}
					normalMap={normal}
					// metalnessMap={metalness}
					roughnessMap={roughness}
					roughness={1.5}
					clearcoat={1}
					clearcoatRoughness={snap.clearcoat ? 0 : 0.45}
					side={THREE.DoubleSide}
				/>

				<BellSticker />
				<RedBullSticker />
			</mesh>
		</group>
	)
}

useGLTF.preload('/outer-shell.glb')
