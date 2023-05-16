import { IProduct } from "../../interfaces";
import { useNavigate } from "react-router-dom";


interface ProductProps {
    item: IProduct,
    index: number
}


export default function Product({item, index}:ProductProps) {

    const {category, name, description, image, slug} = item
   
    const navigate = useNavigate()

    const oddIndex = index % 2 === 1

    const routeChange = () => { 
        let path = `/${category}/${slug}`; 
        navigate(path, {state: item})
      
            window.scrollTo(0, 0)
        
    }

    return (
        <div className="mb-28 flex flex-col gap-5 justify-center items-center lg:flex-row lg:gap-10">
            <div className={`lg:w-1/2 ${oddIndex ? 'lg:order-1' : null}`}>
               <img src={image.mobile} alt="" className="md:hidden lg:hidden rounded-lg"/>
            <img src={image.tablet} alt="" className="hidden md:block lg:hidden rounded-lg" />
            <img src={image.desktop} alt="" className="hidden md:hidden lg:block rounded-lg"/>  
            </div>
           
            <div className=" flex flex-col gap-5 justify-center items-center lg:w-1/2 lg:items-start">
               {item.new && <p className='text-sm text-center tracking-widest uppercase text-orange '>new product</p>}
            <p className="font-bold text-3xl text-center tracking-wider
             uppercase text-black md:text-4xl md:px-40 lg:text-left lg:p-0">{name}</p>
            <p className='  font-semibold leading-6 text-center text-black  opacity-50 md:px-20 lg:text-left lg:p-0'>{description}</p>
            <button  className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12 hover:bg-lightOrange '  onClick={routeChange}>see product</button>  
            </div>
           
        </div>
    )
}