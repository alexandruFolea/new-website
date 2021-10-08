import React from 'react';
import Link from 'next/link';
const ContactLink = () => {
	return (
		<>
			<div className='container__contact__link'>
				<h6>Have an idea for a future project you need help with?</h6>
				<Link href='/contact'>
					<a className='contact__link'>get in touch</a>
				</Link>
			</div>
		</>
	);
};

export default ContactLink;
