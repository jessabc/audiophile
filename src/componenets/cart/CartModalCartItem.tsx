import { IProduct } from "../../interfaces"
import UpdateCart from "./Counter"
import {useContext, useState} from 'react'
import {ProductContext} from '../../ProductContext'
import Counter from "./Counter"
import { useLocation } from "react-router-dom"
import CartItem from "./CartItem"

interface CartItemProps {
    item: IProduct,
}

export default function CartModalCartItem({item}: CartItemProps) {

    const {state, dispatch} = useContext(ProductContext)


    const [count, setCount] = useState( getDefaultValue())

    const location = useLocation()

    console.log(location)
    function getDefaultValue() {
      
        const alreadyInCart =  state.cart.some(product => product.id === item?.id) 
        console.log(alreadyInCart)
     
       if(alreadyInCart) {
       console.log('grrr')
        const x = state.cart.find(product => product.id === item.id)?.quantity
        console.log(x)
        return x
       } else {
        console.log('fffff')
    //   return state.data.find(product => product.id === thisProduct.id)?.quantity
    return 0 
       } 
        }


    
          //  WHY DOESNT THIS WORK AS A USEUPDATECART HOOK??????
    function updateCart(thisProduct: IProduct) {
        console.log('update cart')
  
        const alreadyInCart = state.cart.some((product) => product?.id === thisProduct?.id) 
          console.log(alreadyInCart)
          console.log(count)
        if(!alreadyInCart) {
         
            if(count! > 0) {
                   console.log('incart')
                dispatch({type: 'ADD_TO_CART', payload: {...thisProduct, quantity: count}}) 
            }
        }else if(alreadyInCart) {
            if(count!> 0) {
                dispatch({type: 'UPDATE_ITEM_IN_CART', payload: {...thisProduct, quantity: count}}) 
            }
            if(count === 0) {
                dispatch({type: 'REMOVE_ITEM_IN_CART', payload: {...thisProduct, quantity: count}})
            }  
        }

 

    }
    // /////////////////////////
    

    return (
        <div className="grid grid-cols-5 gap-3 items-center mb-4">

            {/* <div className=" ">
                <img src={`../${item?.image?.mobile}`} alt="" className="rounded-lg "/>
            </div>
            <div className="col-span-2">
               <p className="font-bold leading-6 text-black">{item.name}</p>
                <p className="font-bold text-sm leading-6 text-black opacity-50">$ {(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(item.price))}</p> 
            </div> */}

<CartItem item={item}/>
            {/* {(!state.cartModal && location.pathname === '/checkout') && <p className="col-start-5 text-right font-bold leading-6 text-black opacity-50">x
            {item.quantity}</p>} */}
        
        <div className="col-span-2">
          <Counter thisProduct={item}  count={count} setCount={setCount}/>
        </div>
            
            
        </div>
    )
}