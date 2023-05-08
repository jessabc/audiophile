import { Link, useLocation } from "react-router-dom"
import { Includes } from "../../interfaces"
import UpdateCart from "../cart/UpdateCart"
import ItemAddedModal from "../modals/ItemAddedModal"
import { useState } from "react"


export default function DisplayProduct() {

    const [isItemAddedModalVisible, setIsItemAddedModalVisible] = useState(false)

    const location = useLocation()

    const {state: {id, image, name, description, price, features, includes, gallery}} = location

    function getGallery() {
        let galleryArr:string[] = []
        for(let image in gallery) {
        galleryArr = [...galleryArr, gallery[image].mobile] 
        }
        return galleryArr.map(image => <img src={`.${image}`} />)
    }
       

    return  (
        <>
            {/* go back button link */}
            <Link to=".." relative="path">go back</Link>
            
            <div >
                {/* image path???? */}
                <img src={`.${image.mobile}`} alt="" key={id}/>
                <p>{name}</p>
                <p>{description}</p>
                <p> ${price}</p>
    
                {/* add to  cart */}
                <UpdateCart thisProduct = {location.state} isItemAddedModalVisible={isItemAddedModalVisible}
                setIsItemAddedModalVisible={setIsItemAddedModalVisible}
                />

                <p>Features: {features}</p>
                
                {/* in the box */}
                <div>
                    <p>in the box</p>
                    {includes.map((item: Includes, index:number) => <li key={index}>{item.quantity} x {item.item}</li>)}
                </div>

                {getGallery()}

                {isItemAddedModalVisible && <ItemAddedModal isItemAddedModalVisible={isItemAddedModalVisible} setIsItemAddedModalVisible={setIsItemAddedModalVisible} name={name}/>}

            </div>
        
        </>
       
    )
}