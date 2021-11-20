import Particles from 'react-tsparticles';
import Link from 'next/link';
const Intro = () => {
	const particlesInit = (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<div className='intro'>
			<div className='intro__text'>
				<h1>Creative</h1>
				<h3>Developer</h3>
				<p>Sensible to Front-End</p>

				<div className='intro__ctas'>
					<div>
						<Link href='/about'>
							<a>about</a>
						</Link>
					</div>
					<div>
						<Link href='/portfolio'>
							<a>portfolio</a>
						</Link>
					</div>
				</div>
			</div>
			<Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: '#fff',
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
							value: '#00ffff',
						},
						links: {
							color: '#001000',
							distance: 120,
							enable: true,
							opacity: 0.7,
							width: 1.4,
						},
						collisions: {
							enable: true,
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
								value_area: 600,
							},
							value: 120,
						},
						opacity: {
							value: 0.7,
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
