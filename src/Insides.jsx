import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Insides(props) {
	const { nodes, materials } = useGLTF('/insides.glb')

	//INSIDE FABRIC

	const insideFabricAlbedo = useTexture(
		'/tex/inside-fabric/helmet-inside-fabric-albedo.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)
	const insideFabricNormal = useTexture(
		'/tex/inside-fabric/helmet-inside-fabric-normal.png',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)

	//OUTSIDE FABRIC

	const outsideFabricAlbedo = useTexture(
		'/tex/outside-fabric/helmet-outside-fabric-albedo.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)
	const outsideFabricNormal = useTexture(
		'/tex/outside-fabric/helmet-outside-fabric-normal.png',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.sRGBEncoding
			texture.anisotropy = 16
		}
	)

	//SHELL PLASTICS

	const shellPlasticRoughness = useTexture(
		'/tex/shell-plastics/helmet-shell-plastics-roughness.jpg',
		(texture) => {
			texture.flipY = false
			texture.encoding = THREE.NoColorSpace

			texture.anisotropy = 16
		}
	)

	return (
		<group {...props} dispose={null}>
			{/* Stiching */}
			<mesh castShadow receiveShadow geometry={nodes.insides.geometry}>
				<meshPhysicalMaterial color={'red'} />
			</mesh>
			{/* Inside Shell */}
			<mesh castShadow receiveShadow geometry={nodes.insides_1.geometry}>
				<meshPhysicalMaterial color={'#020202'} roughness={0.6} metalness={0} />
			</mesh>
			{/* Plastics */}
			<mesh castShadow receiveShadow geometry={nodes.insides_2.geometry}>
				<meshPhysicalMaterial color={'#020202'} roughness={0.6} />
			</mesh>
			{/* Black Metal */}
			<mesh castShadow receiveShadow geometry={nodes.insides_3.geometry}>
				<meshPhysicalMaterial color={'#020202'} metalness={1} roughness={0.2} />
			</mesh>
			{/* Springs */}
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_4.geometry}
				material={materials.Spring}
			/>
			{/* Rubber */}
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_5.geometry}
				material={materials.Rubber}
			/>
			{/* Inside Fabric */}
			<mesh castShadow receiveShadow geometry={nodes.insides_6.geometry}>
				<meshPhysicalMaterial
					map={insideFabricAlbedo}
					normalMap={insideFabricNormal}
					normalScale={[0.2, 0.2]}
					specularIntensity={0.1}
					sheen={1}
				/>
			</mesh>
			{/* Outside Fabric */}
			<mesh castShadow receiveShadow geometry={nodes.insides_7.geometry}>
				<meshPhysicalMaterial
					map={outsideFabricAlbedo}
					normalMap={outsideFabricNormal}
					specularIntensity={0.1}
					sheen={1}
				/>
			</mesh>
			{/* Inlays */}
			<mesh castShadow receiveShadow geometry={nodes.insides_8.geometry}>
				<meshPhysicalMaterial
					color={'black'}
					roughness={0.5}
					specularIntensity={0.7}
					metalness={0}
				/>
			</mesh>
			{/* Shell Plastics */}
			<mesh castShadow receiveShadow geometry={nodes.insides_9.geometry}>
				<meshPhysicalMaterial
					color={'#101010'}
					// roughness={0.3}
					roughnessMap={shellPlasticRoughness}
					specularIntensity={0.3}
					metalness={0}
				/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/insides.glb')
