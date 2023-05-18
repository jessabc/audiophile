import { useEffect } from "react"
import FeaturedProducts from "../componenets/Home Page/FeaturedProducts"
import HeroProduct from "../componenets/Home Page/HeroProduct"
import Menu from "../componenets/shared/Menu"
import {useContext} from 'react'
import {ProductContext} from '../ProductContext'
import { useGetData } from "../hooks/useGetData"


export default function Home() {

  const {state} = useContext(ProductContext)

  const getData = useGetData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if(state.data.length < 1) {
      getData()
    }
  },[])


    return (
      <>
        <div className="fade-in">

          <div>
            <HeroProduct/>
          </div>
         
          <Menu/>

          <FeaturedProducts/>

        </div> 
      </>
    )
  }
  
  