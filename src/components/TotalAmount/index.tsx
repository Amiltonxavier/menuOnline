import React, { ComponentProps, useContext } from 'react'
import { CartContext } from '../../context';

type TotalAmountProps = ComponentProps<'div'>;

export function TotalAmount(props: TotalAmountProps) {
    const { total } = useContext(CartContext);
    return (
        <div {...props} className='border-t border-gray-200 px-4 py-6 sm:px-6'>
            <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Total a pagar</span>
                <span className="text-xl font-medium">{total}kz </span>
            </div>
            <button className='flex p-2 w-full items-center bg-orange-500 text-white rounded text-center'>Efeituar Pagamento</button>
        </div>
    )
}
