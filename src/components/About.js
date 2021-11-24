import Image from 'next/image';
import Link from 'next/link';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { CgArrowLongDown } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
	return (
		<>
			<div className='about' id='about'>
				<div className='about__wrapper'>
					<div className='intro__card'>
						<div className='intro__card__text'>
							<h3>
								My full name is <span>Alex</span>andru Folea
							</h3>
							<p>I am a front-end web developer located in Stamford, CT.</p>
							<p>
								I’ve been developing websites for the past 4 years with a focus
								on user experience. I am also developing skills in graphic
								design; and photo retouching / manipulation.
							</p>
							<p>
								I come from a customer relations background and work to combine
								those communication skills with technical knowledge to elevate
								the Web Development industry.
							</p>
							<p>
								I aspire to be a trusted team member that my colleagues enjoy
								working with and who produces functional, bug free code that
								meets or exceeds the expectations.
							</p>
							<p>
								You can get in touch by leaving a message
								<Link href='/contact'>
									<a> here</a>
								</Link>
								.
							</p>
							<p>
								Bellow you&apos;ll find some links to my limited social media
								options.
							</p>
							<div className='intro__card__social'>
								<span>Social links:</span>
								<a
									href='https://www.linkedin.com/in/alexandru-folea/'
									target='_blank'
									rel='noreferrer'
								>
									<FaLinkedin />
								</a>
								<a
									href='https://github.com/alexandruFolea'
									target='_blank'
									rel='noreferrer'
								>
									<FaGithub />
								</a>
							</div>
						</div>
						<div className='intro__card__image'>
							<Image
								src='/Alex3.png'
								width='550'
								height='650'
								alt='alexandru folea portfolio picture'
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
