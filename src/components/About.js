import Image from 'next/image';

const About = () => {
	return (
		<div className='about' id='about'>
			<div className='about__container'>
				<div className='about__text'>
					<h1>About me</h1>
					<p>
						My name is Alexandru Folea and I am a front-end web developer based
						in Stamford, CT.
					</p>
					<p>
						I’ve been developing websites for the past 4 years with a focus on
						user experience. I am also developing skills in graphic design; and
						photo retouching / manipulation.
					</p>
					<p>
						I come from a customer relations background and work to combine
						those communication skills with technical knowledge to elevate the
						Web Development industry.
					</p>
					<p>
						I aspire to be a trusted team member that my colleagues enjoy
						working with and who produces functional, bug free code that meets
						or exceeds the expectations.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
