import {useContext, useEffect} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from '../interfaces'
import Product from '../componenets/product/Product'
import { useGetData } from "../hooks/useGetData"
import ProductPageLayout from '../componenets/product/productPageLayout'


export default function Headphones() {

  const {state, dispatch} = useContext(ProductContext)

  const getData = useGetData()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    if(state.data.length < 1) {
      getData()
    }
  },[])

  const headphoneData = state.data ?  (state.data as IProduct[])?.filter((item: IProduct) => item.category === 'headphones') : null

  const headphoneElements = headphoneData?.map((headphone, index) => <Product key={headphone.id} item={headphone} index={index}/>)

    
  return (
      <>
        <ProductPageLayout category='Headphones'>  
          {headphoneElements}
        </ProductPageLayout>
      </>
    )
  }
  
 

    
    