// import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Meta from '../components/Meta';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<Navbar />
			<main className='main-container'>{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
