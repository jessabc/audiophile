import { useContext } from 'react'
import {ProductContext} from '../ProductContext'
import CartItem from '../componenets/cart/CartItem'


export  function usecartItemElements() {

    const {state} = useContext(ProductContext)
  
    const cartItemElements = state.cart.map((item, index) => <CartItem key={index} item={item}/>)
     
    return cartItemElements
    
}