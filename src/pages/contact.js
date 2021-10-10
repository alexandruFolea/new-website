import React from 'react';
import Contact from '../components/Contact';
import Meta from '../components/Meta';

const contact = () => {
	const favicon =
		'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📪</text></svg>';
	return (
		<div>
			<Meta title='Contact Page' favicon={favicon} />
			<Contact />
		</div>
	);
};

export default contact;
