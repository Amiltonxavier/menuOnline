import React, { ComponentProps, useContext } from "react";
import { CartContext } from "../../context";

type CartProps = ComponentProps<'section'>

export function Cart(props: CartProps) {
  const { cart, removeCart, updateQty } = useContext(CartContext);

  function handleRemove(id: number) {
    removeCart(id);
  }



  const handleAddQtd = (id: number, qtdsProducts: number) => {
    const newQtd = qtdsProducts + 1;
    updateQty(id, newQtd);
  }

  const handleRemoveQtd = (id: number, qtdsProducts: number) => {
    const newQtd = qtdsProducts - 1;
    updateQty(id, newQtd);
  }




  return (
    <section {...props} className="flex flex-col gap-3 justify-between p-4">
      <header>
        <span className="text-2xl text-center font-bold">Meus pedidos</span>
      </header>
      {cart.map((item) => (
        <article key={item.id} className="flex-1 w-full flex flex-row justify-between items-center border-b border-gray-200 p-2">
          <div className="size-50  overflow-hidden">
          <img  className="object-cover rounded-sm" src={item.url} alt="" />
          </div>
         
          <div className="flex flex-col flex-grow ml-4">
            <div>
              <h5 className="text-base text-gray-900 font-medium truncate">{item.name}</h5>

            </div>
            <div className="p-3 flex gap-2 items-center">
              <button type="button" onClick={() => handleRemoveQtd(item.id, item.qtdsProducts)} className="p-2 text-white bg-gray-800">-</button>
              <span className="p-3 bg-gray-100 text-gray-800">{item.qtdsProducts}</span>
              <button type="button" onClick={() => handleAddQtd(item.id, item.qtdsProducts)} className="p-2 text-white bg-gray-800">+</button>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <strong>${item.price}</strong>
            <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-600 font-medium">Remover</button>
          </div>
        </article>
      ))}


    </section>
  );
}
