import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Menu from '../shared/Menu'

export default function MenuModal({isMenuModalVisible, setIsMenuModalVisible}) {
 

    function closeModal() {

        setIsMenuModalVisible(false)
      }
    
      function openModal() {
        setIsMenuModalVisible(true)
      }

    return (
        <div className=''>
        {/* <div className="fixed inset-0 flex items-center justify-center">
         
        </div> */}
  
        <Transition appear show={isMenuModalVisible} as={Fragment}>
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
  
            <div className="fixed inset-0 overflow-y-auto ">
              <div className="flex min-h-fit text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="transform w-full  bg-white p-6 text-left align-middle shadow-xl transition-all mt-24 ">
                   
                   <Menu isMenuModalVisible={isMenuModalVisible}
                   setIsMenuModalVisible={setIsMenuModalVisible}/>
                  
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    )
}