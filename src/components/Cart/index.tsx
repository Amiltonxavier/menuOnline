import React, { useContext } from "react";
import { CartContext } from "../../context";

export function Cart() {
  const { cart, total } = useContext(CartContext);
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <span key={item.id}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.qtdsProducts}</li>
          </span>
        ))}
      </ul>
      <h2>Total: {total}</h2>
    </div>
  );
}
