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
            setCartList([
                ...cartList
            ]);
        }
        
    } 
    
    const removeList = () => {
        setCartList ([]);
    }

    const deleteItem = (prodElegido) => {
        let borrarProd = cartList.filter(element => element.idItem !== prodElegido);
        setCartList(borrarProd);
        }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem))
        return totalPerItem.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
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

    const calcItemQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart,
            removeList,
            deleteItem,
            calcItemQty,
            calcTotalPerItem,
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