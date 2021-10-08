import ProjectList from '../components/ProjectList';
import ContactLink from '../components/ContactLink';

const portfolio = () => {
	return (
		<div className='portfoliopage' id='portfolio'>
			<h1>Portfolio</h1>
			<ProjectList />
			<div className='contact__link__dark'>
				<ContactLink />
			</div>
		</div>
	);
};

export default portfolio;
