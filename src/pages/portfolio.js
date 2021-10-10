import ProjectList from '../components/ProjectList';
import ContactLink from '../components/ContactLink';
import Skills from '../components/Skills';
import Meta from '../components/Meta';

const portfolio = () => {
	const favicon =
		'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">☯️</text></svg>';
	return (
		<div className='portfoliopage' id='portfolio'>
			<Meta title='Portfolio Page' favicon={favicon} />
			<h1>Portfolio</h1>
			<ProjectList />
			<Skills />
			<div className='contact__link__dark'>
				<ContactLink />
			</div>
		</div>
	);
};

export default portfolio;
