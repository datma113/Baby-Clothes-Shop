import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import Cart from './components/cart/Cart'
import Contact from './components/contact/contact'
import NotFound from './components/NotFound'
import ProductDetail from './components/shop/ProductDetail'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import Register from './components/auth/Register'



const routes = [
     {to: '/', exact: true, component: Home},
     {to: '/shop', exact: false, component: Shop},
     {to: '/cart', exact: false, component: Cart},
     {to: '/contact', exact: false, component: Contact}, 
     {to: '/product-detail/:id', exact: false, component: ProductDetail},
     {to: '/login', exact: false, component: Login},
     {to: '/profile', exact: false, component: Profile},
     {to: '/register', exact: false, component: Register},
     {to: '', exact: false, component: NotFound}
]

export default routes