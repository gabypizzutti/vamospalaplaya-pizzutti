import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <>
    <Navbar>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
      <CartWidget/>
    </Navbar>
    <ItemListContainer greeting="Bienvenido"/>
   </>
  );
}

export default App;
