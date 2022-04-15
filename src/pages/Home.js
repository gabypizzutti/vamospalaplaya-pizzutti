import '../App.css';
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from '../components/ItemDetailContainer';
import QuienesSomos from './QuienesSomos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';

const Home =() => {

  return (
   <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
        <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default Home;