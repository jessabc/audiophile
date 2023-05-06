import { usecartItemElements } from '../../hooks/useCartItemElements'


export default function CartItems() {

    const cartItemElements = usecartItemElements()

    return (
        <div>
            {cartItemElements}
        </div>
    )
}