import {  ReactNode, useEffect, useState } from "react"
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { IProduct } from "../../interfaces"



interface UpdateCartProps {
    children?: ReactNode,
    thisProduct: IProduct,
    // isOpen: boolean 
}

export default function UpdateCart({children, thisProduct}: UpdateCartProps) {
    
    const {state, dispatch, isOpen, setIsOpen} = useContext(ProductContext)



    const [count, setCount] = useState(  getDefaultValue())
    console.log('coutn ran', count)

    function getDefaultValue() {


      
        console.log('get def')

        console.log(state.cart)
        if(state.cart) {
            const alreadyInCart =  state.cart.some(product => product.id === thisProduct.id) 
       console.log(alreadyInCart)

       

       if(alreadyInCart) {
        console.log(state.cart)
        console.log(thisProduct.id)
        const q  =  state.cart.find(product => product.id === thisProduct.id)?.quantity
        console.log(q)
        return 33333333
       } else {
      
        return state.data.find(product => product.id === thisProduct.id)?.quantity
        
        
       } 
        }
       
   }
 
    function decrement() {
        if(count > 0) {
        // dispatch({type:'DECREMENT'})
        setCount(count - 1)
        }
    }
  
    function increment() {
        setCount(count + 1)
    }

    useEffect(() => {
      
        if(isOpen) {
            updateCart(thisProduct)
        
        }
    }, [count])

    function updateCart(thisProduct: IProduct) {
  
        const alreadyInCart = state.cart.some((product: IProduct) => product.id === thisProduct.id) 
          
        if(!alreadyInCart) {
            if(count > 0) {
                dispatch({type: 'ADD_TO_CART', payload: {...thisProduct, quantity: count}}) 
            }
        }else if(alreadyInCart) {
            if(count > 0) {
                dispatch({type: 'UPDATE_ITEM_IN_CART', payload: {...thisProduct, quantity: count}}) 
            }
            if(count === 0) {
                dispatch({type: 'REMOVE_ITEM_IN_CART', payload: {...thisProduct, quantity: count}})
            }  
        }

     

    }

    // useEffect(() => {
    //     const cartStorage = JSON.parse(localStorage.getItem('cartStorage'));
    //     if (cartStorage?.length > 0) {
    //      dispatch({type: 'CART_STORAGE', payload: cartStorage });

    //     }
    //   }, []);
 
    
   


    return (
        <div className="flex">
            <div className="flex">
                <button onClick={decrement}>
                    -
                </button>

                <input value={count}  onChange={(e)=>setCount(parseInt(e.target.value)) }/>

                <button onClick={increment}>
                    +
                </button>
            </div>

            {!isOpen && <button onClick={() => updateCart(thisProduct)}>add to cart</button>}
        
        </div>
    )
}