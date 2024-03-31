import { ReactNode, createContext, useState } from "react";


interface Item {
    id: number,
    price: number,
    name: string,
    qtdsProducts: number,
};

interface CartContextType {
    cart: Item[];
    total: number,
    addCart: (item: Item) => void
}

interface ChildrenProps {
    children: JSX.Element | JSX.Element[]
}

export const CartContext = createContext<CartContextType>({
    total: 0,
    addCart: () => {},
    cart: []
})



export const CartProvider = ({children}:  ChildrenProps) => {

    const [cart, setCart] = useState<Item[]>([]);
    const [total, setTotal] = useState(0);

    const addCart = (item: Item)=> {
        const isProductInCart = cart.find((itens) => itens.id === item.id);

        if(isProductInCart) return;
        setCart([...cart, item]);
        setTotal(prev => prev + item.price * item.qtdsProducts);
    }

    return(
        <CartContext.Provider value={{addCart, total, cart}}>
            {children}
        </CartContext.Provider>
    )

}