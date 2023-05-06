import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function OuterShell(props) {
	const { nodes } = useGLTF('/outer-shell.glb')
	const albedo = useTexture('helmet-outer-shell-albedo-red.jpg', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
		texture.anisotropy = 16
	})
	const normal = useTexture('helmet-outer-shell-normal.png', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
		texture.anisotropy = 16
	})
	const metalness = useTexture(
		'helmet-outer-shell-metalness.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)
	const roughness = useTexture(
		'helmet-outer-shell-roughness.jpg',
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
					clearcoat={1}
				/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/outer-shell.glb')
