import {useContext} from 'react'
import {ProductContext} from '../../ProductContext'
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces";
import FeaturedProduct1 from './FeaturedProduct1';
import FeaturedProduct2 from './FeaturedProduct2';
import FeaturedProduct3 from './FeaturedProduct3';

export default function FeaturedProducts() {

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