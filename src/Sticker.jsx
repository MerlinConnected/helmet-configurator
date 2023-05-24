import { Decal, useTexture } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from './store'

function BellSticker() {
	const snap = useSnapshot(state)

	const BellAlbedo = useTexture('/tex/stickers/bell-logo.png')

	if (snap.bellSticker) {
		return (
			<Decal position={[0, 0.75, 0.35]} scale={0.3} rotation={[-Math.PI / Math.PI, Math.PI, Math.PI]}>
				<meshPhysicalMaterial
					transparent
					polygonOffset
					polygonOffsetFactor={-10}
					map={BellAlbedo}
					map-flipY={false}
					map-anisotropy={16}
					roughness={0.6}
					metalness={1}
					toneMapped={true}
				/>
			</Decal>
		)
	} else {
		return (
			<Decal position={[0, 0.75, 0.35]} scale={0} rotation={[-Math.PI / Math.PI, Math.PI, Math.PI]}>
				<meshPhysicalMaterial
					transparent
					polygonOffset
					polygonOffsetFactor={-10}
					map={BellAlbedo}
					map-flipY={false}
					map-anisotropy={16}
					roughness={0.6}
					metalness={1}
					toneMapped={true}
				/>
			</Decal>
		)
	}
}

function RedBullSticker() {
	const snap = useSnapshot(state)

	const RedBullAlbedo = useTexture('/tex/stickers/red-bull-logo.png')

	if (snap.redBullSticker) {
		return (
			<>
				<Decal position={[0.4, 0.03, 0.35]} scale={0.42} rotation={[Math.PI / 1.42, Math.PI / 2, Math.PI / 3]}>
					<meshPhysicalMaterial
						transparent
						polygonOffset
						polygonOffsetFactor={-10}
						map={RedBullAlbedo}
						map-flipY={false}
						map-anisotropy={16}
						roughness={0.6}
						clearcoat={1}
						clearcoatRoughness={0}
						metalness={1}
						toneMapped={true}
					/>
				</Decal>

				<Decal position={[-0.4, 0.03, 0.35]} scale={0.42} rotation={[Math.PI / 1.42, Math.PI / 2, Math.PI / 3]}>
					<meshPhysicalMaterial
						transparent
						polygonOffset
						polygonOffsetFactor={-10}
						map={RedBullAlbedo}
						map-flipY={false}
						map-anisotropy={16}
						roughness={0.6}
						clearcoat={1}
						clearcoatRoughness={0}
						metalness={1}
						toneMapped={true}
					/>
				</Decal>
			</>
		)
	} else {
		return (
			<>
				<Decal position={[0.4, 0.03, 0.35]} scale={0} rotation={[Math.PI / 1.42, Math.PI / 2, Math.PI / 3]}>
					<meshPhysicalMaterial
						transparent
						polygonOffset
						polygonOffsetFactor={-10}
						map={RedBullAlbedo}
						map-flipY={false}
						map-anisotropy={16}
						roughness={0.6}
						clearcoat={1}
						clearcoatRoughness={0}
						metalness={1}
						toneMapped={true}
					/>
				</Decal>

				<Decal position={[-0.4, 0.03, 0.35]} scale={0} rotation={[Math.PI / 1.42, Math.PI / 2, Math.PI / 3]}>
					<meshPhysicalMaterial
						transparent
						polygonOffset
						polygonOffsetFactor={-10}
						map={RedBullAlbedo}
						map-flipY={false}
						map-anisotropy={16}
						roughness={0.6}
						clearcoat={1}
						clearcoatRoughness={0}
						metalness={1}
						toneMapped={true}
					/>
				</Decal>
			</>
		)
	}
}

export { BellSticker, RedBullSticker }
