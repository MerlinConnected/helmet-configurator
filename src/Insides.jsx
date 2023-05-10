import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Insides(props) {
	const { nodes, materials } = useGLTF('/insides.glb')

	const [blackMetalRoughness, blackMetalNormal] = useLoader(TextureLoader, [
		'/tex/black-metal/helmet-black-metal-roughness.jpg',
		'/tex/black-metal/helmet-black-metal-normal.png',
	])

	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.insides.geometry}>
				<meshStandardMaterial color={'red'} />
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_1.geometry}
				material={materials['Inner Shell']}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_2.geometry}
				material={materials.Plastics}
			/>
			<mesh castShadow receiveShadow geometry={nodes.insides_3.geometry}>
				<meshStandardMaterial
					color={'black'}
					normalMap={blackMetalNormal}
					roughnessMap={blackMetalRoughness}
				/>
			</mesh>

			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_4.geometry}
				material={materials.Spring}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_5.geometry}
				material={materials.Rubber}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_6.geometry}
				material={materials['Inside Fabric']}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_7.geometry}
				material={materials['Outside Fabric']}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_8.geometry}
				material={materials.Inlays}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_9.geometry}
				material={materials['Shell Plastics']}
			/>
		</group>
	)
}

useGLTF.preload('/insides.glb')
