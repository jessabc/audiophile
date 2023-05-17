import { IProduct } from "../../interfaces";
import CartItem from "../cart/CartItem";


interface SummaryCartItemProps {
    item: IProduct
}

export default function SummaryCartItem({item}: SummaryCartItemProps) {

    return (
        <>
            <div className="grid grid-cols-5 gap-3 items-center mb-4">
                <CartItem item={item}/>
                <p className="col-start-5 text-right font-bold leading-6 text-black opacity-50">x
                {item.quantity}</p>
            </div>
        </>
    )
}