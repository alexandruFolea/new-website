import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import Link from 'next/link';

const About = () => {
	return (
		<div className='aboutpage' id='about'>
			<div className='aboutpage__container'>
				<div className='aboutpage__title'>
					<h1>About me</h1>
				</div>
				<div className='aboutpage__description'>
					<p>My name is Alexandru Folea and I am a front-end web developer.</p>
					<p>
						I’ve been developing websites for the past 3 years with a focus on
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
				<div className='aboutpage__social-links'>
					<FaGithubSquare />

					<FaLinkedin />
				</div>
			</div>
			<div className='aboutpage__contact__container'>
				<h6>Have an idea for a future project you need help with?</h6>
				<Link href='#home'>get in touch</Link>
			</div>
		</div>
	);
};

export default About;
