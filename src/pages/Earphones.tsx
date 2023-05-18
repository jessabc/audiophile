import {useContext, useEffect} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from '../interfaces'
import Product from '../componenets/product/Product'
import { useGetData } from "../hooks/useGetData"
import ProductPageLayout from '../componenets/product/ProductPageLayout'


export default function Earphones() { 

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

  const earphoneData = state.data ?  (state.data as IProduct[]).filter((item: IProduct) => item.category === 'earphones') : null

  const earphoneElements = earphoneData?.map((earphone, index) => <Product key={earphone.id} item={earphone} index={index}/>)

  return (
      <>
        <ProductPageLayout category='Earphones'>
          {earphoneElements}
        </ProductPageLayout>
      </>
    )
  }
  
