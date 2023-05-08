import { usecartItemElements } from '../../hooks/useCartItemElements'
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { useGetTotal } from '../../hooks/useGetTotal'

export default function Summary() {

    // const {state, dispatch} = useContext(ProductContext)

    const cartItemElements = usecartItemElements()

    const getTotal = useGetTotal()

    const total = getTotal
   
    const shipping = 50

    const vat =  (.2 * total).toFixed(2)

    const grandTotal = total + shipping

   
    return (
        <div>
            summary
            {cartItemElements}

            <div>
                <div className='flex'>
                    <p>total</p>
                    <p>${getTotal}</p>
                </div>

                <div className='flex'>
                    <p>shipping</p>
                    <p>${shipping}</p>
                </div>

                <div className='flex'>
                    <p>vat(inlcluded)</p>
                    <p>${vat}</p>
                </div>

                <div className='flex'>
                    <p>grand total</p>
                    <p>${grandTotal}</p>
                </div> 
            </div>
            
        </div>
    )
}