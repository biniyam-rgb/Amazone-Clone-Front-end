import React, { useEffect, useState } from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoint'
import ProductCard from '../../Component/Product/ProductCard'
import Loader from '../../Component/Loader/Loader'

export default function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : product && (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  )
}
