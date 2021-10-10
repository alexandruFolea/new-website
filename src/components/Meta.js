import Head from 'next/head';

const Meta = ({ title, keywords, description, favicon }) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='keywords' content={keywords} />
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<link rel='icon' href={favicon} />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Alex Folea Portfolio Homepage',
	keywords: 'portfolio, web development, programming, web design',
	description: "Alexandru Folea's Portfolio",
	favicon:
		'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚡️</text></svg>',
};

export default Meta;
