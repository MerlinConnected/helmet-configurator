import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
	OrbitControls,
	Center,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
} from '@react-three/drei'
import { easing } from 'maath'
import OuterShell from './OuterShell'
import Insides from './Insides'

function Backdrop() {
	return (
		<AccumulativeShadows
			temporal
			frames={60}
			alphaTest={0.85}
			scale={10}
			position={[0, -0.22, 0]}
		>
			<RandomizedLight
				amount={12}
				radius={20}
				intensity={0.9}
				ambient={5}
				position={[5, 5, -10]}
			/>
		</AccumulativeShadows>
	)
}

export default function App() {
	return (
		<Canvas
			eventSource={document.getElementById('root')}
			eventPrefix='client'
			shadows
			camera={{ fov: 60, position: [0, 0, 2] }}
		>
			{/* <CamRig> */}
			<Center>
				<OuterShell />
				<Insides />
				<Backdrop />
			</Center>
			{/* </CamRig> */}
			<ambientLight intensity={0.5} />
			<Environment preset='studio' />
			<OrbitControls />
		</Canvas>
	)
}

function CamRig({ children }) {
	const group = useRef()

	useFrame((state, delta) => {
		easing.dampE(
			group.current.rotation,
			[-state.pointer.y / 30, state.pointer.x / 40, 0],
			0.25,
			delta
		)
	})

	return <group ref={group}>{children}</group>
}
