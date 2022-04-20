import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const clickCarrito = (evt) => {
       console.log(evt)
    }

    return (
        <>
        <button type="button" className="btn-position-relative">
        <Link to="/Cart">
            <FontAwesomeIcon className="carrito" icon={faCartShopping} onclick={clickCarrito}/>  
            </Link>
            <span className="position-absolute top-2 translate-middle badge rounded-pill bg-danger">2
                <span className="visually-hidden">unready messages</span> 
            </span>
        </button>
        </>  
    );
}

export default CartWidget;