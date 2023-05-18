import { IProduct } from "../../interfaces"
import {useContext, useState} from 'react'
import {ProductContext} from '../../ProductContext'
import Counter from "./Counter"
import CartItem from "./CartItem"


interface CartItemProps {
    item: IProduct,
}

export default function CartModalCartItem({item}: CartItemProps) {

    const {state} = useContext(ProductContext)

    const [count, setCount] = useState(getDefaultValue())

    function getDefaultValue() {
        const alreadyInCart =  state.cart.some(product => product.id === item?.id) 
     
       if(alreadyInCart) {
            return state.cart.find(product => product.id === item.id)?.quantity
       } else {
            return 0 
       } 
    }
       

    return (
        <div className="grid grid-cols-5 gap-3 items-center mb-4">

            <CartItem item={item}/>
          
            <div className="col-span-2">
            <Counter thisProduct={item}  count={count} setCount={setCount}/>
            </div>
            
        </div>
    )
}