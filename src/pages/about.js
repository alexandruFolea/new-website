import About from '../components/About';
import Head from 'next/head';

const about = () => {
	return (
		<>
			<Head>
				<title>Alex Folea - About </title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<About />
		</>
	);
};

export default about;
