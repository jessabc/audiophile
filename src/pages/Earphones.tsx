import {useContext, useEffect} from 'react'
import {ProductContext} from '../ProductContext'
import { IProduct } from '../interfaces';
import Product from '../componenets/product/Product';

import { useGetData } from "../hooks/useGetData";
import ProductPageLayout from '../componenets/product/productPageLayout';

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
      <div>
        {/* <div className='bg-black'>
          <h2 className='font-bold text-3xl text-center
          tracking-wider uppercase text-white py-10'>Headphones</h2>
        </div>
        <div className='px-8 md:px-12 lg:px-32 my-10'>
        {earphoneElements}
          </div>   */}

          <ProductPageLayout category='Earphones'>
          
          {earphoneElements}
          </ProductPageLayout>
      
       
      </div>
    )
  };
  
  export default Earphones;