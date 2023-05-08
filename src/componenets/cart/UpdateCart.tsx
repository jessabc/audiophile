import {  ReactNode, useEffect, useState } from "react"
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { IProduct } from "../../interfaces"



interface UpdateCartProps {
    children?: ReactNode,
    thisProduct: IProduct,
    // isOpen: boolean 
    isItemAddedModalVisible?: boolean,
    setIsItemAddedModalVisible?: React.Dispatch<React.SetStateAction<boolean>> | any
}

export default function UpdateCart({children, thisProduct, isItemAddedModalVisible, setIsItemAddedModalVisible}: UpdateCartProps) {
    
    const {state, dispatch} = useContext(ProductContext)



    const [count, setCount] = useState(getDefaultValue())
    // console.log(state.cart)

    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem('cartStorage') || "" );
        if (cartStorage?.length > 0) {
         dispatch({type: 'CART_STORAGE', payload: cartStorage });

        }
 
      }, []);

    // useEffect(() => {
    //     if(isOpen){
    //         const quantity = state.cart.find(product => product.id === thisProduct.id)?.quantity
    //     setCount(quantity)
    //     }

    // }, [isOpen])

    function getDefaultValue() {
       console.log(state.cart)
        const alreadyInCart =  state.cart.some(product => product.id === thisProduct.id) 
     
       if(alreadyInCart) {
       
        return state.cart.find(product => product.id === thisProduct.id)?.quantity
       } else {
    //   return state.data.find(product => product.id === thisProduct.id)?.quantity
    return 0 
       } 
        }
    
    
       
   
 
    function decrement() {
        if(count! > 0) {
        // dispatch({type:'DECREMENT'})
        setCount(count! - 1)
        }
    }
  
    function increment() {
        setCount(count! + 1)
    }

    useEffect(() => {
      
        if(state.cartModal) {
            updateCart(thisProduct)
        
        }

    }, [count])

    function updateCart(thisProduct: IProduct) {
  
        const alreadyInCart = state.cart.some((product: IProduct) => product.id === thisProduct.id) 
          
        if(!alreadyInCart) {
            if(count! > 0) {
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

    function handleOnClick() {
        updateCart(thisProduct)
        
      
            setIsItemAddedModalVisible(true)
        setTimeout(() => {
            setIsItemAddedModalVisible(false)
        }, 2000);
       
        
    }
 
    useEffect(() => {
        localStorage.setItem('cartStorage', JSON.stringify(state.cart));
    }, [state.cart]);
   


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

            {!state.cartModal && <button onClick={handleOnClick}>add to cart</button>}
        
        </div>
    )
}