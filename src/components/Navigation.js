import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<nav className='navbar'>
			<div
				className={open ? 'hamburger active' : 'hamburger'}
				onClick={handleClick}
			>
				{open ? <FaTimes /> : <FaBars />}
			</div>
			<ul className={open ? 'navbar__list active' : 'navbar__list'}>
				<li onClick={handleClick}>
					<Link href='/'>
						<a>home</a>
					</Link>
				</li>

				<li onClick={handleClick}>
					<Link href='/about'>
						<a>about</a>
					</Link>
				</li>
				<li onClick={handleClick}>
					<Link href='/portfolio'>
						<a>portfolio</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
