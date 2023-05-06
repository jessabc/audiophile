import {useContext, useEffect} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from '../interfaces';
import Product from '../componenets/product/Product';

import { useGetData } from "../hooks/useGetData";

const Earphones = () => {

  const {state, dispatch} = useContext(ProductContext)

  const getData = useGetData()

  useEffect(() => {
    if(state.data.length < 1) {
    getData()
    }
  },[])

  const earphoneData = state.data ?  (state.data as IProduct[]).filter((item: IProduct) => item.category === 'earphones') : null

  const earphoneElements = earphoneData?.map(earphone => <Product key={earphone.id} item={earphone}/>)

  return (
      <>
        <h1>earphone page</h1>
        {earphoneElements}
      </>
    )
  };
  
  export default Earphones;