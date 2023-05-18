import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from './store'
import * as THREE from 'three'
import Sticker from './Sticker'

export default function OuterShell(props) {
	const snap = useSnapshot(state)
	const { nodes } = useGLTF('/outer-shell.glb')

	const redAlbedo = useTexture(
		'/tex/outer-shell/helmet-outer-shell-albedo-red.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
		}
	)

	const blueAlbedo = useTexture(
		'/tex/outer-shell/helmet-outer-shell-albedo-blue.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
		}
	)

	const greenAlbedo = useTexture(
		'/tex/outer-shell/helmet-outer-shell-albedo-green.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
		}
	)

	const albedo =
		snap.color === 'red'
			? redAlbedo
			: snap.color === 'blue'
			? blueAlbedo
			: greenAlbedo

	const normal = useTexture(
		'/tex/outer-shell/helmet-outer-shell-normal.webp',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
		}
	)
	const metalness = useTexture(
		'/tex/outer-shell/helmet-outer-shell-metalness.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
		}
	)
	const roughness = useTexture(
		'/tex/outer-shell/helmet-outer-shell-roughness.webp',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
		}
	)
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Outer_Shell.geometry}>
				<meshPhysicalMaterial
					map={albedo}
					normalMap={normal}
					metalnessMap={metalness}
					roughnessMap={roughness}
					roughness={1.5}
					clearcoat={snap.clearcoat ? 1 : 0}
					side={THREE.DoubleSide}
				/>
				<Sticker
					url='/tex/stickers/red-bull-logo.png'
					position={[0.4, 0.03, 0.35]}
					scale={0.42}
					rotation={[Math.PI / 1.42, Math.PI / 2, Math.PI / 3]}
				/>
				<Sticker
					url='/tex/stickers/red-bull-logo.png'
					position={[-0.4, 0.03, 0.35]}
					scale={0.42}
					rotation={[Math.PI / 1.42, Math.PI / 2, Math.PI / 3]}
				/>
				<Sticker
					url='/tex/stickers/bell-logo.png'
					position={[0, 0.75, 0.35]}
					scale={0.3}
					rotation={[-Math.PI / Math.PI, Math.PI, Math.PI]}
					clearcoat={1}
				/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/outer-shell.glb')
