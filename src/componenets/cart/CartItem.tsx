import { IProduct } from "../../interfaces"
import UpdateCart from "./UpdateCart"
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'

interface CartItemProps {
    item: IProduct,
}

export default function CartItem({item}: CartItemProps) {

    const {state, dispatch} = useContext(ProductContext)

    return (
        <div className="flex">
            <div className="">
                <img src={`../${item.image.mobile}`} alt="" className="object-fit w-10"/>
            </div>
            <div>
               <p>{item.name}</p>
                <p>{item.price}</p> 
            </div>

            {!state.cartModal && <p className="ml-auto">x
            {item.quantity}</p>}
        
            {state.cartModal && <UpdateCart thisProduct={item} />}
            
        </div>
    )
}