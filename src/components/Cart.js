import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {

    const prod = useContext (CartContext);

    return(
        <>
        <h4 className="tituloCarrito">Estas en tu carrito de compras... 🛒 </h4>
        {
            prod.cartList.length>0 ? <button className="btnBorrar" onClick={prod.cartClear}>Borrar productos </button>
            : <h5 className="vacio">Tu carrito esta vacío</h5> 
        }
        <Link to="/"><button className="seguirComprando">Seguir comprando</button></Link>
        {
            prod.cartList.length > 0 && (
                <div className="prodElegido">
                    <h5 className="listaProd">Productos elegidos:</h5>
                {
                    prod.cartList.map (item =>
                        <div>
                            <img className="bikini" src={item.imgItem} alt="malla"/>
                            <div className="descProd">
                                <span className="idBikini">Código: {item.idItem}</span>
                                <span id="modeloBikini">Producto: Bikini - Modelo:<b> {item.nameItem}</b></span>
                                <button className="deleteProd" onClick={() => prod.cxlProd(item.idItem)}>Borrar</button>
                            </div>    
                            <div className="priceBikini">
                                <span className="cantStock">{item.onAdd}</span>
                                <span>{item.costItem}</span>
                            </div>
                       </div>
                    )
                }
                 </div>
                
            )
        }
       
        </>
    )
}

export default Cart;