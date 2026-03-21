import React, {useState,useEffect} from 'react'
import axios from 'axios';
import classes from "./Product.module.css"
import ProductCard from './ProductCard';

export default function Product() {
  const [products, setProducts] = useState([]);
   useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            }).catch((err)=>{
                console.log(err)
            })
    }, []);
  return (
     <section className={classes.products_container}>
            { 
            products.map((Singleproduct) => (
                <ProductCard renderAdd ={true} product={Singleproduct} key={Singleproduct.id}/>
            ))
            }
        </section>
  )
}
