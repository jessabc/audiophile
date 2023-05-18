import { useNavigate } from 'react-router-dom'
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import heroMob from '../../assets/home/mobile/image-header.jpg'
import heroTablet from '../../assets/home/tablet/image-header.jpg'
import heroDesktop from '../../assets/home/desktop/image-hero.jpg'


export default function HeroProduct() {

    const {state, dispatch} = useContext(ProductContext)

    const heroItem = state.data?.find(item => item.name === "XX99 Mark II Headphones")
    
    const navigate = useNavigate()

    const routeChange = () => { 
        let path = `/${heroItem!.category}/${heroItem!.slug}`; 
        navigate(path, {state: heroItem})
         window.scrollTo(0, 0)
    }

    return (
         <div className=" fade-in relative mb-64 md:mb-40 lg:mb-64">

            <div>
                {/* small screen / mobile */}
                <img src={heroMob} 
                alt="headphones" className="w-full md:hidden lg:hidden"/>
                {/* med screen / tablet */}
                <img src={heroTablet}  
                alt="headphones" className="w-full hidden md:block lg:hidden"/>
                {/* lg screen / desktop */}
                <img src={heroDesktop}  
                alt="headphones" className="w-full hidden lg:block"/>
            </div>

            <div className="text-white absolute top-48 px-8  flex flex-col items-center gap-4 md:px-32 md:gap-6 lg:items-start lg:w-1/2 lg:top-1/4">
                <p className="text-sm leading-5 text-center tracking-widest uppercase text-white opacity-50">NEW PRODUCT</p>
                <p className='font-bold text-4xl leading-10 text-center tracking-wider uppercase md:text-6xl lg:text-5xl  lg:text-left'>{heroItem?.name}</p>
                <p className='font-semibold text-center text-white opacity-75 leading-loose my-3 lg:text-left'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button 
                    className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12 hover:bg-lightOrange' 
                    onClick={routeChange}>
                    see product
                </button>
            </div>
          
        </div>
    )
}