import { Canvas } from '@react-three/fiber'
import {
	OrbitControls,
	Center,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
	Float,
} from '@react-three/drei'

import OuterShell from './OuterShell'
import Insides from './Insides'
import Visor from './Visor'

import { state } from './store'
import { useSnapshot } from 'valtio'

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
	const snap = useSnapshot(state)
	return (
		<Canvas
			eventSource={document.getElementById('root')}
			eventPrefix='client'
			shadows
			camera={{ fov: 60, position: [0, 0, 2.1] }}
		>
			<Center>
				<Float floatIntensity={0.3} rotationIntensity={0.4}>
					<OuterShell />
					<Insides />
					<Visor />
				</Float>
				<Backdrop />
			</Center>

			<ambientLight intensity={1} />
			<Environment preset={snap.envmap} />
			<OrbitControls enablePan={false} enableZoom={false} />
		</Canvas>
	)
}
