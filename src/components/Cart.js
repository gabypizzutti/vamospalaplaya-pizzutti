import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {

    const prod = useContext (CartContext);

    return(
        <>
        <h4 className="tituloCarrito">Estas en tu carrito de compras... 🛒 </h4>
        {
            prod.cartList.length>0 ? <button className="btnBorrar" onClick={prod.removeList}>Borrar productos </button>
            : <h5 className="vacio">Tu carrito esta vacío</h5> 
        }
        <Link to="/"><button className="seguirComprando">Seguir comprando</button></Link>
        <div className="prodComprados">
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
                                <button className="deleteProd" onClick={() => prod.deleteItem(item.idItem)}>Borrar</button>
                            </div>    
                            <div className="priceBikini">
                                <span className="cantStock">{item.qtyItem} producto(s) / {item.costItem} cada uno</span>
                                <span>$ {prod.calcTotalPerItem(item.idItem)}</span>
                            </div>
                       </div>
                    )
                }
                 </div>
            )
        }
        </div>
        <div className="orden">
            <h3 className="tituloOrden">Orden de compra</h3> 
            <p className="itemsOrden">Subtotal: <span className="nrosOrden"> $ {prod.calcSubTotal()}</span></p>
            <p className="itemsOrden">Tasas: <span className="totalTasas">$ {prod.calcTasas()}</span></p>
            <p className="itemsOrden">Descuento: <span className="ttlDesc">$ {prod.descuento()} </span></p>
            <p className="itemsOrden itemTotal">Total: <span className="nroTotal">$ {prod.calcTotal()}</span></p>
            <button className="btnFinalizar">Finalizar compra</button>
        </div>
        </>
    )
}

    

export default Cart;