import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        console.log('carContext',item)
        setCartList ([
            ...cartList,
            item
        ]);
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