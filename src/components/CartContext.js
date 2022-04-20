import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([
        {
        id: 1,
        categoryId: 1,
        modelo: "Flowers",
        price: "AR$ 15.000",
        img: "../assets/trajetiroalto.png",
        description: "Corpiño con sosten fijo estampado con tiras elásticas. Breteles regulables y bombacha ajustables con tiras. Las estampas de cada Bikini se hacen una por una, artesanalmente.",
        stock: 5, 
       }
    ]);


    return (
        <CartContext.Provider value={cartList}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;