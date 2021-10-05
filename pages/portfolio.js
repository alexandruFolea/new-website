import Link from 'next/link';
import { server } from '../config';
import ProjectList from '../components/ProjectList';

const Portfolio = ({ projects }) => {
	return (
		<div className='portfoliopage' id='portfolio'>
			<div className='portfoliopage__title'>
				<h1>Portfolio</h1>
			</div>
			<div className='portfoliopage__wrapper'>
				<div className='port__left'>
					<div className='left__title'>
						<h2>Projects</h2>
						<div className='left__grid-container'>
							{/* projects go in here */}
						</div>
					</div>
				</div>
				<div className='port__right'>
					<ProjectList projects={projects} />
				</div>
				<Link href='/'>go home</Link>
			</div>
		</div>
	);
};

export default Portfolio;

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/projects`);
	const projects = await res.json();

	return {
		props: {
			projects,
		},
	};
};
