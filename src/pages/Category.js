import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Category() {
  const {categoryname} = useParams()
  const [products, setProducts] = useState() 
    const getProducts = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/category/${categoryname}`)
            const productsdata = await res.json()
            setProducts(productsdata)
        } catch (error) {
            // console.log(error)
            alert(error.message)
            
            
        }
    }
    useEffect(() => {
      getProducts()

    }, [])
  return (
    <div>
      <h2>
        {categoryname}
      </h2>
      {products?.map(product => ( <Link to={`/product/${product.id}`} key={product.id}>
          <div >
          <img src={product.image} alt="" />
          <p>{product.title}</p>
          <p>{product.price}</p>

        </div>
      </Link>
 ))}
    </div>
  )
}