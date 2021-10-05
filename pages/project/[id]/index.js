import { useRouter } from 'next/router';
import Link from 'next/link';
import { server } from '../../../config';

const project = ({ project }) => {
	return (
		<>
			<h1>{project.title}</h1>
			<p>{project.desc}</p>
			<Link href='/portfolio'>go back</Link>
		</>
	);
};

export default project;

export const getStaticProps = async (context) => {
	const res = await fetch(`${server}/api/projects/${context.params.id}`);

	const project = await res.json();

	return {
		props: {
			project,
		},
	};
};
export const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/projects`);

	const projects = await res.json();

	const ids = projects.map((project) => project.id);

	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};
