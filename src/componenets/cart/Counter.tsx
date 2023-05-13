import {  ReactNode, useEffect, useState } from "react"
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { IProduct } from "../../interfaces"
import { useUpdateCart } from "../../hooks/useUpdateCart"


// interface UpdateCartProps {
//     children?: ReactNode,
//     thisProduct: IProduct,
//     // isOpen: boolean 
//     isItemAddedModalVisible?: boolean,
//     setIsItemAddedModalVisible?: React.Dispatch<React.SetStateAction<boolean>> | any
// }

export default function Counter({thisProduct, isItemAddedModalVisible, setIsItemAddedModalVisible, count, setCount}) {
   

    //  ///////////////////////////////////


const {state, dispatch} = useContext(ProductContext)

// const [ updateCart] = useUpdateCart(count, setCount)

useEffect(() => {
    // const cartStorage = JSON.parse(localStorage.getItem('cartStorage') || "" );
    // if (cartStorage?.length > 0) {
    //  dispatch({type: 'CART_STORAGE', payload: cartStorage });

    // }

  }, []);

// useEffect(() => {
//     if(isOpen){
//         const quantity = state.cart.find(product => product.id === thisProduct.id)?.quantity
//     setCount(quantity)
//     }

// }, [isOpen])


console.log(state.cart)

   


function decrement() {
    if(count! > 0) {
        console.log('deccrement')
    // dispatch({type:'DECREMENT'})
    setCount(count! - 1)
    }
}

function increment() {
    console.log('increment')
    setCount(count! + 1)
}

// useEffect(() => {
  
//     if(state.cartModal) {
//         updateCart(thisProduct)
    
//     }

// }, [count])

// function updateCart(thisProduct: IProduct) {
//     console.log('update cart')

//     const alreadyInCart = state.cart.some((product) => product?.id === thisProduct?.id) 
//       console.log(alreadyInCart)
//       console.log(count)
//     if(!alreadyInCart) {
     
//         if(count! > 0) {
//                console.log('incart')
//             dispatch({type: 'ADD_TO_CART', payload: {...thisProduct, quantity: count}}) 
//         }
//     }else if(alreadyInCart) {
//         if(count!> 0) {
//             dispatch({type: 'UPDATE_ITEM_IN_CART', payload: {...thisProduct, quantity: count}}) 
//         }
//         if(count === 0) {
//             dispatch({type: 'REMOVE_ITEM_IN_CART', payload: {...thisProduct, quantity: count}})
//         }  
//     }



// }







useEffect(() => {
    localStorage.setItem('cartStorage', JSON.stringify(state.cart));
}, [state.cart]);


    




// ////////////////////////////////
   



    return (
        <div className="flex gap-3  ">
            <div className={`grid grid-cols-3 
           ${state.cartModal ? '' :   'w-1/2'} bg-gray h-12  `}>

                <button className='font-bold text-sm text-center text-black opacity-25 hover:text-orange'  onClick={decrement}>
                    -
                </button>

                <input className='font-bold text-sm text-center text-black bg-gray'  value={count}  onChange={(e)=>setCount(parseInt(e.target.value)) }/>

                <button className='font-bold text-sm text-center text-black opacity-25 hover:text-orange' onClick={increment}>
                    +
                </button>
            </div>

           
             {/* <button className='   w-1/2  font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange  h-12hover:bg-lightOrange'  onClick={handleOnClick}>add to cart</button> 
             */}
            
        
        </div>
    )
}