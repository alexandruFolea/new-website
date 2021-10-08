import React from 'react';
import Image from 'next/image';
const ProjectCard = ({ project }) => {
	return (
		<a
			href={project.url}
			target='_blank'
			rel='noreferrer'
			className='project__card'
		>
			<div className='card__top'>
				<h3>{project.title}</h3>
				<p>{project.desc}</p>
				<div className='card__image'>
					<Image
						src={project.img}
						alt='image for each card'
						width={600}
						height={600}
					/>
				</div>
			</div>
			<ul className='stack__list'>
				{project.stacks.map((stack, index) => {
					return <li key={index}>{stack}</li>;
				})}
			</ul>
		</a>
	);
};

export default ProjectCard;
