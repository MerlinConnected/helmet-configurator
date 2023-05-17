import { Decal, useTexture } from '@react-three/drei'

export default function Sticker({ url, ...props }) {
	const albedo = useTexture(url)
	return (
		<Decal {...props}>
			<meshPhysicalMaterial
				transparent
				polygonOffset
				polygonOffsetFactor={-10}
				map={albedo}
				map-flipY={false}
				map-anisotropy={16}
				roughness={1}
				clearcoat={0.5}
				metalness={1}
				toneMapped={true}
			/>
		</Decal>
	)
}
