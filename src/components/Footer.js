import Contact from './Contact';
import Image from 'next/image';
import { FcHeatMap } from 'react-icons/fc';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__left'>
				<h1>developedAF 2021</h1>
			</div>
			<div className='footer__center'>
				<div className='footer__center__top'>
					<FcHeatMap />
					<h4>Site Navigation</h4>
				</div>
				<ul className='footer__center__list'>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>

					<li>
						<Link href='/about'>
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href='/portfolio'>
							<a>Portfolio</a>
						</Link>
					</li>
					<li>
						<Link href='/terms-of-service'>
							<a>Terms of Service</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer__right'>
				<Contact />
			</div>
			<div className='footer__bottom'>
				<h4>
					Copyright &copy; 2021 Alex Folea Development | All rights reserved
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
