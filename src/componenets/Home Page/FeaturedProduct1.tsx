import { FadeInBottomSection } from '../../animation/FadeInBottomSection'
import { useNavigate } from "react-router-dom"
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { IProduct } from '../../interfaces'


export default function FeaturedProduct1() {

    const {state} = useContext(ProductContext)

    const featuredProduct1 = state.data?.find(item => item.name === "ZX9 Speaker")

    const navigate = useNavigate()

    const routeChange = (featuredProduct: IProduct | undefined) => { 
        let path = `/${featuredProduct?.category}/${featuredProduct?.slug}`; 
        navigate(path, {state: featuredProduct})
        window.scrollTo(0, 0)
    }

    return (
        <>
          <FadeInBottomSection>
                <div className={`flex flex-col justify-center items-center bg-orange mx-8 rounded-lg gap-5 px-5 py-14 text-center md:mx-12 md:gap-10 md:py-10 lg:mx-32 lg:grid lg:grid-cols-2 lg:p-0 lg:gap-0 relative lg:pt-10`} >
                    <div className='watermark '>
                        <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg"  className=' '><g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg> 
                    </div>

                    <div className='w-1/2 md:w-1/3 lg:w-3/4 lg:self-end lg:justify-self-center z-10'>
                        <img src={'assets/home/tablet/image-speaker-zx9.png'} alt={featuredProduct1?.name} className='w-full md:hidden lg:hidden '/>
                        <img src={'assets/home/tablet/image-speaker-zx9.png'} alt={featuredProduct1?.name}  className='w-full hidden md:block lg:hidden '/>
                        <img src={'assets/home/desktop/image-speaker-zx9.png'} alt={featuredProduct1?.name}  className='w-full hidden lg:block lg:object-scale-down lg:h-72'/>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-5 px-5 text-center md:gap-10  lg:items-start lg:text-left lg:gap-5 lg:p-10 z-10'>
                        <p className='font-bold text-4xl leading-10 tracking-widest uppercase text-white md:text-6xl  md:px-40 lg:text-5xl lg:p-0'>ZX9 SPEAKER</p>
                        <p className='font-medium leading-7 text-white opacity-75 md:px-40
                    lg:p-0'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <button 
                            className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-black w-40 h-12 cursor-pointer hover:bg-white hover:text-black' 
                            onClick={() => routeChange(featuredProduct1)}>
                            see product
                        </button>
                    </div>
                
                </div>
            </FadeInBottomSection>
        </>
    )
} 