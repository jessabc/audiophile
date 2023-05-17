import { Dialog, Transition } from '@headlessui/react'
import {useContext, Fragment, useState } from 'react'
import {ProductContext} from '../../ProductContext'
import { useNavigate } from "react-router-dom"
import { useGetTotal } from '../../hooks/useGetTotal'
import iconOrderConfirmation from '../../../public/assets/checkout/icon-order-confirmation.svg'
import SummaryCartItem from '../Checkout Page/SummaryCartItem'


interface ConfirmationModalProps {
  isConfirmationModalOpen: boolean,
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function ConfirmationModal({isConfirmationModalOpen,setIsConfirmationModalOpen}: ConfirmationModalProps) {
 

  const [showAllCartItems, setShowAllCartItems] = useState(false)
  
  const {state, dispatch} = useContext(ProductContext)

  const getTotal = useGetTotal()

  const navigate = useNavigate()

  const firstCartItem = <SummaryCartItem item={state.cart[0]}/>

  const numItemsInCart = state.cart.length

  const SummaryCartItemElements = state.cart.map((item, index) => <SummaryCartItem key={index} item={item}/>)
 
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
                  <div className='flex flex-col gap-3 justify-start items-start'>
                    <img src={iconOrderConfirmation} alt="" className='w-14'/>
                    <p className='font-bold text-2xl leading-7 track uppercase text-black'>THANK YOU <br/>
                    FOR YOUR ORDER</p>
                    <p className='font-medium leading-6 text-black opacity-50'>You will receive an email confirmation shortly.</p>

                    <div className="flex flex-col md:flex-row">
                        <div className='bg-gray p-4  pr-10 rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:w-3/5'>
                          <div className={`${showAllCartItems ? 'hidden' : 'block'}`}>
                             {firstCartItem}
                            {numItemsInCart > 1 && <button onClick={() => setShowAllCartItems(true)} className='font-bold text-xs leading-4 tracking-tight text-black opacity-50 pl-9'>and {numItems} other item(s)</button>}  
                          </div>
                          <div className={`${showAllCartItems ? 'block' : 'hidden'}`}>
                            {SummaryCartItemElements}
                            <button onClick={() => setShowAllCartItems(false)} className='font-bold text-xs  leading-4 tracking-tight text-black opacity-50 pl-9'>View less</button> 
                          </div>
                        </div>
                        
                        <div className={`flex flex-col rounded-bl-lg rounded-br-lg md:rounded-tr-lg md:rounded-bl-none gap-2 bg-black p-4 md:w-2/5 ${showAllCartItems ? 'md:justify-end ' : ' md:justify-center'}`}>
                            <p className='font-medium leading-6 text-white opacity-50 uppercase'>grand total</p>
                            <p className={`font-bold text-lg leading-6 uppercase text-white ${showAllCartItems ? 'md:pb-5 ' : ''}`}>${(new Intl.NumberFormat().format(getTotal))}</p>
                        </div>
                      </div >

                  </div>

                  <div className="mt-4">
                    <button
                      className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-full h-12 hover:bg-lightOrange'
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
