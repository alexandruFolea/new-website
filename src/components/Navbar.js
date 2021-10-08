import { useState } from 'react';
import Link from 'next/link';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	return (
		<nav className='navigationmenu'>
			<ul className={open ? 'navbar active' : 'navbar'}>
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
				<li onClick={handleClick}>
					<Link href='/contact'>
						<a>contact</a>
					</Link>
				</li>
			</ul>
			<div onClick={handleClick} className='hamburger'>
				<div>{open ? <FaTimes /> : <FaBars />}</div>
			</div>
			<div className='desktop-menu'>
				<ul>
					<li>
						<Link href='/'>
							<a>home</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a>about</a>
						</Link>
					</li>
					<li>
						<Link href='/portfolio'>
							<a>portfolio</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a>contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
