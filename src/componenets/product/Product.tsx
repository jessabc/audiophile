import { IProduct } from "../../interfaces";
import { useNavigate } from "react-router-dom";


interface ProductProps {
    item: IProduct
}


export default function Product({item}:ProductProps) {

    const {category, name, features, image, slug} = item
    
    const navigate = useNavigate()

    const routeChange = () => { 
        let path = `/${category}/${slug}`; 
        navigate(path, {state: item})
    }

    return (
        <div>
            <img src={image.mobile} alt="" />
            <p>{name}</p>
            <p>{features}</p>
            <button onClick={routeChange}>see product</button>
        </div>
    )
}