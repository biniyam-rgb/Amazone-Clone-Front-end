import React, {useState,useEffect} from 'react'
import axios from 'axios';
import classes from "./Product.module.css"
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
                setIsLoading(false);   
            }).catch((err)=>{
                console.log(err);
                setIsLoading(false);
            })
    }, []);
  return (
     <>
      {isLoading ? (                                                   
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {products.map((singleProduct) => {
            return (
              <ProductCard
                renderAdd={true}
                product={singleProduct}        
                key={singleProduct.id}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

