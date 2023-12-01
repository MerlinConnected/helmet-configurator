import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'

export default function Visor(props) {
	const { nodes, materials } = useGLTF('/visor.glb')
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.visor.geometry} material={materials.Screw} />
			<mesh castShadow receiveShadow geometry={nodes.visor_1.geometry}>
				<MeshTransmissionMaterial transmission={1} metalness={0.02} roughness={0} ior={1.1} thickness={0.03} />
			</mesh>
		</group>
	)
}

useGLTF.preload('/visor.glb')
