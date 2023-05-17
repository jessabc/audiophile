import { useState } from 'react'
import Form from '../componenets/Checkout Page/Form'
import ConfirmationModal from '../componenets/modals/ConfirmationModal'

export default function Checkout() {

    let [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)
    
    return (
        <div className='fade-in lg:bg-gray lg:pb-10
        '>
            <Form 
                isConfirmationModalOpen={isConfirmationModalOpen} setIsConfirmationModalOpen={setIsConfirmationModalOpen}
            />

            {isConfirmationModalOpen && <ConfirmationModal                   isConfirmationModalOpen={isConfirmationModalOpen} setIsConfirmationModalOpen={setIsConfirmationModalOpen}
            />}
      </div>
    )
}
