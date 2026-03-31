import React, { useState, useEffect } from 'react'
import Classes from './Results.module.css'
import LayOut from '../../Component/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoint'
import ProductCard from '../../Component/Product/ProductCard'
import Loader from '../../Component/Loader/Loader'

export default function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        const raw = res.data.products || res.data;
        const mapped = raw.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          image: p.thumbnail,
          rating: { rate: p.rating, count: p.stock },
          description: p.description,
        }));
        setResults(mapped);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={Classes.products__container}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}
