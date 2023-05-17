import { FadeInBottomSection } from '../../Animation/FadeInBottomSection';
import { useNavigate } from "react-router-dom";
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { IProduct } from '../../interfaces';

export default function featuredProduct2() {

    const {state, dispatch} = useContext(ProductContext)

    const featuredProduct2 = state.data?.find(item => item.name === "ZX7 Speaker")

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
                <div className={` f relative mx-8   md:mx-12 lg:mx-32 z-10`}  >
                    <img src={'../../../public/assets/home/mobile/image-speaker-zx7.jpg '} alt="" className='rounded-lg md:hidden lg:hidden'/>
                    <img src={'../../../public/assets/home/tablet/image-speaker-zx7.jpg '} alt="" className='rounded-lg hidden md:block lg:hidden'/>
                    <img src={'../../../public/assets/home/desktop/image-speaker-zx7.jpg '} alt="" className='rounded-lg hidden lg:block'/>

                    <div className="absolute top-20 left-5 flex flex-col gap-10 md:left-10">
                        <p className='font-bold text-2xl leading-9 tracking-wider uppercase text-black md:text-4xl '>ZX7 SPEAKER</p>
                        <button 
                            className='font-bold text-sm leading-5 tracking-wide uppercase text-black border  w-40 h-12 cursor-pointer hover:bg-black hover:text-white  lg:bg-black lg:text-white hover:lg:bg-white hover:lg:text-black' 
                            onClick={() => routeChange(featuredProduct2)}>
                            see product
                        </button>
                    </div>
                </div>
            </FadeInBottomSection>
        </>
    )
} 