import Link from 'next/link';
import Meta from '../components/Meta';

export default function Home() {
	const portfolio = '<portfolio/>';

	return (
		<div className='homepage' id='home'>
			<div className='homepage__wrapper'>
				<div className='homepage__banner'>
					<div className='homepage__title'>
						<h1>CREATIVE</h1>
						<h3>DEVELOPER</h3>
						<span>SENSIBLE TO FRONT-END</span>
					</div>
				</div>

				<div className='homepage__categories'>
					<div className='about'>
						<Link href='/about'>
							<a>about</a>
						</Link>
					</div>
					<div className='portfolio'>
						<Link href='/portfolio'>
							<a>{portfolio}</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
