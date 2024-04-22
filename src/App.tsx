
import { useContext, useEffect, useState } from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { CartContext, CartProvider } from './context'
import { TotalAmount } from './components/TotalAmount'
import { ShoppingCart } from '@phosphor-icons/react'
import { NavBar } from './components/Navbar'
import { SidebarProvider, useSiderbarContext } from './context/sidebar'
import { Sidebar } from './components/Sidebar'

function App() {
  const { lengthProduct } = useContext(CartContext)
  const { isOpen } = useSiderbarContext()




  return (
    <CartProvider>

      <section className={`grid grid-cols-[${isOpen ? "1fr_18rem" : "1fr"}]`}>
        <div className={`flex flex-col  overflow-y-auto`}>
          <NavBar />
          <Header />
          <Menu />
        </div>
        <aside className={`${isOpen ? "block shadow-sm bg-white border border-l-gray-200 overflow-y-auto" : "hidden"}`}>
          <Sidebar />
        </aside>

      </section>
    </CartProvider>
  )
}

export default App
