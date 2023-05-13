import {useContext} from 'react'
import {ProductContext} from '../ProductContext'

export function useGetTotal() {

    const {state, dispatch} = useContext(ProductContext)

    function getTotal() {
        const total =  state.cart.reduce((acc, curr) => {
            return acc + (curr.quantity! * curr.price)
        }, 0)
        
        return (new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(total))
    }

    return getTotal()

}


