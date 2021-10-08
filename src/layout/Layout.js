import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='main-container'>{children}</main>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
