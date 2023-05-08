import { useEffect } from "react";
import FeaturedProducts from "../componenets/Home Page/FeaturedProducts";
import HeroProduct from "../componenets/Home Page/HeroProduct";
import Menu from "../componenets/shared/Menu";
import {useContext} from 'react'
import {ProductContext} from '../ProductContext'
import { useGetData } from "../hooks/useGetData";


const Home = () => {

  const {state, dispatch} = useContext(ProductContext)

  const getData = useGetData()

  useEffect(() => {
    if(state.data.length < 1) {
    getData()
    }
  },[])


    return (
      <>
        <div>

          <div>
            <HeroProduct/>
          </div>
         
          <Menu/>

          <FeaturedProducts/>

        </div> 
      
      </>

    )

  }
  
  export default Home;