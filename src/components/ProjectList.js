import { projects } from '../constants/data';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
	return (
		<div className='projects__container'>
			{projects.map((project) => (
				<ProjectCard project={project} key={project.id} />
			))}
		</div>
	);
};

export default ProjectList;
