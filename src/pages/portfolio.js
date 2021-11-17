import React from 'react';
import { projects } from '../constants/data';
import Image from 'next/image';
import Link from 'next/link';

const portfolio = () => {
	return (
		<div className='portfolio' id='portfolio'>
			<div className='portfolio__page__title'>
				<h1>My portfolio</h1>
			</div>
			<div className='portfolio__container'>
				<div className='portfolio__wrapper'>
					{projects.map(({ id, title, url, img, desc }) => {
						return (
							<div className='portfolio__card' key={id}>
								<a href={url} target='_blank' rel='noreferrer'>
									<div>
										<h3>{title}</h3>
										<Image
											src={img}
											height='400'
											width='400'
											alt={`project image ${title}`}
										/>
									</div>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default portfolio;
