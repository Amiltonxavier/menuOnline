import React, { useContext, useState } from "react";
import { CartContext } from "../../context";

type MenuItemProps = {
  data: {
    id: number
    name: string;
    price: number;
    qtd: number;
    category: string;
    dishDay?: boolean;
  };
};




export function MenuItem({ data }: MenuItemProps) {

  const { id, name, category, price, qtd, dishDay } = data;
  const {addCart} = useContext(CartContext)

  const [qtdsProducts, setQtdProducts] = useState(0);


  const handleChooseProducts = () => {
    addCart({id, name, price, qtdsProducts});
  }

  const handleAddQtd = ()=> {
    
    if(qtdsProducts <= qtd )
      setQtdProducts(prev => prev + 1);
  }

  const handleRemoveQtd = ()=> {
    if(qtdsProducts < qtd && qtdsProducts >= 0 )
      setQtdProducts(prev => prev - 1);
  }


  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>{category}</li>
        <li>{price}</li>
        <li>{qtd}</li>
        {dishDay && <li>{`Prato do dia!`}</li>}
        <div>
          <button type="button" onClick={handleRemoveQtd}>-</button>
          {qtdsProducts}
          <button type="button" onClick={handleAddQtd}>+</button>
        </div>
        <button type="button" onClick={handleChooseProducts}>Add no menu</button>
      </ul>
    </div>
  );
}
