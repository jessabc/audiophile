import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import CartItems from '../cart/CartItems'
import { useNavigate } from "react-router-dom";
import { useGetTotal } from '../../hooks/useGetTotal'
import checkIcon from '../../../public/assets/checkout/icon-order-confirmation.svg'

export default function ItemAddedModal({isItemAddedModalVisible, setIsItemAddedModalVisible, name}) {

//   const {state, dispatch, isOpen, setIsOpen} = useContext(ProductContext)

//   const getTotal = useGetTotal()

//   const navigate = useNavigate();

  function closeModal() {
    setIsItemAddedModalVisible(false)
  }

  function openModal() {
    setIsItemAddedModalVisible(true)
  }

//   function removeAll() {
//     dispatch({type:'REMOVE_ALL_ITEMS'})
//     setIsOpen(false)
//   }

//   function checkout() {
//     closeModal()
//     navigate("checkout");
//   }

 
  return (
    <>

      <Transition appear show={isItemAddedModalVisible} as={Fragment} >

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
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center">

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


                <div className='flex md:justify-center md:items-center'>
                    <div className='w-10 mr-5'>
                       <img src={checkIcon} alt="" />
                    </div>
                   <div className='md:flex'>
                    <p className='font-semibold'>{name}  </p>
                    <p className='md:ml-2'> added to cart</p>
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
