import Navbar from "../components/Navbar";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting="Bienvenido"/>
        </>
    );
}

export default Home;