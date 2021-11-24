import About from '../components/About';
import Intro from '../components/Intro';
import Head from 'next/head';

export default function Home() {
	return (
		<div className='homepage'>
			<Head>
				<title>Alex Folea - Portfolio Website</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Intro />
		</div>
	);
}
