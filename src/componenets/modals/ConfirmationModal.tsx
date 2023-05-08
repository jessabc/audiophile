import { Dialog, Transition } from '@headlessui/react'
import {useContext, Fragment } from 'react'
import {ProductContext} from '../../ProductContext'
import { useNavigate } from "react-router-dom";
import { useGetTotal } from '../../hooks/useGetTotal'
import iconOrderConfirmation from '../../../public/assets/checkout/icon-order-confirmation.svg'
import CartItem from '../cart/CartItem'

interface ConfirmationModalProps {
  isConfirmationModalOpen: boolean,
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function ConfirmationModal({isConfirmationModalOpen,setIsConfirmationModalOpen}: ConfirmationModalProps) {
 

  const {state, dispatch} = useContext(ProductContext)

  const getTotal = useGetTotal()

  const navigate = useNavigate();

  const firstCartItem = <CartItem item={state.cart[0]}/>

  const numItemsInCart = state.cart.length

  const numItems = state.cart.length - 1

  function closeModal() {
    setIsConfirmationModalOpen(false)
  }

  function openModal() {
    setIsConfirmationModalOpen(true)
  }

  function handleClick() {
      navigate("/")
  }
 

  return (
    <>
    
      <Transition appear show={isConfirmationModalOpen} as={Fragment}>

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
            <div className="flex min-h-full items-center justify-center p-4 text-center">

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >

                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              
                  {/* MODAL CONTENT */}
                  <div>
                    <img src={iconOrderConfirmation} alt="" />
                    <p>THANK YOU
                    FOR YOUR ORDER</p>
                    <p>You will receive an email confirmation shortly.</p>

                    <div className="flex">
                        <div>
                          {firstCartItem}
                          {numItemsInCart > 1 && <p>and {numItems} other item(s)</p>}  
                        </div>
                        
                        <div className='flex bg-blue-500'>
                            <p>grand total</p>
                            <p>${getTotal}</p>
                        </div>
                    </div >

                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500focus-visible:ring-offset-2"
                     onClick={handleClick}
                    >
                     back to home
                    </button>
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
