import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import QuienesSomos from './pages/QuienesSomos';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

const App = () => {
  return(
       <>
       <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
        <h2 className='titleFirst'>Bienvenid@s a la mejor tienda de trajes de baño</h2>
        <h6 className='titleSecond'>Una tienda para todas las edades y con mucha variedad 🩱 👙 🩳</h6>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        </CartContextProvider>
       </>
      );
    }
    
    export default App;
