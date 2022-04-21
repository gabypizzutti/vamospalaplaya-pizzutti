import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {

    const prod = useContext (CartContext);
    console.log(prod);

    return(
        <>
        <h4 className="tituloCarrito">Estas en tu carrito de compras... 🛒 </h4>
        <h5 className="vacio">Tu carrito esta vacío</h5> 
        <Link to="/"><button className="seguirComprando">Seguir comprando</button></Link>
        {
            prod.cartList.legnth > 0 && (
                <div className="prodElegido">
                <img className="bikini" src={prod.cartList[0].img} alt="malla"/>
                <div className="descProd">
                    <span className="idBikini">Código: {prod.cartList[0].id}</span>
                    <span id="modeloBikini">Producto: Bikini - Modelo:<b> {prod.cartList[0].modelo}</b></span>
                </div>    
                <div className="priceBikini">
                    <span>1 producto</span>
                    <span>{prod.cartList[0].price}</span>
                </div>
            </div>
            )
        }
       
        </>
    )
}

export default Cart;