import { IProduct } from "../../interfaces"


interface CartItemProps {
    item: IProduct,
}


export default function CartItem({item}: CartItemProps) {

    return (
        <>
            <div>
                <img src={`../${item?.image?.mobile}`} alt={item.name} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
                <p className="font-bold leading-6 text-black">{item.name}</p>
                <p className="font-bold text-sm leading-6 text-black opacity-50">$ {(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(item.price))}</p> 
            </div>
        </>
    )
}
