
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces";


export default function FeaturedProducts() {

    const {state, dispatch} = useContext(ProductContext)

    const featuredProduct1 = state.data?.find(item => item.name === "ZX9 Speaker")
    const featuredProduct2 = state.data?.find(item => item.name === "ZX7 Speaker")
    const featuredProduct3 = state.data?.find(item => item.name === "YX1 Wireless Earphones")


    const navigate = useNavigate()

    const routeChange = (featuredProduct: IProduct | undefined) => { 
        console.log(featuredProduct)
        let path = `/${featuredProduct?.category}/${featuredProduct?.slug}`; 
        navigate(path, {state: featuredProduct})
    }
 
    return  (
        <div className='flex flex-col gap-5 '>
        {/* featured product 1 */}
            <div className='flex flex-col justify-center items-center 
            bg-orange mx-8 rounded-lg gap-5 px-5 py-10 text-center'>
                <div className='w-1/2'>
                    <img src={'../../../public/assets/home/mobile/image-speaker-zx9.png'} alt="" />
                </div>
                   
                <p className='font-bold text-4xl leading-10 tracking-widest uppercase text-white'>ZX9
                SPEAKER</p>
                <p className='font-medium leading-7 text-white opacity-75'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-black w-40 h-12 cursor-pointer' onClick={() => routeChange(featuredProduct1)}>see product</button>

            </div>

 {/* featured product 2 */}
            <div className="relative mx-8 ">

                <img src={'../../../public/assets/home/mobile/image-speaker-zx7.jpg '} alt="" className='rounded-lg'/>
                <div className="absolute top-20 left-5 flex flex-col gap-10">
                    <p className='font-bold text-2xl leading-9 tracking-wider uppercase text-black'>ZX7 SPEAKER</p>
                    <button className='font-bold text-sm leading-5 tracking-wide uppercase text-black border  w-40 h-12 cursor-pointer' onClick={() => routeChange(featuredProduct2)}>see product</button>
                </div>
            </div>

 {/* featured product 3 */}
            <div>
                <div className='mx-8'>
                    <img src={'../../../public/assets/home/desktop/image-earphones-yx1.jpg'} alt="" className='rounded-lg'/>
                </div>
                <div className="bg-light">
                   <p>YX1 EARPHONES</p> 
                   <button onClick={() => routeChange(featuredProduct3)}>see product</button>
                </div>
                
            </div>
        </div>
    )
}