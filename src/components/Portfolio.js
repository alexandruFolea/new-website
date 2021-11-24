import Image from 'next/image';
import { projects } from '../constants/data';
const Portfolio = () => {
	return (
		<div className='portfolio'>
			<div className='portfolio__banner'>
				<h1>Portfolio</h1>
			</div>

			<div className='portfolio__container'>
				{projects.map(({ id, title, url, img, desc, stacks }) => (
					<div className='portfolio__item' key={id}>
						<div className='item__text'>
							<div className='item__title'>
								<h2>{title}</h2>
							</div>
							<div className='item__desc'>
								<p>{desc}</p>
							</div>
							<ul className='item__stack__list'>
								<p>tech used:</p>
								{stacks.map((stack) => (
									<li key={stack}>{stack}</li>
								))}
							</ul>

							<div className='item__cta'>
								<a href={url} target='_blank' rel='noreferrer'>
									visit site...
								</a>
							</div>
						</div>
						<div className='item__image'>
							<Image width='600' height='600' src={img} alt={desc} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
