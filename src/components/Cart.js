import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {

    const test = useContext (CartContext);
    console.log('cartcontext desde cart', test)

    return(
        <>
        <h4 className="tituloCarrito">Estas en tu carrito de compras... 🛒 </h4>
        <h5 className="vacio">Tu carrito esta vacío</h5> 
        <Link to="/"><button className="seguirComprando">Seguir comprando</button></Link>
       {/*  <div className="prodElegido">
            <img className="traje" src={test[1].img} alt="malla"/>
            <span className="idProducto">Código: {test[1].id}</span>
            <h4 id="title"><b>Modelo:{test[1].modelo}</b></h4>
            <span className="price">{test[1].price}</span>
        </div> */}
        </>
    )
}

export default Cart;