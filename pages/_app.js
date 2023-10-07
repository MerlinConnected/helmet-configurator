import '../styles/index.scss'
import Head from 'next/head'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.png' />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
