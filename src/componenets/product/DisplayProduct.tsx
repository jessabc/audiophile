import { Link, useLocation } from "react-router-dom"
import { Includes, RecommendedProduct } from "../../interfaces"
import UpdateCart from "../cart/UpdateCart"
import ItemAddedModal from "../modals/ItemAddedModal"
import { useState } from "react"
import OtherProductYouMayLike from "./OtherProductYouMayLike"


export default function DisplayProduct() {

    const [isItemAddedModalVisible, setIsItemAddedModalVisible] = useState(false)


    const location = useLocation()

    // console.log(location.state)

    const {state: {id, image, name, description, price, features, includes, gallery, others}} = location

  

   

    // function getGallery() {
    //      let galleryArr = []
    //     for(let image in gallery) {
    //     galleryArr = [...galleryArr, gallery[image]] 
    //     } 

    //     return galleryArr
    // }
    

    // const galleryElMob = getGallery().map(image =>  <img src={`.${image.mobile}`} className="rounded-lg mb-5"/>)

    // const galleryElTablet = getGallery().map((image, index) =>  <img src={`.${image.tablet}`} className={`rounded-lg  `}/>)
    


    const youMayAlsoLikeElements = others.map((product: RecommendedProduct) => <OtherProductYouMayLike product={product} />)

    const featuresEl = features.split('\n\n').map(paragraph => <p className="mb-3">{paragraph}</p>)

    console.log(featuresEl)

    return  (
        <div className="px-8 md:px-12 lg:px-32">
            {/* go back button link */}
            <div className="font-medium text-black opacity-50 py-5">
               <Link to=".." relative="path" >Go Back</Link> 
            </div>
            
            
            <div >
                <div className="md:flex md:gap-5 lg:gap-20">
                    <div className="md:w-1/2">
                 
                <img src={`.${image.mobile}`} alt="" className="md:hidden lg:hidden"/>
                <img src={`.${image.tablet}`} alt=""  className=" hidden md:block lg:hidden"/>
                <img src={`.${image.desktop}`} alt="" className="hidden md:hidden lg:block"/>
                 
                </div>
                
                <div className="flex flex-col gap-5 py-5 md:w-1/2 md:justify-center md:gap-10 lg:pr-20">
                   <p className="font-bold text-2xl tracking-wide pr-40 md:text-4xl">{name}</p>
                    <p className="font-medium leading-6 text-black opacity-50">{description}</p>
                    <p className="font-bold text-lg  uppercase text-black"> $ {price}</p>
        
                    {/* add to  cart */}
                    <UpdateCart thisProduct = {location.state} isItemAddedModalVisible={isItemAddedModalVisible}
                    setIsItemAddedModalVisible={setIsItemAddedModalVisible}
                    />
  
                </div> 
                </div>
               


                <div className="lg:flex lg:gap-10 lg:mb-20">
                    <div className="lg:w-2/3">
                        <div className="flex flex-col gap-5 mt-10">
                            <p className=' font-bold text-2xl tracking-wide uppercase text-black md:text-3xl'>Features: </p>

                            <div className="font-medium leading-6 text-black opacity-50 lg:pr-10">
                                {featuresEl}
                            </div>
                        </div>
                    </div>
                
                
                    {/* in the box */}
                    <div className="flex flex-col gap-5 mt-10 mb-20 md:flex-row lg:flex-col ">
                        <p className=' font-bold text-2xl tracking-wide uppercase text-black md:text-3xl md:w-1/2 lg:w-full'>in the box</p>

                        <ul className="list-none md:w-1/2 lg:w-full">
                            {includes.map((item: Includes, index:number) => <li key={index} className="my-2 lg:mt-0 lg:mb-5"><span className="font-bold text-orange">{item.quantity}x </span>  <span className="font-medium text-black opacity-50 ml-2"> {item.item}</span></li>)}


                        </ul>
                    
                    </div>
               
                </div>
              
               
                <div className="mb-20">

                  
                    {/* mobile */}
                    {/* <div className="md:hidden lg:hidden flex flex-col gap-5">
                       <img src={`.${gallery.first.mobile}`} alt="" className="rounded-lg"/>
                        <img src={`.${gallery.second.mobile}`} alt="" className=" rounded-lg"/>
                        <img src={`.${gallery.third.mobile}`} alt="" className=" rounded-lg"/>  
                    </div> */}
                  
                    <div className=" flex flex-col md:flex-row  gap-5  ">
                        <div className="md:w-1/2 flex flex-col gap-5 md:justify-between  ">
                           <img src={`.${gallery.first.mobile}`} alt="" className="rounded-lg "/>
                            <img src={`.${gallery.second.mobile}`} alt="" className="rounded-lg"/> 
                        </div>
                       
                       <div className="md:w-1/2">
                        <img src={`.${gallery.third.mobile}`} alt="" className="rounded-lg"/> 
                       </div>
                         
                    </div>

                    {/* desktop */}
                    {/* <div className="hidden md:hidden  lg:flex md:gap-5  bg-orange ">
                        <div className="md:w-1/2 md:flex md:flex-col md:gap-5 lg:justify-between">
                           <img src={`.${gallery.first.mobile}`} alt="" className="rounded-lg"/>
                            <img src={`.${gallery.second.mobile}`} alt="" className="rounded-lg"/> 
                        </div>
                       
                       <div className="md:w-1/2">
                        <img src={`.${gallery.third.mobile}`} alt="" className="rounded-lg"/> 
                       </div>
                         
                    </div> */}
 
                </div>

                <div className="mb-44">
                    <p className=' font-bold text-2xl tracking-wide uppercase text-black mb-12 text-center'>you may also like </p>
                    <div className="md:flex md:gap-5" >
                     {youMayAlsoLikeElements}   
                    </div>
                    
                </div>
                
                {isItemAddedModalVisible && <ItemAddedModal isItemAddedModalVisible={isItemAddedModalVisible} setIsItemAddedModalVisible={setIsItemAddedModalVisible} name={name}/>}

            </div>
        
        </div>
       
    )
}