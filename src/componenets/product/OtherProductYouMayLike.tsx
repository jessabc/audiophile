import { useNavigate } from "react-router-dom"
import { RecommendedProduct } from "../../interfaces"
import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'


interface OtherProductYouMayLikeProps {
    product: RecommendedProduct,
}

export default function OtherProductYouMayLike({product} : OtherProductYouMayLikeProps) {
    
    const {state, dispatch} = useContext(ProductContext)

    const {image, name, slug} = product
// console.log(slug)
    const navigate = useNavigate()

        const item = state.data.find(item => item.slug === slug)
// console.log(item)
    const routeChange = () => { 
       
        let path = `/${item?.category}/${slug}`; 
        navigate(path, {state: item})
        // navigate(path)
        window.scrollTo(0, 0)
    }

    return (
        <div className='flex flex-col gap-5 justify-center items-center mb-12'>

            <img src={`.${image.mobile}`} alt="" className="md:hidden lg:hidden rounded-lg"/>
            <img src={`.${image.tablet}`} alt="" className="hidden md:block lg:hidden rounded-lg"/>
            <img src={`.${image.desktop}`} alt="" className="hidden md:hidden lg:block rounded-lg"/>
            
            <p className='font-bold text-2xl text-center tracking-wide uppercase text-black'>{name}</p>
            <div>
            <button  className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12 hover:bg-lightOrange '  onClick={routeChange}>see product</button>  
            </div>
        </div>
    )
}