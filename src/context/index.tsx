import { ReactNode, createContext, useEffect, useState } from "react";


interface Item {
    id: number,
    price: number,
    name: string,
    qtdsProducts: number,
    url: string
};

interface CartContextType {
    cart: Item[];
    total: number,
    addCart: (item: Item) => void,
    removeCart: (id: number) => void,
    updateQty: (id: number, qtdsProducts: number) => void,
    lengthProduct: number,

}

interface ChildrenProps {
    children: JSX.Element | JSX.Element[]
}

export const CartContext = createContext<CartContextType>({
    total: 0,
    addCart: () => { },
    cart: [],
    updateQty: () => {},
    removeCart: () => { },
    lengthProduct: 0,
})



export const CartProvider = ({ children }: ChildrenProps) => {

    const [cart, setCart] = useState<Item[]>([]);
    const [total, setTotal] = useState(0);
    const [lengthProduct, setLengthProduct] = useState(0)

    const addCart = (item: Item) => {
        const isProductInCart = cart.find((itens) => itens.id === item.id);

        if (isProductInCart) return;
        setCart([...cart, item]);
        setTotal(prev => prev + item.price * item.qtdsProducts);
       setLengthProduct(cart.length)
      // console.log(lengthProduct)
    }

    const updateQty = (id: number, qtdsProducts: number) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                // Atualiza a quantidade do produto
                return { ...item, qtdsProducts: qtdsProducts };
            }
            return item;
        });

        setCart(updatedCart); 
        const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price * item.qtdsProducts, 0);
        setTotal(updatedTotal);
       
        //setLengthProduct(cart.length)
    }



    const removeCart = (id: number) => {
        const isisProductInCart = cart.filter((item) => item.id !== id);
        // if(isisProductInCart)
        const newTotal = isisProductInCart.reduce((acc, item) => acc + item.price * item.qtdsProducts, 0);

        setCart(isisProductInCart);
        setTotal(newTotal)
        
    }

   

    return (
        <CartContext.Provider value={{ addCart, lengthProduct, total, cart, removeCart, updateQty }}>
            {children}
        </CartContext.Provider>
    )

}