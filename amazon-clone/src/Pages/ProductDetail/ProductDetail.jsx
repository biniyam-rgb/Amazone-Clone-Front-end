import React, { useEffect, useState } from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoint'
import Loader from '../../Component/Loader/Loader'
import { Rating } from '@mui/material'
import Classes from './ProductDetail.module.css'

export default function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        const p = res.data;
        // normalize dummyjson shape to match what the component expects
        setProduct({
          ...p,
          image: p.thumbnail,
          rating: { rate: p.rating, count: p.stock },
        });
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
        <div className={Classes.container}>
          {/* Left - Image */}
          <div className={Classes.image__section}>
            <img src={product.image} alt={product.title} className={Classes.image} />
          </div>

          {/* Right - All info */}
          <div className={Classes.info__section}>
            <h1 className={Classes.title}>{product.title}</h1>
            <div className={Classes.rating}>
              <Rating value={product.rating?.rate} precision={0.1} readOnly />
              <span>{product.rating?.count} ratings</span>
            </div>
            <hr />
            <p className={Classes.price}>${product.price?.toFixed(2)}</p>
            <p className={Classes.description}>{product.description}</p>
            <button className={Classes.cart__btn}>Add to Cart</button>
          </div>
        </div>
      )}
    </LayOut>
  )
}
