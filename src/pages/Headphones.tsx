import {useContext, useEffect} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from '../interfaces';
import Product from '../componenets/product/Product';

import { useGetData } from "../hooks/useGetData";

const Headphones = () => {

  const {state, dispatch} = useContext(ProductContext)

  const getData = useGetData()

  useEffect(() => {
    if(state.data.length < 1) {
    getData()
    }
  },[])

  const headphoneData = state.data ?  (state.data as IProduct[])?.filter((item: IProduct) => item.category === 'headphones') : null

  const headphoneElements = headphoneData?.map(headphone => <Product key={headphone.id} item={headphone}/>)

    
  return (
      <>
        <h1>Headphones page</h1>
        {headphoneElements}
      
      </>
    )
  };
  
  export default Headphones;

    
    