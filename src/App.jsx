import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'

export function Model(props) {
	const { nodes, materials } = useGLTF('/BellHelmet.glb')
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.Visor.geometry} material={materials} />
			<mesh castShadow receiveShadow geometry={nodes.Outer_Shell.geometry} material={materials['Outer Shell']} />
			<mesh castShadow receiveShadow geometry={nodes.model002.geometry} material={materials.Stinching} />
			<mesh castShadow receiveShadow geometry={nodes.model002_1.geometry} material={materials['Inner Shell']} />
			<mesh castShadow receiveShadow geometry={nodes.model002_2.geometry} material={materials.Plastics} />
			<mesh castShadow receiveShadow geometry={nodes.model002_3.geometry} material={materials['Black Metal']} />
			<mesh castShadow receiveShadow geometry={nodes.model002_4.geometry} material={materials.Spring} />
			<mesh castShadow receiveShadow geometry={nodes.model002_5.geometry} material={materials.Screw} />
			<mesh castShadow receiveShadow geometry={nodes.model002_6.geometry} material={materials.Rubber} />
			<mesh castShadow receiveShadow geometry={nodes.model002_7.geometry} material={materials['Inside Fabric']} />
			<mesh castShadow receiveShadow geometry={nodes.model002_8.geometry} material={materials['Outside Fabric']} />
			<mesh castShadow receiveShadow geometry={nodes.model002_9.geometry} material={materials.Inlays} />
			<mesh castShadow receiveShadow geometry={nodes.model002_10.geometry} material={materials['Shell Plastics']} />
		</group>
	)
}

useGLTF.preload('/BellHelmet.glb')

function Backdrop() {
	return (
		<AccumulativeShadows temporal frames={60} alphaTest={0.85} scale={10} position={[0, -0.22, 0]}>
			<RandomizedLight amount={12} radius={20} intensity={0.9} ambient={5} position={[5, 5, -10]} />
		</AccumulativeShadows>
	)
}

export default function App() {
	return (
		<Canvas eventSource={document.getElementById('root')} eventPrefix='client' shadows>
			<Center>
				<Model />
				<Backdrop />
			</Center>
			<ambientLight intensity={0.5} />
			<Environment preset='studio' />
			<OrbitControls />
		</Canvas>
	)
}
