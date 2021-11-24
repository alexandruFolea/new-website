import React, { useState } from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
import Portfolio from '../components/Portfolio';

const portfolio = () => {
	return (
		<>
			<Head>
				<title>Alex Folea - Portfolio </title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Portfolio />
			<Footer />
		</>
	);
};

export default portfolio;
