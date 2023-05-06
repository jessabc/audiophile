import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import CartItems from '../cart/CartItems'
import { useNavigate } from "react-router-dom";
import { useGetTotal } from '../../hooks/useGetTotal'


export default function CartModal() {

  const {state, dispatch, isOpen, setIsOpen} = useContext(ProductContext)

  const getTotal = useGetTotal()

  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function removeAll() {
    dispatch({type:'REMOVE_ALL_ITEMS'})
    setIsOpen(false)
  }

  function checkout() {
    closeModal()
    navigate("checkout");
  }

 
  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>

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


                  {/* cart num and remove all line */}
                  <div className="flex justify-between">
                    <p>Cart {state.cart.length}</p>
                    <button
                      type="button"
                      className=""
                      onClick={removeAll}
                    >
                     removal all
                    </button>
                  </div>

                  <CartItems />

                  <div className='flex'>
                    <p>total</p>
                    <p>${getTotal}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={checkout}
                    >
                     checkout
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
