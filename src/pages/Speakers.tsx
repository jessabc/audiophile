import {useContext, useEffect} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from '../interfaces';
import Product from '../componenets/product/Product';

import { useGetData } from "../hooks/useGetData";

const Speakers = () => {

  const {state, dispatch} = useContext(ProductContext)

  const getData = useGetData()

  useEffect(() => {
    if(state.data.length < 1) {
    getData()
    }
  },[])

  const speakersData = state.data ?  (state.data as IProduct[]).filter((item: IProduct) => item.category === 'speakers') : null

  const speakersElements = speakersData?.map(speakers => <Product key={speakers.id} item={speakers}/>)


  return (
      <>
        <h1>speakerss page</h1>
        {speakersElements}
      </>
   )

};
  
  export default Speakers;