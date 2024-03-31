import React from 'react'
import {Produts} from "../../constants";
import { MenuItem } from '../MenuItem';

export  function Menu() {
  return (
    <div>
        {
          Produts.map((item) => (
            <MenuItem key={item.id} data={item} />
          ))
        }
    </div>
  )
}
