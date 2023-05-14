import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import iconCOD from '../../../public/assets/checkout/icon-cash-on-delivery.svg'
import { useState } from "react";
import Summary from "./Summary";
import { Link } from "react-router-dom";


const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone:yup.string().required().matches(new RegExp('[0-9]{7}'), 'Phone number is not valid'),
    address: yup.string().required(),
    zip: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    moneyNumber: yup.number().required().typeError('must be a valid format'),
    moneyPin: yup.number().required().typeError('must be a valid format'),
    paymentDetails: yup.string().required('Payment details is a required field'),
  }).required();


  type FormData = yup.InferType<typeof schema>;

export default function Form({isConfirmationModalOpen, setIsConfirmationModalOpen}) {

    const [isCODInfoVisible, setIsCODInfoVisible] =  useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
      });

    function onSubmit(data: FormData) {
      console.log(data)
      setIsConfirmationModalOpen(true)
    }

    function handleOnChange(e) {
      console.log(e)
      if(e.target.id === 'cashOnDelivery') {
          setIsCODInfoVisible(true)
      } else {
          setIsCODInfoVisible(false)
      }
    }

 
    return (
        <div className="mx-8 md:mx-12 lg:mx-32">

          {/* go back button link */}
          <div className="font-medium text-black opacity-50 py-5">
               <Link to=".." relative="path" >Go Back</Link> 
            </div>
            
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

            <p className="font-bold text-2xl tracking-wider uppercase text-black">checkout</p>

            <p className="font-bold text-sm tracking-wider uppercase text-orange">billing details</p>

            {/* name */}
            <label htmlFor="name" className="font-bold text-sm leading-4 tracking-tighter text-black">Name</label> 
            <input id="name" placeholder="Alexei Ward" {...register("name")} className="font-bold text-sm leading-5 tracking-tighter text-black opacity-40 py-2 pl-2 rounded-lg border border-solid border-gray "/>
            <p>{errors.name?.message}</p>

            {/* email */}
            <label htmlFor="email"> email</label> 
            <input id="email" placeholder="alexei@mail.com"  {...register("email")} />
            <p>{errors.email?.message}</p>

            {/* phone number */}
            <label htmlFor="phone"> phone</label> 
            <input id="phone" placeholder="+1 202-555-0136"  {...register("phone")} />
            <p>{errors.phone?.message}</p>
              
            <p>shipping info</p>

            {/* your address */}
            <label htmlFor="address"> address</label> 
            <input id="address" placeholder="1137 Williams Avenue" {...register("address")} />
            <p>{errors.address?.message}</p>

            {/* zip code */}
            <label htmlFor="zip"> zip</label> 
            <input id="zip" placeholder="10001" {...register("zip")} />
            <p>{errors.zip?.message}</p>
              
            {/* city */}
            <label htmlFor="city"> city</label> 
            <input id="city" placeholder="New York"  {...register("city")} />
            <p>{errors.city?.message}</p>

            {/* country */}
            <label htmlFor="country"> country</label> 
            <input id="country" placeholder="United States"  {...register("country")} />
            <p>{errors.country?.message}</p>

            <p>payment details</p>
            <div>
                {/* emoney */}
                <input {...register("paymentDetails")} type="radio" value="eMoney" id="eMoney" onChange={handleOnChange}/>
                <label htmlFor="eMoney"> e-Money
                </label> 
                {/* cod */}
                <input {...register("paymentDetails")} type="radio" value="ccashOnDelivery" id="cashOnDelivery" onChange={handleOnChange}/>
                <label htmlFor="cashOnDelivery"> cash on delivery</label> 
            </div>
            <p>{errors.paymentDetails?.message}</p>

            {/* payment details info */}
            {isCODInfoVisible && <div className="flex">
                <img src={iconCOD} alt="" />
                <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>}

            {/* money number */}
            <label htmlFor="moneyNumber"> moneyNumber</label> 
            <input id="moneyNumber" placeholder="238521993"  {...register("moneyNumber")} />
            <p>{errors.moneyNumber?.message}</p>

            {/* money pin */}
            <label htmlFor="moneyPin"> moneyNumber</label> 
            <input id="moneyPin" placeholder="6891"  {...register("moneyPin")} />
            <p>{errors.moneyPin?.message}</p>

            <Summary/>

            <button> confirm and pay</button>
        </form>
      </div>
    )
}