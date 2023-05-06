import {useContext} from 'react'
import {ProductContext} from '../ProductContext'

export function useGetTotal() {

    const {state, dispatch, isOpen, setIsOpen} = useContext(ProductContext)

    function getTotal() {
        return state.cart.reduce((acc, curr) => {
            return acc + (curr.quantity * curr.price)
        }, 0)
    }

    return getTotal()

}


