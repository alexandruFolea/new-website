import Layout from '../components/Layout';
import Head from 'next/head';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				{/* <title>Alex Folea - Portfolio Website</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' /> */}
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
