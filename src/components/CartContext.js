import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img[0],
                    nameItem: item.modelo,
                    costItem: item.price,
                    qtyItem: qty
                }
            ]);
         } else {
             found.qtyItem += qty;
        }
    }
    
    const cartClear = () => {
        setCartList ([]);
    }

    const cxlProd = (prodElegido) => {
            let borrarProd = cartList.filter(element => element.id !== prodElegido);
            setCartList(borrarProd);
        }

    return (
        <CartContext.Provider value={{cartList, addToCart,cartClear,cxlProd}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;