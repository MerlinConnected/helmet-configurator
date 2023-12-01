import { Canvas, useThree } from '@react-three/fiber'
import {
	OrbitControls,
	Center,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
	Float,
	Loader
} from '@react-three/drei'

import { Suspense } from 'react'

import { useSpring } from '@react-spring/three'

import OuterShell from './OuterShell'
import Insides from './Insides'
import Visor from './Visor'

import { state } from '../../utils/store'
import { useSnapshot } from 'valtio'

function Backdrop() {
	return (
		<AccumulativeShadows temporal frames={60} alphaTest={0.85} scale={10} position={[0, -0.22, 0]}>
			<RandomizedLight amount={12} radius={20} intensity={0.9} ambient={5} position={[5, 5, -10]} />
		</AccumulativeShadows>
	)
}

export default function Model() {
	const snap = useSnapshot(state)
	return (
		<>
			<Canvas shadows camera={{ fov: 60, position: [0, -0.2, 1.8] }}>
				<Suspense fallback={null}>
					<Center>
						<Float floatIntensity={0.3} rotationIntensity={0.4}>
							<OuterShell />
							<Insides />
							<Visor />
						</Float>
						<Backdrop />
					</Center>
					<OrbitControls
						enablePan={false}
						minPolarAngle={0}
						maxPolarAngle={Math.PI / 1.8}
						minDistance={1.5}
						maxDistance={2.5}
						target={[0, 0, 0]}
					/>
					<ambientLight intensity={1} />
					<Environment files={snap.envmap} />
				</Suspense>
			</Canvas>
			<Loader />
		</>
	)
}
