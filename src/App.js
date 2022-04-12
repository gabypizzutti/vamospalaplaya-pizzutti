import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
// import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';


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
    {/* <ItemListContainer greeting="Este verano es tuyo...🏖"/> */}
    <ItemDetailContainer/>
   </>
  );
}

export default App;
