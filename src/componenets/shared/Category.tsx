import { Link } from "react-router-dom";
import iconArrowRight from '../../../public/assets/shared/desktop/icon-arrow-right.svg'


interface CategoryProps {
    image: string,
    link: string
}


export default function Category({image, link}: CategoryProps) {

    return (
        <div className='bg-blue-500'>
            <img src={image} alt="" />
            <p>{link}</p>
            <Link to={`/${link}`} className='flex'>
                <p>Shop</p>
                <img src={iconArrowRight} alt='' /> 
            </Link>
        </div>
    )
}