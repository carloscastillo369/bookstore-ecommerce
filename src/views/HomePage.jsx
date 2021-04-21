import NavBar from '../components/NavBar/NavBar';
import Carousel from '../components/Home/Carousel';
import CategorysList from '../components/Home/CategorysList';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <NavBar/>
            <Carousel/>
            <CategorysList/>
            <Footer/>
        </>
    )
};

export default Home;