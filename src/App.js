import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import CartWidget from './components/CartWidget';
// import ItemListContainer from './components/ItemListContainer';


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
    <ItemListContainer greeting="Aprovecha este verano para lucir estos hermosos trajes de baño, no te vas a arrepentir"/>
   </>
  );
}

export default App;
