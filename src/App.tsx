
import { Cart } from './components/Cart'
import { Menu } from './components/Menu'
import { CartProvider } from './context'

function App() {


  return (
    <CartProvider>
      <Menu />
      <Cart />
    </CartProvider>
  )
}

export default App
