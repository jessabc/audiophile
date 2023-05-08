import { useNavigate } from 'react-router-dom'

import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'


export default function HeroProduct() {

    const {state, dispatch} = useContext(ProductContext)

    const heroItem = state.data?.find(item => item.name === "XX99 Mark II Headphones")
    
    const navigate = useNavigate()

    const routeChange = () => { 
        let path = `/${heroItem!.category}/${heroItem!.slug}`; 
        navigate(path, {state: heroItem})
    }

    return (
         <div className="relative mb-36">

            <div>
                <img src={'/public/assets/home/mobile/image-header.jpg'} alt="" className="w-full"/>
            </div>

            <div className="text-white absolute top-48 px-8 flex flex-col items-center gap-4">
                <p className="text-sm leading-5 text-center tracking-widest uppercase text-white opacity-50">NEW PRODUCT</p>
                <p className='font-bold text-4xl leading-10 text-center tracking-wider uppercase'>{heroItem?.name}</p>
                <p className='font-semibold text-center text-white opacity-75 leading-loose my-3'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12' onClick={routeChange}>see product</button>
            </div>
          
        </div>
    )
}