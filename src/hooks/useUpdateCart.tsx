import {  ReactNode, useEffect, useState } from "react"
import {useContext} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from "../interfaces"



// interface UpdateCartProps {
//     children?: ReactNode,
//     thisProduct?: IProduct,
//     // isOpen: boolean 
//     isItemAddedModalVisible?: boolean,
//     setIsItemAddedModalVisible?: React.Dispatch<React.SetStateAction<boolean>> | any
// }

export  function useUpdateCart(count, setCount) {
    
    const {state, dispatch} = useContext(ProductContext)

   


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

   



    return [ count, setCount,  updateCart]
}