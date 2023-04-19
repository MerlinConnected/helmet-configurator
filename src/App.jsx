import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color='darkblue' />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
