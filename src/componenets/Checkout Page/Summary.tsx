import { usecartItemElements } from '../../hooks/useCartItemElements'
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { useGetTotal } from '../../hooks/useGetTotal'
import SummaryCartItem from './SummaryCartItem'


export default function Summary() {

    const {state, dispatch} = useContext(ProductContext)

    const SummaryCartItemElements = state.cart.map((item, index) => <SummaryCartItem key={index} item={item}/>)

    const total = useGetTotal()

    const shipping = 50

    const vat = (.2 * total).toFixed(0)
    // (.2 * total).toFixed(0)
   

   

    const grandTotal = total + shipping

   
    return (
        <div>
            <p className='font-bold text-md leading-6 tracking-wider uppercase text-black mb-3'>summary</p>
            
            {SummaryCartItemElements}

           
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                   <div className='flex justify-between'>
                    <p className='font-medium leading-6 text-black opacity-50 uppercase'>total</p>
                    <p className='font-bold text-lg leading-6  uppercase text-black'>${(new Intl.NumberFormat().format(total))}</p>
                </div>

                <div className='flex justify-between'>
                    <p className='font-medium leading-6 text-black opacity-50 uppercase'>shipping</p>
                    <p className='font-bold text-lg leading-6  uppercase text-black'>${shipping}</p>
                </div>

                <div className='flex justify-between'>
                    <p className='font-medium leading-6 text-black opacity-50 uppercase'>vat(inlcluded)</p>
                    <p className='font-bold text-lg leading-6  uppercase text-black'>${(new Intl.NumberFormat().format(vat))}</p>
                </div> 
                </div>
                

                <div className='flex justify-between'>
                    <p className='font-medium leading-6 text-black opacity-50 uppercase'>grand total</p>
                    <p className='font-bold text-lg leading-6  uppercase text-orange'>${(new Intl.NumberFormat().format(grandTotal))}</p>
                </div> 
            </div>
            
        </div>
    )
}