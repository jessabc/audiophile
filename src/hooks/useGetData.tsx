import {useContext} from 'react'
import {ProductContext} from '../ProductContext'
 

export function useGetData() {

  const {dispatch} = useContext(ProductContext)

  async function getData() {
    try {
      const response = await fetch('data.json')
      if(!response.ok) {
        throw new Error((response.status).toString())
      }
      const data = await response.json()
      dispatch({type:'SET_PRODUCT_DATA', payload: data})
    }
     catch(error) {
       alert(error)
    }
  } 
    return getData
  }
