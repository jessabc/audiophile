import { FadeInBottomSection } from '../../Animation/FadeInBottomSection';
import { useNavigate } from "react-router-dom";
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'

export default function featuredProduct3() {

    const {state, dispatch} = useContext(ProductContext)
    const featuredProduct3 = state.data?.find(item => item.name === "YX1 Wireless Earphones")

  const navigate = useNavigate()

    const routeChange = (featuredProduct: IProduct | undefined) => { 
        console.log(featuredProduct)
        let path = `/${featuredProduct?.category}/${featuredProduct?.slug}`; 
        navigate(path, {state: featuredProduct})
        window.scrollTo(0, 0)
    }

    return (
        <>
          <FadeInBottomSection>
              <div className={`  mx-8  md:grid md:grid-cols-2 md:gap-2 md:mx-12 lg:mx-32`}  >

<div className='md:w-fit '>
   <img src={'../../../public/assets/home/mobile/image-earphones-yx1.jpg'} alt="" className='rounded-lg md:hidden lg:hidden'/>
    <img src={'../../../public/assets/home/tablet/image-earphones-yx1.jpg'} alt="" className='rounded-lg hidden md:block lg:hidden'/>
    <img src={'../../../public/assets/home/desktop/image-earphones-yx1.jpg'} alt="" className='rounded-lg hidden lg:block '/> 
</div>

<div className="bg-gray rounded-lg mt-5 mb-20 h-48 flex flex-col gap-5 justify-center items-start pl-5 
md:m-0 md:p-0 md:h-full md:w-full md:px-5
">
   <p className='font-bold text-2xl leading-9 tracking-wider uppercase text-black md:text-3xl '>YX1 EARPHONES</p> 
   <button className='font-bold text-sm leading-5 tracking-wide uppercase text-black border  w-40 h-12 cursor-pointer hover:bg-black hover:text-white  lg:bg-black lg:text-white hover:lg:bg-white hover:lg:text-black' onClick={() => routeChange(featuredProduct3)}>see product</button>
</div>
</div>
</FadeInBottomSection>

        </>
    )
} 