import Contact from '../components/Contact';
import Head from 'next/head';
const contact = () => {
	return (
		<div className='contact__page' id='contact'>
			<Head>
				<title>Alex Folea - Contact </title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Contact />
		</div>
	);
};

export default contact;
