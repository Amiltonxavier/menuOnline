import React from 'react'
import { Produts } from "../../constants";
import { Item } from '../Item';

export function Menu() {
  return (
    <div className='grid grid-cols-2 gap-8 p-8'>

      {

        Produts.map((item) => (
          <Item key={item.id} data={item} />
        ))
      }


    </div>
  )
}
