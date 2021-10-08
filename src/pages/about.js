import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import Link from 'next/link';
import BackgroundAnimation from '../components/BackgroundAnimation';
import ContactLink from '../components/ContactLink';

const about = () => {
	return (
		<div className='aboutpage' id='about'>
			<div className='container__left'>
				<h1 className='left__title'>About me</h1>
				<div className='left__description'>
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
				<div className='left__social-links'>
					<a href='https://www.google.com' target='_blank' rel='noreferrer'>
						<FaGithubSquare />
					</a>
					<a href='https://www.google.com' target='_blank' rel='noreferrer'>
						<FaLinkedin />
					</a>
				</div>
			</div>
			<div className='container__right'>
				<div className='container__anim'>
					<BackgroundAnimation />
				</div>
				<ContactLink />
				<div className='portfolio__link'>
					<Link href='/portfolio'>
						<a className='contact__link'>check out my work</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default about;
