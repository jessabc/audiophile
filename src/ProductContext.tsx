import {  ReactNode, createContext, useEffect, useReducer } from "react"
import { IProduct } from "./interfaces"


type AppState = typeof initialState

type Action = {type: 'SET_PRODUCT_DATA', payload: IProduct[] } 
| {type: 'ADD_TO_CART', payload: IProduct } 
| {type: 'UPDATE_ITEM_IN_CART', payload: IProduct } 
|{type: 'REMOVE_ITEM_IN_CART', payload: IProduct } 
| {type: 'REMOVE_ALL_ITEMS'}
| {type: 'CART_STORAGE', payload: IProduct[] }
| {type: 'CART_MODAL', payload: boolean }

interface ProductContextProviderProps {
    children: ReactNode
}

const initialState = {
    // https://stackoverflow.com/questions/68839420/typescript-react-usereducer-with-array-of-objects-in-interface
    data: [] as IProduct[],
    cart: [] as IProduct[], 
    cartModal: false
}

function reducer(state: AppState, action: Action) {
    switch(action.type) {
        case 'SET_PRODUCT_DATA': {
            return {...state, data: action.payload}
        }
        case 'ADD_TO_CART': {
            console.log('added')
            console.log(state.cart)
            return   { ...state, cart: [...state.cart, action.payload]}
        }
        case 'UPDATE_ITEM_IN_CART': {
            
           const thisItem =  state.cart.find((product: IProduct) => product.id === action.payload.id)
                   
            const updatedArr =  state.cart.map((product: IProduct) => product === thisItem ? {...product, quantity: action.payload.quantity} : product)

            return   { ...state, cart: [...updatedArr]}
        }
        case 'REMOVE_ITEM_IN_CART': {
            const thisItem =  state.cart.find((product: IProduct) => product.id === action.payload.id)

            const updatedArr =  state.cart.filter((product: IProduct) => product != thisItem)
            
            return   { ...state, cart: [...updatedArr]}

        }
        case 'REMOVE_ALL_ITEMS': {
            return   { ...state, cart: []}
        }
        case 'CART_STORAGE': {
            return   { ...state, cart: action.payload}
        }
        case 'CART_MODAL': {
            return   { ...state, cartModal: action.payload}
        }
        default:
            return state
    }
}


export const ProductContext = createContext<{
    state: AppState,
    dispatch: React.Dispatch<Action>
}>({state: initialState, dispatch:() => {}})

 
export function ProductContextProvider({children}: ProductContextProviderProps) {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        try {
            // https://stackoverflow.com/questions/67700374/use-localstorage-getitem-with-typescript
             const cartStorage = localStorage.getItem('cartStorage')

             if (typeof cartStorage === 'string') {

                const cartStorageParse = JSON.parse(cartStorage)

                if (cartStorageParse?.length > 0) {
                dispatch({type: 'CART_STORAGE', payload: cartStorageParse });
                }
            }
        } catch (error) {
            alert(error)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartStorage', JSON.stringify(state.cart));
    }, [state.cart]);


    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}