import Particles from 'react-tsparticles';
import Link from 'next/link';
const Intro = () => {
	const particlesInit = (main) => {
		console.log(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<div className='intro'>
			<div className='intro__text'>
				<h1>Hi, I&apos; m Alex</h1>
				<p>A web developer sensible to front-end</p>
				<div className='intro__cta'>
					<Link href='/portfolio'>
						<a>recent work</a>
					</Link>
				</div>
			</div>
			<Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: '',
						},
					},
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: false,
								mode: 'push',
							},
							onHover: {
								enable: true,
								mode: 'repulse',
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 100,
								duration: 1,
							},
						},
					},
					particles: {
						color: {
							value: '#14213d',
							// value: '#fdffb6',
						},
						links: {
							// color: '#fdffb6',
							color: '#e5e5e5',
							distance: 120,
							enable: true,
							opacity: 0.99,
							width: 1,
						},
						collisions: {
							enable: false,
						},
						move: {
							direction: 'none',
							enable: true,
							outMode: 'bounce',
							random: false,
							speed: 0.3,
							straight: true,
						},
						number: {
							density: {
								enable: true,
								value_area: 1000,
							},
							value: 120,
						},
						opacity: {
							value: 0.96,
						},
						shape: {
							type: 'circle',
						},
						size: {
							random: true,
							value: 6,
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	);
};

export default Intro;
