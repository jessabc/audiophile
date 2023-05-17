import { Link, useLocation } from "react-router-dom"
import { IProduct, Includes, RecommendedProduct } from "../../interfaces"
import ItemAddedModal from "../modals/ItemAddedModal"
import { useContext, useState } from "react"
import OtherProductYouMayLike from "./OtherProductYouMayLike"
import { ProductContext } from "../../ProductContext"
import Counter from "../cart/Counter"
import { FadeInBottomSection } from "../../Animation/FadeInBottomSection"
import { FadeInLeftSection } from "../../Animation/FadeInLeftSection "
import { FadeInRightSection } from "../../Animation/FadeInRightSection"


export default function DisplayProduct() {
    
    const [isItemAddedModalVisible, setIsItemAddedModalVisible] = useState(false)

     const [count, setCount] = useState(0)

    const {state, dispatch} = useContext(ProductContext)

    const location = useLocation()
    const thisProduct = location.state

    const {state: {image, name, description, price, features, includes, gallery, others}} = location

    const youMayAlsoLikeElements = others.map((product: RecommendedProduct, index: number) => <OtherProductYouMayLike key={index} product={product} />)

    const featuresEl = features.split('\n\n').map((paragraph: string, index:number) => <p key={index} className="mb-3">{paragraph}</p>)


    //  WHY DOESNT THIS WORK AS A USEUPDATECART HOOK??????
    function updateCart(thisProduct: IProduct) {    
        const alreadyInCart = state.cart.some((product) => product?.id === thisProduct?.id) 

        if(!alreadyInCart) {
            if(count! > 0) {
                   console.log('incart')
                dispatch({type: 'ADD_TO_CART', payload: {...thisProduct, quantity: count}}) 
            }
        }else if(alreadyInCart) {
            if(count!> 0) {
                dispatch({type: 'UPDATE_ITEM_IN_CART', payload: {...thisProduct, quantity: count}}) 
            }
            if(count === 0) {
                dispatch({type: 'REMOVE_ITEM_IN_CART', payload: {...thisProduct, quantity: count}})
            }  
        }
    }
    // /////////////////////////

    function handleOnClick() {
        updateCart(thisProduct)
        setIsItemAddedModalVisible(true)
        setTimeout(() => {
            setIsItemAddedModalVisible(false)
        }, 2000);
    }
 

    return  (
        <div className="px-8 md:px-12 lg:px-32">

            {/* go back button link */}
            <div className=" fade-in font-medium text-black opacity-50 py-5">
               <Link to=".." relative="path" >Go Back</Link> 
            </div>
            
            <div>

                <div className="fade-in md:flex md:gap-5 lg:gap-20">

                    <div className="md:w-1/2">
                        <img src={`.${image.mobile}`} alt="" className="md:hidden lg:hidden"/>
                        <img src={`.${image.tablet}`} alt=""  className=" hidden md:block lg:hidden"/>
                        <img src={`.${image.desktop}`} alt="" className="hidden md:hidden lg:block"/>
                    </div>
                
                    <div className=" flex flex-col gap-5 py-5 md:w-1/2 md:justify-center md:gap-10 lg:pr-20">
                        <p className="font-bold text-2xl tracking-wide pr-40 md:text-4xl">{name}</p>
                        <p className="font-medium leading-6 text-black opacity-50">{description}</p>
                        <p className="font-bold text-lg  uppercase text-black"> $ {(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price))}</p>
             
                        <div className="flex gap-3">
                            <Counter 
                                count={count} 
                                setCount={setCount}
                                thisProduct={location.state} 
                                isItemAddedModalVisible={isItemAddedModalVisible}
                                setIsItemAddedModalVisible={setIsItemAddedModalVisible}
                            />
  
                            <button 
                                className='w-1/2 font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange h-12 hover:bg-lightOrange'  
                                onClick={handleOnClick}
                            >
                                add to cart
                            </button>
                        </div>
                    </div> 

                </div>

                <div className="lg:flex lg:gap-10 lg:mb-20">
        
                    <div className="lg:w-2/3 fade-in">
                        <FadeInLeftSection>
                            <div className="flex flex-col gap-5 mt-10">
                                <p className=' font-bold text-2xl tracking-wide uppercase text-black md:text-3xl'>Features:</p>
                                <div className="font-medium leading-6 text-black opacity-50 lg:pr-10">
                                    {featuresEl}
                                </div>
                            </div>
                       </FadeInLeftSection>
                    </div>

                    {/* in the box */}
                    <FadeInRightSection>
                        <div className="fade-in flex flex-col gap-5 mt-10 mb-20 md:flex-row lg:flex-col ">
                            <p className=' font-bold text-2xl tracking-wide uppercase text-black md:text-3xl md:w-1/2 lg:w-full'>in the box</p>
                            <ul className="list-none md:w-1/2 lg:w-full">
                                {includes.map((item: Includes, index:number) => 
                                <li key={index} className="my-2 lg:mt-0 lg:mb-5">
                                    <span className="font-bold text-orange">{item.quantity}x </span>  
                                    <span className="font-medium text-black opacity-50 ml-2"> {item.item}</span>
                                </li>)}
                            </ul>
                        </div>
                    </FadeInRightSection>
                </div>

                <div className="mb-20">

                    <div className=" flex flex-col md:flex-row gap-5">
                         
                        <div className="md:w-1/2 flex flex-col gap-5 md:justify-between  ">
                            <FadeInLeftSection>
                                <img src={`.${gallery.first.mobile}`} alt="" className="rounded-lg "/>
                            </FadeInLeftSection>
                            <FadeInLeftSection>
                                <img src={`.${gallery.second.mobile}`} alt="" className="rounded-lg"/>
                            </FadeInLeftSection>
                        </div>
  
                       <div className="md:w-1/2">
                            <FadeInRightSection>
                                <img src={`.${gallery.third.mobile}`} alt="" className="rounded-lg"/>
                            </FadeInRightSection>
                       </div>
                     
                    </div>
 
                </div>

                <div className="mb-44">
                    <FadeInBottomSection>
                        <p className='font-bold text-2xl tracking-wide uppercase text-black mb-12 text-center'>you may also like </p>
                        <div className="md:flex md:gap-5" >
                            {youMayAlsoLikeElements}   
                        </div>
                    </FadeInBottomSection>
                </div>
                
                {isItemAddedModalVisible && 
                <ItemAddedModal 
                    isItemAddedModalVisible={isItemAddedModalVisible} 
                    setIsItemAddedModalVisible={setIsItemAddedModalVisible} 
                    name={name}
                />}

            </div>
        
        </div>
       
    )
}

