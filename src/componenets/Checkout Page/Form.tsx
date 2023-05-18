import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useState } from "react"
import Summary from "./Summary"
import { Link } from "react-router-dom"


const schema = yup.object({
    name: yup.string().required('Name is a required field'),
    email: yup.string().email().required('Email is a required field'),
    phone:yup.string().required('Phone is a required field').matches(new RegExp('[0-9]{7}'), 'Phone number is not valid'),
    address: yup.string().required('Address is a required field'),
    zip: yup.string().required('Zip is a required field'),
    city: yup.string().required('City is a required field'),
    country: yup.string().required('Country is a required field'),
    moneyNumber: yup.number().required('Required field').typeError('Must be a valid format'),
    moneyPin: yup.number().required('Required field').typeError('Must be a valid format'),
    paymentDetails: yup.string().required('Payment details is a required field'),
  }).required();


type FormData = yup.InferType<typeof schema>


interface FormProps {
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function Form({setIsConfirmationModalOpen}: FormProps) {

  const [isCODInfoVisible, setIsCODInfoVisible] =  useState(false)

  const [isEMoneyRadioSelected, setIsEMoneyRadioSelected] =  useState(false)

  const [isCashRadioSelected, setIsCashRadioSelected] =  useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
      resolver: yupResolver(schema)
    })
    
  function onSubmit() {
    setIsConfirmationModalOpen(true)
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.id === 'cashOnDelivery') {
        setIsCODInfoVisible(true)
        setIsCashRadioSelected(true)
        setIsEMoneyRadioSelected(false)
    } else {
        setIsCODInfoVisible(false)
        setIsCashRadioSelected(false)
        setIsEMoneyRadioSelected(true)
    }
  }

 
  return (
      <div className="mx-8 md:mx-12 lg:mx-32">
      
        {/* go back button link */}
        <div className="font-medium text-black opacity-50 py-5">
            <Link to=".." relative="path" >Go Back</Link> 
        </div>
          
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row lg:gap-5">

          <div className="lg:w-2/3 lg:bg-white lg:p-5">

            <p className="font-bold text-2xl tracking-wider uppercase text-black mb-5">checkout</p>
            <p className="font-bold text-sm tracking-wider uppercase text-orange my-3">billing details</p>

            <div className="md:grid md:grid-cols-2 md:gap-5">
              {/* name */}
              <div className="flex flex-col gap-2 mb-5">
                <div className={`flex justify-between items-center`}>
                  <label 
                    htmlFor="name" 
                    className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}>
                    Name
                  </label> 
                  <p className={`font-medium text-sm leading-4 tracking-tight text-error`}>{errors.name?.message}</p>
                </div>
                <input 
                  id="name" 
                  placeholder="Alexei Ward" 
                  {...register("name")} 
                  className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`}
                />
              </div>

              {/* email */}
              <div className="flex flex-col gap-2 mb-5">
                <div className={`flex justify-between items-center`}>
                  <label 
                    htmlFor="email"  
                    className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}>
                    Email
                  </label> 
                  <p className={`font-medium text-sm leading-4 tracking-tight text-error`}>{errors.email?.message}</p>
                </div>
                  <input 
                    id="email" 
                    placeholder="alexei@mail.com"  
                    {...register("email")} 
                    className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`} 
                  />
              </div>
            </div>

            {/* phone number */}
            <div className="flex flex-col gap-2 mb-5">
              <div className={`flex justify-between items-center`}>
                <label 
                  htmlFor="phone" 
                  className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}>
                  Phone
                </label> 
                <p className={`font-medium text-sm leading-4 tracking-tight text-error`}>{errors.phone?.message}</p>
              </div>
              <input id="phone" placeholder="+1 202-555-0136"  {...register("phone")} className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`}/>
            </div>
              
            {/* shipping info */}  
            <p className="font-bold text-sm tracking-wider uppercase text-orange my-3">shipping info</p>

            {/* your address */}
            <div className="flex flex-col gap-2 mb-5">
              <div className={`flex justify-between items-center`}>
                <label 
                  htmlFor="address" 
                  className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}>
                  Address
                </label> 
                <p className={`font-medium text-sm leading-4 tracking-tight text-error`}>{errors.address?.message}</p>
              </div>
              <input 
                id="address" 
                placeholder="1137 Williams Avenue" 
                {...register("address")} 
                className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`}/>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-5">
              {/* zip code */}
              <div className="flex flex-col gap-2 mb-5">
                <div className={`flex justify-between items-center`}>
                  <label 
                    htmlFor="zip" 
                    className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}>
                    Zip
                  </label>
                  <p className={`font-medium text-sm leading-4 tracking-tight text-error`}>{errors.zip?.message}</p> 
                </div>
                <input id="zip" placeholder="10001" {...register("zip")} className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`}/>
              </div>
              
              {/* city */}
              <div className="flex flex-col gap-2 mb-5">
                <div className={`flex justify-between items-center`}>
                  <label 
                  htmlFor="city" 
                  className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}>
                    City
                  </label> 
                  <p className={`font-medium text-sm leading-4 tracking-tight text-error`}>{errors.city?.message}</p>
                </div>
                <input 
                  id="city" 
                  placeholder="New York"  
                  {...register("city")} 
                  className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`}/>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-5">
              {/* country */}
              <div className={`flex justify-between items-center`}>
                <label 
                  htmlFor="country" 
                  className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}>
                  Country
                  </label> 
                <p className={`font-medium text-sm leading-4 tracking-tight text-error`}>{errors.country?.message}</p>
              </div>
              <input 
                id="country" 
                placeholder="United States"  
                {...register("country")} 
                className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`}/>
            </div>

            <p className="font-bold text-sm tracking-wider uppercase text-orange my-3">payment details</p>

            <div className="md:grid md:grid-cols-2 md:gap-5">
              <div>
                <p className="font-bold text-sm leading-4 tracking-tight text-black mb-3 ">Payment method</p>
                <p className={`font-medium text-sm leading-4 tracking-tight text-error mb-1`}>{errors.paymentDetails?.message}</p>
              </div>

              <div className="flex flex-col gap-3 mb-5">
                <div className={`flex   items-center rounded-lg border border-solid border-black border-opacity-30  py-2 pl-4  w-full ${isEMoneyRadioSelected ?'border-orange border-2 border-opacity-100': ' '}`}>
                  {/* emoney */}
                  <input 
                    {...register("paymentDetails")} 
                    type="radio" 
                    value="eMoney" 
                    id="eMoney" 
                    onChange={handleOnChange} 
                    className={`accent-orange  `}/>
                  <label 
                    htmlFor="eMoney" 
                    className={`font-bold text-sm leading-4 tracking-tighter text-black ml-1`}> e-Money
                  </label> 
                </div>

                <div className={`flex items-center rounded-lg border border-solid border-black border-opacity-30  py-2 pl-4  w-full ${isCashRadioSelected ? 'border-orange border-2 border-opacity-100 ': ''}`}>
                  {/* cod */}
                  <input 
                    {...register("paymentDetails")} 
                    type="radio" 
                    value="cashOnDelivery" 
                    id="cashOnDelivery" 
                    onChange={handleOnChange} 
                    className={`accent-orange  `}/>
                  <label 
                    htmlFor="cashOnDelivery" 
                    className={`font-bold text-sm leading-4 tracking-tighter text-black ml-1`}> Cash on Delivery</label>
                </div>
              </div>
            </div>

            {/* payment details info */}
            {isCODInfoVisible && 
            <div className="flex my-5">
              <div className="w-1/3 flex justify-center items-center">
                <img src={'./src/assets/checkout/icon-cash-on-delivery.svg'} alt="" />
              </div>
              
              <p className="font-medium leading-6 text-black opacity-50 w-2/3">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>}

            <div className="md:grid md:grid-cols-2 md:gap-5">
              {/* money number */}
              <div className="flex flex-col gap-2 mb-5">
                <div className={`flex justify-between items-center`}>
                  <label 
                    htmlFor="moneyNumber" 
                    className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}> moneyNumber</label> 
                  <p className={`font-medium text-sm leading-4 tracking-tight text-error text-right`}>{errors.moneyNumber?.message}</p>
                </div>
                <input 
                  id="moneyNumber" 
                  placeholder="238521993"  
                  {...register("moneyNumber")} 
                  className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`}/>
              </div>

              {/* money pin */}
              <div className="flex flex-col gap-2 mb-5">
                <div className={`flex justify-between items-center`}>
                  <label 
                    htmlFor="moneyPin"  
                    className={`font-bold text-sm leading-4 tracking-tighter text-black ${errors.name ? 'text-error': ''}`}> moneyNumber</label> 
                  <p className={`font-medium text-sm leading-4 tracking-tight text-error text-right`}>{errors.moneyPin?.message}</p>
                </div>
                <input 
                  id="moneyPin" 
                  placeholder="6891"  
                  {...register("moneyPin")} 
                  className={` font-bold text-sm leading-5 tracking-tight   py-2 pl-4 rounded-lg border border-solid border-black border-opacity-30  focus:outline-orange  caret-orange w-full ${errors.name ? 'focus:outline-error ': ''}`}/>
              </div>
            </div>  
          </div>

          <div className="lg:w-1/3 ">
            <div className="lg:bg-white lg:p-5">
              <div className="mt-5 lg:mt-0">
                <Summary/>
              </div>
              <button className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-full h-12 hover:bg-lightOrange my-5'> continue & pay</button>
            </div>
          </div>     
          
        </form>
          
      </div>
  )
}