import React ,{useState ,useEffect} from 'react'
import Classes from './Results.module.css' 
import LayOut from '../../Component/LayOut/LayOut' 
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoint'
import ProductCard from '../../Component/Product/ProductCard'




export default function Results() {
  const [results, setresults] = useState([]);
  const {categoryName} = useParams()
  
   useEffect(() => {
    
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setresults(res.data);
      
        
      })
      .catch((err) => {
        console.log(err);
       
      });
  }, [categoryName]);
  return (
   <LayOut>
      <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          <div className={Classes.products__container}>
            {results?.map((Product) => (
              <ProductCard
                key={Product.id}
                product={Product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      </LayOut>
  )
}
