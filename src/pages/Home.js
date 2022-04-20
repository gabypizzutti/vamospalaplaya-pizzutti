import '../App.css';
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from '../components/ItemDetailContainer';
import QuienesSomos from './QuienesSomos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import CartContextProvider from '../components/CartContext';
import Item from '../components/Item';

const Home =() => {

  return (
   <>
   <CartContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
        <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
   </>
  );
}

export default Home;