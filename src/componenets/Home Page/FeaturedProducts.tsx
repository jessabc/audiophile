import FeaturedProduct from "./FeaturedProduct";
import ZX9Speaker from '../../../public/assets/home/desktop/image-speaker-zx9.png'

export default function FeaturedProducts() {

    return  (
        <>
            <FeaturedProduct>
                <img src={ZX9Speaker} alt="" />
                <p>ZX9
                SPEAKER</p>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            </FeaturedProduct>

            <FeaturedProduct>
                <p>ZX7 SPEAKER</p>
            </FeaturedProduct>

            <FeaturedProduct>
                <p>YX1 EARPHONES</p>
            </FeaturedProduct>
        </>
    )
}