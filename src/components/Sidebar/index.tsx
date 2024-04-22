import React, { ComponentProps } from 'react'
import { TotalAmount } from '../TotalAmount'
import { Cart } from '../Cart'
import { useSiderbarContext } from '../../context/sidebar'
type SidebarProps = ComponentProps<'div'>;

export function Sidebar(props: SidebarProps) {

    return (
        <div {...props} className='sticky top-0 right-0 min-h-screen bg-white flex flex-col overflow-auto'>
            <div className='flex-1'>
                <Cart className='sticky top-0' />
            </div>
            <TotalAmount className='mt-auto bg-white absolute bottom-0' />
        </div>
    )
}
