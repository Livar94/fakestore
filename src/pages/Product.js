import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Product() {
const {productid} = useParams()
// https://fakestoreapi.com/products/1
const [product, setProduct] = useState() 
    const getProduct = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productid}`)
            const productdata = await res.json()
            setProduct(productdata)
        } catch (error) {
            // console.log(error)
            alert(error.message)
            
            
        }
    }
    useEffect(() => {
      getProduct()

    }, [])
  return (
    <div>
      <img src={product?.image} alt="" />
          <p>{product?.title}</p>
          <p>{product?.price}</p>
          <p>{product?.description}</p>
      
    </div>
  )
}
