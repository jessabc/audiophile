import {useContext} from 'react'
import {ProductContext} from '../ProductContext'


export function useGetTotal() {

    const {state, dispatch} = useContext(ProductContext)

    function getTotal() {
        let total =  state.cart.reduce((acc, curr) => {
            return acc + (curr.quantity! * curr.price)
        }, 0)
        
       return total
    }

    return getTotal()
}


