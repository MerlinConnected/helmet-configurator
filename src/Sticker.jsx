import { Decal, useTexture } from '@react-three/drei'

export default function Sticker({ url, clearcoat, ...props }) {
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
				roughness={0.6}
				// clearcoat={1}
				clearcoatRoughness={0.8}
				metalness={1}
				toneMapped={true}
			/>
		</Decal>
	)
}
