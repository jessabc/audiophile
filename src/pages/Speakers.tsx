import {useContext, useEffect} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from '../interfaces';
import Product from '../componenets/product/Product';
import ProductPageLayout from '../componenets/product/productPageLayout';

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
      <div className=''>

{/* <div className='bg-black'>
          <h2 className='font-bold text-3xl text-center
          tracking-wider uppercase text-white py-10'>Headphones</h2>
        </div>

        <div className='px-8 md:px-12 lg:px-32 mt-10 '>
        {speakersElements}
          </div>  */}

          <ProductPageLayout category='Speakers'>
          
          {speakersElements}
          </ProductPageLayout>

      </div>
   )

};
  
  export default Speakers;