import React, { useRef } from 'react'

import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

import { proxy, useSnapshot } from 'valtio'
import { state } from '../../utils/store'

export default function Insides(props) {
	const snap = useSnapshot(state)
	const { nodes, materials } = useGLTF('/insides.glb')

	//INSIDE FABRIC

	const insideFabricAlbedo = useTexture('/tex/inside-fabric/helmet-inside-fabric-albedo.webp', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})
	const insideFabricNormal = useTexture('/tex/inside-fabric/helmet-inside-fabric-normal.webp', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})

	//OUTSIDE FABRIC

	const outsideFabricAlbedo = useTexture('/tex/outside-fabric/helmet-outside-fabric-albedo.webp', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})
	const outsideFabricNormal = useTexture('/tex/outside-fabric/helmet-outside-fabric-normal.webp', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})

	//SHELL PLASTICS

	const shellPlasticRoughness = useTexture('/tex/shell-plastics/helmet-shell-plastics-roughness.webp', (texture) => {
		texture.flipY = false
		texture.encoding = THREE.sRGBEncoding
	})

	return (
		<group {...props} dispose={null}>
			{/* stitching */}
			<mesh castShadow receiveShadow geometry={nodes.insides.geometry}>
				<meshPhysicalMaterial color={snap.stitching} />
			</mesh>
			{/* Inside Shell */}
			<mesh castShadow receiveShadow geometry={nodes.insides_1.geometry}>
				<meshPhysicalMaterial color={'#020202'} roughness={0.6} metalness={0} side={THREE.DoubleSide} />
			</mesh>
			{/* Plastics */}
			<mesh castShadow receiveShadow geometry={nodes.insides_2.geometry}>
				<meshPhysicalMaterial color={'#020202'} roughness={0.6} side={THREE.DoubleSide} />
			</mesh>
			{/* Black Metal */}
			<mesh castShadow receiveShadow geometry={nodes.insides_3.geometry}>
				<meshPhysicalMaterial color={'#020202'} metalness={1} roughness={0.2} side={THREE.DoubleSide} />
			</mesh>
			{/* Springs */}
			<mesh castShadow receiveShadow geometry={nodes.insides_4.geometry} material={materials.Spring} />
			{/* Rubber */}
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.insides_5.geometry}
				material={materials.Rubber}
				side={THREE.DoubleSide}
			/>
			{/* Inside Fabric */}
			<mesh castShadow receiveShadow geometry={nodes.insides_6.geometry}>
				<meshPhysicalMaterial
					map={insideFabricAlbedo}
					normalMap={insideFabricNormal}
					normalScale={[0.2, 0.2]}
					specularIntensity={0.1}
					sheen={1}
					side={THREE.DoubleSide}
				/>
			</mesh>
			{/* Outside Fabric */}
			<mesh castShadow receiveShadow geometry={nodes.insides_7.geometry}>
				<meshPhysicalMaterial
					map={outsideFabricAlbedo}
					normalMap={outsideFabricNormal}
					specularIntensity={0.1}
					sheen={1}
					side={THREE.DoubleSide}
				/>
			</mesh>
			{/* Inlays */}
			<mesh castShadow receiveShadow geometry={nodes.insides_8.geometry}>
				<meshPhysicalMaterial
					color={'black'}
					roughness={0.5}
					specularIntensity={0.7}
					metalness={0}
					side={THREE.DoubleSide}
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
					clearcoat={1}
					clearcoatRoughness={0.9}
					clearcoatMap={shellPlasticRoughness}
					side={THREE.DoubleSide}
				/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/insides.glb')
