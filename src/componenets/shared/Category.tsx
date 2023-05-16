import { Link, useNavigate } from "react-router-dom";



interface CategoryProps {
    image: string,
    link: string
}


export default function Category({image, link, isMenuModalVisible, setIsMenuModalVisible}: CategoryProps) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/${link}`)
        setIsMenuModalVisible(false)
        window.scrollTo(0, 0)
    }

    return (
        <div className={`flex flex-col justify-end items-center uppercase gap-5 bg-gray rounded-lg my-5 h-64 relative pb-8 mx-8 mb-32 
        md:mx-0 md:h-44 md:mb-28 lg:h-56 
    ${isMenuModalVisible ? 'h-36 mt-20 mb-0  md:mb-0 md:mt-20' : ''}`}>

            <img src={image} alt="" className={`absolute bottom-16 ${isMenuModalVisible ? 'w-1/2 md:w-full' : ''}`}/>

            <p className="font-bold leading-5 tracking-wider text-black">{link}</p>
            
            <button onClick={handleClick} className='flex justify-center items-center gap-3'>
                <p className="font-bold text-sm leading-5 tracking-wide text-black opacity-50 hover:text-orange">Shop</p>
                <div>
                    <img src={'../../../public/assets/shared/desktop/icon-arrow-right.svg'} alt='' />  
                </div>
            </button> 
                  
        </div>
    )
}