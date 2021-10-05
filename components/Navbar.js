import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<li className='navbar__link'>
					<Link href='#home'>HOME</Link>
				</li>
				<li className='navbar__link'>
					<Link href='#about'>ABOUT</Link>
				</li>
				<li className='navbar__link'>
					<Link href='/portfolio'>PORTFOLIO</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
