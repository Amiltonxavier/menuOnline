import { ShoppingCart } from '@phosphor-icons/react'
import React, { ComponentProps } from 'react'
import { useSiderbarContext } from '../../context/sidebar'

interface NavBarProps extends ComponentProps<'nav'> { }

export function NavBar(props: NavBarProps) {
  const { handleOpenAndCloseSIdebar } = useSiderbarContext()
  function handleOpenCart() {
    handleOpenAndCloseSIdebar()
  }
  return (
    <>
      <nav {...props} className='w-full min-h-3 sticky top-0 px-4 py-2 bg-white border border-b-zinc-200 shadow-sm'>
        <div className='max-w-full flex justify-between bg-white'>
          <div>
            <a href="" className='text-orange-500 font-bold text-xl'>Brand</a>

          </div>
          <span>
            <a onClick={handleOpenCart} className={`size-3 hover:text-zinc-600 rounded-full text-zinc-500 cursor-pointer `}>
              <ShoppingCart size={28} />
            </a>
          </span>
        </div>
      </nav>
    </>
  )
}
