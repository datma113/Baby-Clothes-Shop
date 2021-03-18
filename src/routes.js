import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import Cart from './components/cart/Cart'
import Contact from './components/contact/contact'

const routes = [
     {to: '/', exact: true, components: Home},
     {to: '/shop', exact: false, components: Shop},
     {to: '/cart', exact: false, components: Cart},
     {to: '/contact', exact: false, components: Contact},
]

export default routes