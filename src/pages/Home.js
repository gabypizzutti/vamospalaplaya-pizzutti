import '../App.css';
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from '../components/ItemDetailContainer';
import QuienesSomos from '../components/QuienesSomos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import {useEffect} from 'react';
import Mujeres from '../components/Mujeres';
import Hombres from '../components/Hombres';
import Chicos from '../components/Chicos';
import Footer from '../components/Footer';

const Home =() => {

  // useEffect (() => {
  //   customFetch ()
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))
  // }, [])

  return (
   <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/:QuienesSomos" element={<QuienesSomos/>}/>
        <Route path="/:category/:idCategory" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default Home;