import { useEffect } from "react";
import FeaturedProducts from "../componenets/Home Page/FeaturedProducts";
import HeroProduct from "../componenets/Home Page/HeroProduct";
import Menu from "../componenets/shared/Menu";
import {useContext} from 'react'
import {ProductContext} from '../ProductContext'
import { useGetData } from "../hooks/useGetData";
 
const Home = () => {

  
  const {state, dispatch} = useContext(ProductContext)

 

  // useEffect(() => {
  //   if(state.data.length < 1) {
  //   getData()
  //   }
  // },[])

  

 const getData = useGetData()
  // const {state, dispatch} = useContext(ProductContext)

  // async function getData() {
  //   try {
  //     const response = await fetch('data.json')
  //     if(!response.ok) {
  //       throw new Error((response.status).toString())
  //     }
  //     const data = await response.json()
  //     dispatch({type:'SET_PRODUCT_DATA', payload: data})
  // }
  //    catch(error) {
  //      console.log(error)
  //   }
  // } 

  // useEffect(() => {
  //   if(state.data.length < 1) {
  //   getData()
  //   }
  // },[])


    return (
      <>
      
        <div>

          {/* <div className={`bg-[url('../../../public/assets/home/mobile/image-header.jpg')] bg-cover bg-center p-44 text-white` }> */}
          <div>
            <HeroProduct>
          
              <p className="">NEW PRODUCT</p>
              <p>XX99 Mark II HeadphoneS</p>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

            </HeroProduct>
          </div>
         

          <Menu/>

          <FeaturedProducts/>

        </div> 
      
      </>

    )

  };
  
  export default Home;