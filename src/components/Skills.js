import Image from 'next/image';
import { icons } from '../constants/icons';

const Skills = () => {
	return (
		<div className='skills-section'>
			<h4>Current technology I use</h4>
			{/* <span>to create visually stunning websites</span> */}
			<div className='grid-container'>
				{icons.map((icon) => (
					<div className='grid-item' key={icon.id} data-tooltip={icon.attr}>
						<Image
							// className='grid-item'
							src={icon.url}
							width={150}
							height={150}
							alt='skill icon'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
