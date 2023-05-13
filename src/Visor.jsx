/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { MeshRefractionMaterial } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three'

export default function Visor(props) {
	const { nodes, materials } = useGLTF('/visor.glb')
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.visor.geometry}
				material={materials.Screw}
			/>
			<mesh castShadow receiveShadow geometry={nodes.visor_1.geometry}>
				<meshPhysicalMaterial
					transmission={1}
					metalness={0}
					roughness={0}
					ior={1.5}
					thickness={0.01}
					opacity={0}
				/>
			</mesh>
		</group>
	)
}

useGLTF.preload('/visor.glb')
