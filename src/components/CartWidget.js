import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const clickCarrito = (evt) => {
    }

    const prod = useContext(CartContext);

    return (
        <>
        <button type="button" className="btn-position-relative">
        <Link to="/Cart">
            <FontAwesomeIcon className="carrito" icon={faCartShopping} onClick={clickCarrito}/></Link>
                {
                     prod.cartList.length>0 
                     ? <span className="position-absolute top-2 translate-middle badge rounded-pill bg-danger">{prod.calcItemQty()}</span>
                     :<span className="visually-hidden"></span> 
                }
            </button>
        </>  
    );
}

export default CartWidget;