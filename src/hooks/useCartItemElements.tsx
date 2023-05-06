import { useContext } from 'react'
import {ProductContext} from '../ProductContext'
import CartItem from '../componenets/cart/CartItem'


export  function usecartItemElements() {

    const {state, dispatch} = useContext(ProductContext)
  
    const cartItemElements = state.cart.map(item => <CartItem key={item.id} item={item}/>)
     
    return cartItemElements
    
}