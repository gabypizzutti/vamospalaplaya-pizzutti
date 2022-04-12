import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { customFetch } from './utils/customFetch';
import { useEffect } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  //  useEffect (() =>{
  //    customFetch ()
  //      .then(result => console.log(result))
  //      .catch(error => console.log(error))
  // }, [])

  return (
   <>
    <Navbar>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
      <CartWidget/>
    </Navbar>
    <ItemListContainer greeting="Este verano es tuyo...🏖"/>
    <ItemDetailContainer/>
   </>
  );
}

export default App;
