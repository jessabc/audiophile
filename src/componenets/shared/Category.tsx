import { Link } from "react-router-dom";



interface CategoryProps {
    image: string,
    link: string
}


export default function Category({image, link}: CategoryProps) {

    return (
        <div className='flex flex-col justify-end items-center uppercase gap-5 bg-gray rounded-lg my-5 h-64 relative pb-8 mx-8 mb-32 
        md:mx-0 md:h-44 md:mb-28 lg:h-56 
        '>

            <img src={image} alt="" className="absolute bottom-16 " />

            <p className="font-bold leading-5 tracking-wider text-black">{link}</p>
            
            <Link to={`/${link}`} className='flex justify-center items-center gap-3'>
                <p className="font-bold text-sm leading-5 tracking-wide text-black opacity-50">Shop</p>
                <div>
                    <img src={'../../../public/assets/shared/desktop/icon-arrow-right.svg'} alt='' />  
                </div>
            </Link> 
                  
        </div>
    )
}