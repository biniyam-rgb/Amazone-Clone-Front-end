import { useState, useEffect } from 'react'
import axios from 'axios';
import classes from "./Product.module.css"
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=20')
      .then((res) => {
        const mapped = res.data.products.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.thumbnail,
          rating: { rate: item.rating, count: item.stock },
          description: item.description,
        }));
        setProducts(mapped);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {products.map((singleProduct) => (
            <ProductCard
              renderAdd={true}
              product={singleProduct}
              key={singleProduct.id}
            />
          ))}
        </section>
      )}
    </>
  );
}
