import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { useNavigate } from "react-router-dom";
import { useGetTotal } from '../../hooks/useGetTotal'
import CartModalCartItem from '../cart/CartModalCartItem'


export default function CartModal() {

  const {state, dispatch} = useContext(ProductContext)

  const getTotal = useGetTotal()

  const navigate = useNavigate();

  const cartModalCartItemElements = state.cart.map((item, index) => <CartModalCartItem key={index} item={item}/>)

  function closeModal() {
    dispatch({type:'CART_MODAL', payload: false})
  }

  function removeAll() {
    dispatch({type:'REMOVE_ALL_ITEMS'})
    dispatch({type:'CART_MODAL', payload: false})
  }

  function checkout() {
    if(state.cart.length > 0) {
      closeModal()
      navigate("checkout");
    }
  }

 
  return (
    <>

      <Transition appear show={state.cartModal} as={Fragment}>

        <Dialog as="div" className="relative z-10 " onClose={closeModal}>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center  md:justify-end md:items-start md:mt-28 md:mr-5 lg:mr-28">

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >

                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:w-1/2">

                <div className='flex flex-col gap-3 '>

                 {/* cart num and remove all line */}
                 <div className="flex justify-between">
                    <p className='font-bold tracking-wider uppercase text-black'>Cart ({state.cart.length})</p>
                    <button
                      type="button"
                      className="font-medium leading-6 underline text-black opacity-50"
                      onClick={removeAll}
                    >
                     Removal All
                    </button>
                  </div>

                  {cartModalCartItemElements}

                  <div className='flex justify-between'>
                    <p className='font-medium leading-6 text-black opacity-50'>Total</p>
                    <p className='font-bold text-lg leading-6 uppercase, text-black'>${(new Intl.NumberFormat().format(getTotal))}</p>
                  </div>

                  <div className=''>
                    <button className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-full h-12 hover:bg-lightOrange'
                      onClick={checkout}
                    >
                      checkout
                    </button>
                  </div>

                </div>
                
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
