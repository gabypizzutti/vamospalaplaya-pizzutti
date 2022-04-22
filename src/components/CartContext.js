import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item,qty) => {
        console.log('carContext',item," ",qty)
            //     if ( found === undefined) {
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



    // const addToCart = (item, qty) => {
    //     let found = cartList.find(product => product.idItem === item.id);
    //     if ( found === undefined) {
    //         setCartList([
    //             ...cartList,
    //             {
    //                 idItem: item.id,
    //                 imgItem: item.image[0],
    //                 nameItem: item.name,
    //                 costItem: item.cost,
    //                 qtyItem: qty
    //             }
    //         ]);
    //     } else {
    //         //al encontrarlo, entonces aumentamos el qty de ese producto
    //         found.qtyItem += qty;
    //     }
    // }
    
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