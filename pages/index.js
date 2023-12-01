import Head from 'next/head'
import Overlay from '../components/overlay/Overlay'
import Model from '../components/model/Model'

export default function Home() {
	return (
		<>
			<Head>
				<title>Helmet Configurator NextJS & R3F</title>
				<meta name='description' content='To be written.' />
				<meta name='theme-color' content='#000000' />
			</Head>

			<Model />

			<Overlay />
		</>
	)
}
