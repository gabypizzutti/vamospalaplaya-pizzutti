import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import db from '../utils/firebaseConfig';


const Cart = () => {

    const prod = useContext (CartContext);

    const createOrder = () => {
        const prodItems = prod.cartList.map(item => ({
            id: item.idItem,
            title: item.nameItem,
            price: item.costItem,
            cant: item.qtyItem
        }));
    
        prod.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
            buyer : {
                name: "Julian Cruz",
                phone: "1234567891",
                email: "julian@gmail.com"
            },
                date: serverTimestamp(),
                prodItems,
                total: prod.calcTotal()
            };
              
        const createOrderInFirestore = async () => {
          // Add a new document with a generated id
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
      
        createOrderInFirestore()
          .then(result => alert('Tu orden de compra fue creada con exito. Por favor toma nota del id de tu pedido.\n\n\nOrder ID: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
      
        prod.removeList();
      
    }

    return(
        <>
        <h4 className="tituloCarrito">Estas en tu carrito de compras... 🛒 </h4>
        {
            prod.cartList.length>0 ? <button className="btnBorrar" onClick={prod.removeList}>Borrar productos </button>
            : <h5 className="vacio">Tu carrito esta vacío</h5> 
        }
        {
            prod.cartList.length>0 ? <Link to="/"><button className="seguirComprando">Seguir comprando</button></Link>
            : <Link to="/"><button className="seguirComprando">Comenzar compra</button></Link>
        }
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
        {
            prod.cartList.length>0 ?
        <div className="orden">
            <h3 className="tituloOrden">Orden de compra</h3> 
            <p className="itemsOrden">Subtotal: <span className="nrosOrden"> $ {prod.calcSubTotal()}</span></p>
            <p className="itemsOrden">Tasas: <span className="totalTasas">$ {prod.calcTasas()}</span></p>
            <p className="itemsOrden">Descuento: <span className="ttlDesc">$ {prod.descuento()} </span></p>
            <p className="itemsOrden itemTotal">Total: <span className="nroTotal">$ {prod.calcTotal()}</span></p>
            <button className="btnFinalizar" onClick={createOrder}>Finalizar compra</button>
        </div> : <span></span>
         }
        </>
    )
}

    

export default Cart;