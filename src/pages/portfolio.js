import React, { useState } from 'react';
import Footer from '../components/Footer';
import Link from 'next/link';
import Portfolio from '../components/Portfolio';

const portfolio = () => {
	return (
		<>
			<Portfolio />
			<Footer />
		</>
	);
};

export default portfolio;
