import React, { useContext, useState } from "react";
import { CartContext } from "../../context";
import { BowlFood, Coins, Package, ShoppingBagOpen, Wine } from "@phosphor-icons/react";

type MenuItemProps = {
  data: {
    id: number
    name: string;
    price: number;
    qtd: number;
    category: string;
    dishDay?: boolean;
    url: string
  };
};




export function Item({ data }: MenuItemProps) {

  const { id, name, category, price, qtd, dishDay, url } = data;
  const { addCart } = useContext(CartContext)

  //const [qtdsProducts, setQtdProducts] = useState(1);


  const handleChooseProducts = () => {
    const qtdsProducts = 1;
    if (qtdsProducts <= 0) return;
    addCart({ id, name, price, qtdsProducts, url });

  }


  return (
    <>

      <article className="flex flex-row gap-2 max-h-50 rounded-xl">
        <div className="max-h-40 max-w-40 overflow-hidden rounded-lg">
          <img src={url} alt={name} className=" object-cover h-48 w-96 rounded-lg" />
        </div>
        <div>
          <header>
            <span className="text-xl font-semibold text-gray-900">{name}</span>
          </header>
          <ul className="w-full flex flex-col  gap-2 justify-center md:justify-start">
            <li className="flex flex-row gap-2 text-gray-700">
              {category.includes("Bebida") ? <Wine size={28} /> : <BowlFood size={28} />} <span className="font-normal text-base">{category}</span>
            </li>
            <li className="flex flex-row gap-2 text-gray-700">
              <Package size={28} />{qtd > 0 ? (<span className="text-green-500">Em estoque</span>) : (<span className="text-red-500">Fora do estoque</span>)}
            </li>
            <li className="flex flex-row gap-2 text-gray-700">
              <Coins size={28} />  {price}kz
            </li>
          </ul>
          <div className="mt-4">
            <button type="button" onClick={handleChooseProducts} className="px-3 py-2 bg-orange-500 text-white hover:bg-orange-700 rounded-lg flex gap-3 items-center"><ShoppingBagOpen size={28} /></button>
          </div>
        </div>


      </article>

    </>
  );
}
