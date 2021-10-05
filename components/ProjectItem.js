import Link from 'next/link';

const ProjectItem = ({ project }) => {
	return (
		<Link href='project/[id]' as={`/project/${project.id}`}>
			<a>
				<h3>{project.title}</h3>
				<p>{project.body}</p>
			</a>
		</Link>
	);
};

export default ProjectItem;
