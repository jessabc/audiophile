import {useContext, useEffect} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from '../interfaces'
import Product from '../componenets/product/Product'
import ProductPageLayout from '../componenets/product/ProductPageLayout'
import { useGetData } from "../hooks/useGetData"


export default function Speakers() {

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

  const speakersData = state.data ?  (state.data as IProduct[]).filter((item: IProduct) => item.category === 'speakers') : null

  const speakersElements = speakersData?.map((speakers, index) => <Product key={speakers.id} item={speakers} index={index}/>)


  return (
      <>
        <ProductPageLayout category='Speakers'>
          {speakersElements}
        </ProductPageLayout>
      </>
   )
}
  
