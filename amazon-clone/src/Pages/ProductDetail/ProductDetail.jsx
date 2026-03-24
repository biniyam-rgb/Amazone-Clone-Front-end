import React, { useEffect, useState } from 'react'
import Classes from './ProductDetail.module.css'
import LayOut from '../../Component/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        setProduct(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
  }, [productId])

  return (
    <LayOut>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={Classes.product__container}>
          <img src={product?.image} alt={product?.title} />
          <div>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <p>${product?.price?.toFixed(2)}</p>
          </div>
        </div>
      )}
    </LayOut>
  )
}
