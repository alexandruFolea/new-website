import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<li className='navbar__link'>
					<Link href='/'>home</Link>
				</li>
				<li className='navbar__link'>
					<Link href='about'>about me</Link>
				</li>
				<li className='navbar__link'>
					<Link href='portfolio'>portfolio</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
