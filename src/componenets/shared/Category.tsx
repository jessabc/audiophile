import { useNavigate } from "react-router-dom"
import iconArrow from '../../assets/shared/desktop/icon-arrow-right.svg'


interface CategoryProps {
    image: string,
    link: string,
    isMenuModalVisible?: boolean,
    setIsMenuModalVisible: React.Dispatch<React.SetStateAction<boolean>> | any
}


export default function Category({image, link, isMenuModalVisible, setIsMenuModalVisible}: CategoryProps) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/${link}`)
        if(isMenuModalVisible) {
            setIsMenuModalVisible(false)
        }
        window.scrollTo(0, 0)
    }

    return (
       
        <div className={`flex flex-col justify-end items-center uppercase gap-5 bg-gray rounded-lg my-5 h-64 relative pb-8 mx-8 mb-32 md:mx-0 md:h-44 md:mb-28 lg:h-56 ${isMenuModalVisible ? 'h-40 mb-12 mt-44 min-w-fit   md:mt-20' : ''}`} >

            <img src={image} alt="category image" className={`absolute bottom-16 max-h-64 ${isMenuModalVisible ? 'bottom-12  md:bottom-16 max-h-40  md:max-h-48' : ''}`}/>

            <p className="font-bold leading-5 tracking-wider text-black">{link}</p>
            
            <button onClick={handleClick} className='flex justify-center items-center gap-3'>
                <p className="font-bold text-sm leading-5 tracking-wide text-black opacity-50 hover:text-orange">Shop</p>
                <div>
                    <img src={iconArrow} alt='arrow icon' />  
                </div>
            </button> 
                  
        </div>
       
    )
}