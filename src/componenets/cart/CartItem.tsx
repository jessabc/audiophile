import { IProduct } from "../../interfaces"
import UpdateCart from "./Counter"
import {useContext, useState} from 'react'
import {ProductContext} from '../../ProductContext'
import Counter from "./Counter"

interface CartItemProps {
    item: IProduct,
}

export default function CartItem({item}: CartItemProps) {

    const {state, dispatch} = useContext(ProductContext)


    const [count, setCount] = useState( getDefaultValue())


    function getDefaultValue() {
      
        const alreadyInCart =  state.cart.some(product => product.id === item?.id) 
        console.log(alreadyInCart)
     
       if(alreadyInCart) {
       console.log('grrr')
        const x = state.cart.find(product => product.id === item.id)?.quantity
        console.log(x)
        return x
       } else {
        console.log('fffff')
    //   return state.data.find(product => product.id === thisProduct.id)?.quantity
    return 0 
       } 
        }
    

    return (
        <div className="grid grid-cols-5 gap-3 items-center mb-4">

            <div className=" ">
                <img src={`../${item?.image?.mobile}`} alt="" className="rounded-lg "/>
            </div>
            <div className="col-span-2">
               <p className="font-bold leading-6 text-black">{item.name}</p>
                <p className="font-bold text-sm leading-6 text-black opacity-50">$ {(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(item.price))}</p> 
            </div>

            {!state.cartModal && <p className="ml-auto">x
            {item.quantity}</p>}
        
        <div className="col-span-2">
           {state.cartModal && <Counter thisProduct={item}  count={count} />} 
        </div>
            
            
        </div>
    )
}