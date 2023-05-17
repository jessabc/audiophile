import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces";
import FeaturedProduct1 from './FeaturedProduct1';
import FeaturedProduct2 from './FeaturedProduct2';
import FeaturedProduct3 from './FeaturedProduct3';

export default function FeaturedProducts() {

    const {state, dispatch} = useContext(ProductContext)

        // const [isVisible, domRef] = useFadeInSection()


    // const featuredProduct1 = state.data?.find(item => item.name === "ZX9 Speaker")
    // const featuredProduct2 = state.data?.find(item => item.name === "ZX7 Speaker")
    // const featuredProduct3 = state.data?.find(item => item.name === "YX1 Wireless Earphones")

    const navigate = useNavigate()

    const routeChange = (featuredProduct: IProduct | undefined) => { 
        console.log(featuredProduct)
        let path = `/${featuredProduct?.category}/${featuredProduct?.slug}`; 
        navigate(path, {state: featuredProduct})
        window.scrollTo(0, 0)
    }
 

    return  (
        <div className={`  flex flex-col gap-5 md:mb-20 `}>

            {/* featured product 1 */}
           <FeaturedProduct1/>

            {/* featured product 2 */}
            <FeaturedProduct2/>

            {/* featured product 3 */}
            <FeaturedProduct3/>
        </div>
    )
}