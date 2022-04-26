import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item,qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList ([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    nameItem: item.modelo,
                    costItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {
            found.qtyItem += qty ;
        }
        
    } 
    
    const removeList = () => {
        setCartList ([]);
    }

    const deleteItem = (prodElegido) => {
        let borrarProd = cartList.filter(element => element.idItem !== prodElegido);
        setCartList(borrarProd);
        }

    const calcItemQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((valorAnterior, valorActual) => valorAnterior + valorActual), 0);
    }

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPorItem = cartList.map(item => calcTotalPorItem(item.idItem))
        return totalPorItem.reduce((valorAnterior, valorActual) => valorAnterior + valorActual);
    }

    const calcTasas = () => {
        return (calcSubTotal() * 0.21).toFixed(2);
    }

    const descuento = () => {
        return (calcSubTotal()* 0.05).toFixed(2);
    }

    const calcTotal = () => {
        return (calcSubTotal() + parseFloat(calcTasas()) - parseFloat(descuento()));
    }


    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart,
            removeList,
            deleteItem,
            calcItemQty,
            calcTotalPorItem,
            calcSubTotal,
            calcTasas,
            descuento,
            calcTotal
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;