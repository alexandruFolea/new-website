import { projects } from '../constants/data';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
	console.log('rendered');
	return (
		<div className='projects__container'>
			{projects.map((project) => (
				<ProjectCard project={project} key={project.id} />
			))}
		</div>
	);
};

export default ProjectList;
