import { useEffect } from "react"
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { IProduct } from "../../interfaces"


interface UpdateCartProps {
    thisProduct: IProduct,
    isItemAddedModalVisible?: boolean,
    setIsItemAddedModalVisible?: React.Dispatch<React.SetStateAction<boolean>> | any,
    count?: number,
    setCount?: React.Dispatch<React.SetStateAction<number>> | any

}

export default function Counter({thisProduct, isItemAddedModalVisible, setIsItemAddedModalVisible, count, setCount}: UpdateCartProps) {
 
    const {state, dispatch} = useContext(ProductContext)

    function decrement() {
        if(count! > 0) {
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

    //  WHY DOESNT THIS WORK AS A USEUPDATECART HOOK??????
    function updateCart(thisProduct: IProduct) {
        const alreadyInCart = state.cart.some((product) => product?.id === thisProduct?.id) 
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
      
        <div className={`grid grid-cols-3 ${state.cartModal ? '' : 'w-1/2'} bg-gray h-12`}>

            <button 
                className='font-bold text-sm text-center text-black opacity-25 hover:text-orange'  
                onClick={decrement}>
                    -
            </button>

            <input 
                className='font-bold text-sm text-center text-black bg-gray'  
                value={count}  
                onChange={(e)=>setCount(parseInt(e.target.value)) }
            />

            <button 
                className='font-bold text-sm text-center text-black opacity-25 hover:text-orange' 
                onClick={increment}
            >
                +
            </button>
        </div>  
     
    )
}